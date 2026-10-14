import Image from 'next/image';
import Link from 'next/link';
import ContactCta from '@/components/sections/ContactCta';
import {engagementModels} from '@/content/services';
import {contracting, contractingEntities} from '@/content/site';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'About',
    description:
        'Michel Many is the commercial brand through which Michel Moraes provides senior frontend and full-stack engineering to digital agencies, consultancies and product teams.',
    path: '/about',
});

export default function AboutPage() {
    return (
        <>
            <section aria-labelledby="page-heading" className="wrap pb-16 pt-16 sm:pt-24 md:pb-20">
                <p className="eyebrow rise">About</p>
                <h1 id="page-heading" className="rise mt-6 max-w-[20ch] text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                    Specialist software engineering for agencies and product teams.
                </h1>
            </section>

            <section aria-labelledby="what-heading" className="border-t border-line">
                <div className="wrap grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-24">
                    <h2 id="what-heading" className="text-2xl font-semibold sm:text-3xl">What we do</h2>
                    <div className="max-w-2xl space-y-5 text-lg text-ink-soft">
                        <p>
                            Michel Many is the commercial brand through which Michel Moraes provides software
                            engineering services, with B2B engagements available through a UK limited company or as a
                            self-employed professional in Spain.
                        </p>
                        <p>
                            Michel Many provides senior frontend and full-stack engineering for web applications,
                            enterprise and publishing platforms, and SaaS products.
                        </p>
                        <p>
                            Our specialism is frontend engineering: interfaces, component systems, accessibility and
                            performance, built with React, TypeScript and Next.js. Our full-stack capability covers the
                            APIs, integrations, data and CMS work that frontend features depend on, using Node.js, PHP
                            and WordPress where the project calls for them.
                        </p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="who-heading" className="border-t border-line">
                <div className="wrap grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-24">
                    <h2 id="who-heading" className="text-2xl font-semibold sm:text-3xl">Who we work with</h2>
                    <div className="max-w-2xl space-y-5 text-lg text-ink-soft">
                        <p>
                            We work with digital agencies, consultancies and product teams that need experienced
                            engineering capacity, whether to strengthen a delivery team, take on a defined piece of
                            work, or keep an existing platform moving.
                        </p>
                        <p>
                            When we work through an agency, the agency remains the client’s partner. We contribute
                            engineering within its team and its ways of working.
                        </p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="how-heading" className="border-t border-line">
                <div className="wrap grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-24">
                    <h2 id="how-heading" className="text-2xl font-semibold sm:text-3xl">How we collaborate</h2>
                    <div className="max-w-2xl">
                        <p className="text-lg text-ink-soft">
                            Engagements are contracted business to business and arranged in one of three ways:
                        </p>
                        <dl className="mt-6 divide-y divide-line border-y border-line">
                            {engagementModels.map((model) => (
                                <div key={model.id} className="py-5">
                                    <dt className="font-semibold">{model.title}</dt>
                                    <dd className="mt-1 text-ink-soft">{model.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            <section aria-labelledby="contracting-heading" className="border-t border-line">
                <div className="wrap grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-24">
                    <h2 id="contracting-heading" className="text-2xl font-semibold sm:text-3xl">Contracting</h2>
                    <div className="max-w-2xl">
                        <p className="text-lg text-ink-soft">
                            {contracting.heading} {contracting.body}
                        </p>
                        <dl className="mt-6 divide-y divide-line border-y border-line">
                            {contractingEntities.map((entity) => (
                                <div key={entity.id} className="py-5">
                                    <dt className="font-semibold">{entity.name}</dt>
                                    <dd className="mt-1 text-ink-soft">{entity.summary}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="mt-4 text-sm text-muted">
                            Registration and address details are in the{' '}
                            <Link href="/legal" className="link">legal notice</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <section aria-labelledby="leadership-heading" className="border-t border-line bg-surface">
                <div className="wrap grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-24">
                    <h2 id="leadership-heading" className="text-2xl font-semibold sm:text-3xl">Leadership</h2>
                    <div className="flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start">
                        <Image
                            src="/images/profile-michelmany.jpeg"
                            alt="Michel Moraes"
                            width={96}
                            height={96}
                            className="h-24 w-24 shrink-0 rounded-full object-cover grayscale"
                        />
                        <p className="text-lg text-ink-soft">
                            Michel Many is led by Michel Moraes, a software engineer with 15+ years of experience in
                            frontend and full-stack development.
                        </p>
                    </div>
                </div>
            </section>

            <ContactCta/>
        </>
    );
}
