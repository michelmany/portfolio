import {NextResponse} from 'next/server';
import sgMail from '@sendgrid/mail';

// Configure SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
    try {
        const {name, email, subject, message} = await request.json();

        // Validate the input
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                {message: 'Missing required fields'},
                {status: 400}
            );
        }

        // Create email content
        const mailData = {
            to: 'hello@michelmany.com',
            from: 'hello@michelmany.com',
            subject: `Contact Form: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
        <div>
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
        };

        await sgMail.send(mailData);

        return NextResponse.json({message: 'Email sent successfully'});
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            {message: 'Failed to send email'},
            {status: 500}
        );
    }
}
