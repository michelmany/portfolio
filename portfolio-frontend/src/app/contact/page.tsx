import Link from 'next/link';
import ContactForm from './ContactForm';
import {contracting, site} from '@/content/site';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'Contact',
    description:
        'Tell Michel Many about your project or engineering needs. Email hello@michelmany.com or use the contact form.',
    path: '/contact',
});

export default function ContactPage() {
    return (
        <section aria-labelledby="page-heading" className="wrap pb-20 pt-16 sm:pt-24 md:pb-28">
            <div className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">
                <div>
                    <p className="eyebrow rise">Contact</p>
                    <h1 id="page-heading" className="rise mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl">
                        Tell us about your project or engineering needs.
                    </h1>
                    <p className="rise rise-delay mt-6 max-w-md text-lg text-ink-soft">
                        A short description is enough to start: the product or platform, your team, and the kind of
                        support you are looking for.
                    </p>

                    <dl className="mt-12 space-y-6 border-t border-line pt-8">
                        <div>
                            <dt className="eyebrow">Email</dt>
                            <dd className="mt-2 text-lg">
                                <a href={`mailto:${site.email}`} className="link">{site.email}</a>
                            </dd>
                        </div>
                        <div>
                            <dt className="eyebrow">Location</dt>
                            <dd className="mt-2 text-ink-soft">{site.location}</dd>
                        </div>
                        <div>
                            <dt className="eyebrow">Contracting</dt>
                            <dd className="mt-2 text-sm text-ink-soft">
                                <span className="font-medium text-ink">{contracting.heading}</span> {contracting.body}
                            </dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <ContactForm/>
                    <p className="mt-6 text-sm text-muted">
                        We use the details you send only to reply to your enquiry. See the{' '}
                        <Link href="/privacy" className="link">privacy notice</Link>.
                    </p>
                </div>
            </div>
        </section>
    );
}
