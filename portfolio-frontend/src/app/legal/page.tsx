import Link from 'next/link';
import {contracting, contractingEntities, site} from '@/content/site';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'Legal Notice',
    description: 'Legal information about Michel Many and the entities through which engagements are contracted.',
    path: '/legal',
});

export default function LegalPage() {
    return (
        <section aria-labelledby="page-heading" className="wrap pb-20 pt-16 sm:pt-24 md:pb-28">
            <p className="eyebrow">Legal</p>
            <h1 id="page-heading" className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl">Legal notice</h1>

            <div className="mt-12 max-w-2xl divide-y divide-line border-t border-line">
                <section aria-labelledby="website-heading" className="py-8">
                    <h2 id="website-heading" className="text-xl font-semibold">This website</h2>
                    <div className="mt-3 space-y-4 text-ink-soft">
                        <p>
                            michelmany.com is the website of Michel Many, the commercial brand through which Michel
                            Moraes provides software engineering services.
                        </p>
                        <p>
                            Contact:{' '}
                            <a href={`mailto:${site.email}`} className="link text-ink">{site.email}</a>
                        </p>
                    </div>
                </section>

                <section aria-labelledby="entities-heading" className="py-8">
                    <h2 id="entities-heading" className="text-xl font-semibold">Contracting entities</h2>
                    <p className="mt-3 text-ink-soft">{contracting.body}</p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {contractingEntities.map((entity) => (
                            <section
                                key={entity.id}
                                aria-labelledby={`${entity.id}-heading`}
                                className="rounded-2xl border border-line bg-surface p-6"
                            >
                                <h3 id={`${entity.id}-heading`} className="font-semibold">{entity.name}</h3>
                                <p className="mt-1 text-sm text-ink-soft">{entity.summary}</p>
                                <dl className="mt-5 space-y-4 text-sm">
                                    {entity.facts.map((fact) => (
                                        <div key={fact.label}>
                                            <dt className="eyebrow">{fact.label}</dt>
                                            <dd className="mt-1 text-ink">{fact.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="privacy-heading" className="py-8">
                    <h2 id="privacy-heading" className="text-xl font-semibold">Privacy</h2>
                    <p className="mt-3 text-ink-soft">
                        How personal data sent through this website is handled is described in the{' '}
                        <Link href="/privacy" className="link text-ink">privacy notice</Link>.
                    </p>
                </section>
            </div>
        </section>
    );
}
