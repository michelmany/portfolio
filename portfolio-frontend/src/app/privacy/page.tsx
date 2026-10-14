import Link from 'next/link';
import {contractingEntities, site} from '@/content/site';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'Privacy Notice',
    description: 'How personal data sent through michelmany.com is received and handled.',
    path: '/privacy',
});

const sections = [
    {
        id: 'who',
        heading: 'Who receives and handles your data',
        body: (
            <>
                <p>
                    michelmany.com is the website of Michel Many, the commercial brand through which Michel Moraes
                    provides software engineering services. Messages sent through the contact form or to{' '}
                    <a href={`mailto:${site.email}`} className="link text-ink">{site.email}</a> are received and
                    handled by Michel Moraes.
                </p>
                <p>
                    If an enquiry leads to an engagement, the personal data needed for that engagement is handled by
                    the contracting entity confirmed in the proposal and agreement:
                </p>
                <ul className="space-y-2">
                    {contractingEntities.map((entity) => (
                        <li key={entity.id}>
                            <span className="text-ink">{entity.name}</span>. {entity.summary}
                        </li>
                    ))}
                </ul>
                <p>
                    Registration and address details for both are in the{' '}
                    <Link href="/legal" className="link text-ink">legal notice</Link>.
                </p>
                <p>
                    For any question about your data, email{' '}
                    <a href={`mailto:${site.email}`} className="link text-ink">{site.email}</a>.
                </p>
            </>
        ),
    },
    {
        id: 'collect',
        heading: 'What I collect',
        body: (
            <>
                <p>
                    I only collect personal data that you choose to send. If you use the{' '}
                    <Link href="/contact" className="link text-ink">contact form</Link>, I receive your name, email,
                    company (if provided) and your message. If you email me directly, I receive your email and
                    whatever it contains.
                </p>
                <p>
                    This website does not use analytics, advertising or tracking tools, and it does not set cookies.
                </p>
            </>
        ),
    },
    {
        id: 'use',
        heading: 'How I use it',
        body: (
            <p>
                I use your details to reply to your message and, if we go on to work together, to discuss and arrange
                that work. I do this because it is in my legitimate interests to respond to enquiries, and, where
                relevant, to take steps at your request before entering into a contract. I do not sell your data or
                use it for marketing lists.
            </p>
        ),
    },
    {
        id: 'share',
        heading: 'Who processes it',
        body: (
            <>
                <p>
                    Contact form submissions are delivered to my inbox by email using Twilio SendGrid, which acts as
                    the email delivery provider. SendGrid may process data outside the UK and the EU; transfers are covered by
                    its own data protection terms.
                </p>
                <p>
                    Like any website, the hosting provider may record technical information such as IP addresses in
                    server logs in order to operate and secure the service.
                </p>
            </>
        ),
    },
    {
        id: 'retention',
        heading: 'How long I keep it',
        body: (
            <p>
                I keep messages for as long as needed to handle them and any business relationship that follows,
                and delete them when they are no longer needed.
            </p>
        ),
    },
    {
        id: 'rights',
        heading: 'Your rights',
        body: (
            <p>
                Under UK and EU data protection law you can ask to access, correct or delete your personal data, or
                object to how it is used. Email <a href={`mailto:${site.email}`} className="link text-ink">{site.email}</a> to
                make a request. You also have the right to complain to a data protection authority, such as the Information
                Commissioner’s Office in the UK (
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="link text-ink">ico.org.uk</a>)
                or the Agencia Española de Protección de Datos in Spain (
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="link text-ink">aepd.es</a>).
            </p>
        ),
    },
];

export default function PrivacyPage() {
    return (
        <section aria-labelledby="page-heading" className="wrap pb-20 pt-16 sm:pt-24 md:pb-28">
            <p className="eyebrow">Privacy</p>
            <h1 id="page-heading" className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl">Privacy notice</h1>
            <p className="mt-4 text-sm text-muted">Last updated: 14 October 2026</p>

            <div className="mt-12 max-w-2xl divide-y divide-line border-t border-line">
                {sections.map((section) => (
                    <section key={section.id} aria-labelledby={`${section.id}-heading`} className="py-8">
                        <h2 id={`${section.id}-heading`} className="text-xl font-semibold">{section.heading}</h2>
                        <div className="mt-3 space-y-4 text-ink-soft">{section.body}</div>
                    </section>
                ))}
            </div>
        </section>
    );
}
