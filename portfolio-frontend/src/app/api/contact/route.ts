import {NextResponse} from 'next/server';
import sgMail from '@sendgrid/mail';
import {validateContact} from '@/lib/contact';

// Sender and recipient are unchanged from the original implementation.
const MAIL_TO = 'hello@michelmany.com';
const MAIL_FROM = 'hello@michelmany.com';

// The form shows the direct email address alongside this message.
const UNAVAILABLE_MESSAGE = 'Sorry, your message could not be sent because the contact form is temporarily unavailable.';

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({message: 'Invalid request.'}, {status: 400});
    }

    // Honeypot: only automated submissions fill this in. Drop them silently.
    if (typeof body.website === 'string' && body.website.trim() !== '') {
        return NextResponse.json({message: 'Message received.'});
    }

    const result = validateContact(body);
    if (!result.ok) {
        return NextResponse.json(
            {message: 'Please check the highlighted fields.', errors: result.errors},
            {status: 400}
        );
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
        console.error('Contact form: SENDGRID_API_KEY is not configured.');
        return NextResponse.json({message: UNAVAILABLE_MESSAGE}, {status: 503});
    }

    const {name, email, company, message} = result.data;
    const safe = {
        name: escapeHtml(name),
        email: escapeHtml(email),
        company: escapeHtml(company || 'Not provided'),
        message: escapeHtml(message).replace(/\n/g, '<br>'),
    };

    try {
        sgMail.setApiKey(apiKey);
        await sgMail.send({
            to: MAIL_TO,
            from: MAIL_FROM,
            replyTo: email,
            subject: `New enquiry from ${name.replace(/[\r\n]+/g, ' ')}${company ? ` (${company.replace(/[\r\n]+/g, ' ')})` : ''}`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\n\nMessage:\n${message}`,
            html: `
        <div>
          <h2>New enquiry via michelmany.com</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Company:</strong> ${safe.company}</p>
          <p><strong>Message:</strong><br>${safe.message}</p>
        </div>
      `,
        });

        return NextResponse.json({message: 'Message sent.'});
    } catch (error) {
        console.error('Contact form: email sending failed:', error);
        return NextResponse.json({message: UNAVAILABLE_MESSAGE}, {status: 502});
    }
}
