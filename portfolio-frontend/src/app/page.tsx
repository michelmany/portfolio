import Link from 'next/link';
import ButtonLink from '@/components/ui/ButtonLink';
import ContactCta from '@/components/sections/ContactCta';
import WorkList from '@/components/sections/WorkList';
import {engagementModels, services} from '@/content/services';
import {engagements} from '@/content/work';
import {pageMetadata} from '@/lib/metadata';
import {site} from '@/content/site';

export const metadata = pageMetadata({
    title: 'Michel Many | Software Engineering for Agencies & Product Teams',
    description: site.description,
    path: '/',
    absoluteTitle: true,
});

export default function HomePage() {
    return (
        <>
            {/* 1. Hero */}
            <section aria-labelledby="hero-heading" className="wrap pb-20 pt-16 sm:pt-24 md:pb-28 md:pt-32">
                <p className="eyebrow rise">{site.tagline}</p>
                <h1
                    id="hero-heading"
                    className="rise mt-6 max-w-[22ch] text-[2.125rem] font-semibold leading-[1.08] sm:text-5xl md:text-[3.75rem]"
                >
                    Michel Many provides senior frontend and full-stack engineering for web applications, enterprise
                    platforms and SaaS products.
                </h1>
                <p className="rise rise-delay mt-8 max-w-2xl text-lg text-ink-soft sm:text-xl">
                    We support international teams through B2B contracts, embedded engineering engagements and project
                    delivery.
                </p>
                <div className="rise rise-delay mt-10 flex flex-wrap gap-3">
                    <ButtonLink href="/contact">Discuss a project</ButtonLink>
                    <ButtonLink href="/work" variant="secondary">Explore selected work</ButtonLink>
                </div>
            </section>

            {/* 2. Services */}
            <section aria-labelledby="services-heading" className="border-t border-line bg-surface">
                <div className="wrap py-20 md:py-28">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <p className="eyebrow">Services</p>
                            <h2 id="services-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
                                What we provide
                            </h2>
                        </div>
                        <Link href="/services" className="link text-ink-soft">All services</Link>
                    </div>

                    <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
                        {services.map((service, index) => (
                            <li key={service.id} className="flex flex-col bg-surface p-6 sm:p-8">
                                <span className="eyebrow" aria-hidden>0{index + 1}</span>
                                <h3 className="mt-6 text-xl font-semibold">
                                    <Link href={`/services#${service.id}`} className="hover:text-accent">
                                        {service.title}
                                    </Link>
                                </h3>
                                <p className="mt-3 text-ink-soft">{service.summary}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* 3. Selected work */}
            <section aria-labelledby="work-heading" className="border-t border-line">
                <div className="wrap py-20 md:py-28">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <p className="eyebrow">Selected Work</p>
                            <h2 id="work-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
                                Engineering with agencies and product teams
                            </h2>
                            <p className="mt-4 max-w-2xl text-ink-soft">
                                Much of our work happens inside agency teams. Each engagement shows who we worked
                                through and what we contributed.
                            </p>
                        </div>
                        <Link href="/work" className="link shrink-0 text-ink-soft">All work</Link>
                    </div>
                    <div className="mt-12">
                        <WorkList items={engagements}/>
                    </div>
                </div>
            </section>

            {/* 4. Engagement models */}
            <section aria-labelledby="models-heading" className="border-t border-line bg-surface">
                <div className="wrap grid gap-12 py-20 md:grid-cols-[1fr_2fr] md:py-28">
                    <div>
                        <p className="eyebrow">How we work together</p>
                        <h2 id="models-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
                            Ways to engage
                        </h2>
                        <p className="mt-4 text-ink-soft">
                            Work is contracted business to business, and shaped around how your team already operates.
                        </p>
                    </div>
                    <dl className="divide-y divide-line border-y border-line">
                        {engagementModels.map((model) => (
                            <div key={model.id} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                                <dt className="font-semibold">{model.title}</dt>
                                <dd className="text-ink-soft">{model.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* 5. Company */}
            <section aria-labelledby="company-heading" className="border-t border-line">
                <div className="wrap grid gap-8 py-20 md:grid-cols-[1fr_2fr] md:py-28">
                    <div>
                        <p className="eyebrow">About</p>
                        <h2 id="company-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
                            Michel Many
                        </h2>
                    </div>
                    <div className="max-w-2xl space-y-5 text-lg text-ink-soft">
                        <p>
                            Michel Many provides software engineering to digital agencies, consultancies and product
                            teams that need senior engineering capacity.
                        </p>
                        <p>
                            It is led by Michel Moraes, a software engineer with 15+ years of experience in frontend and
                            full-stack development. Engagements can be contracted in the UK or in Spain.
                        </p>
                        <p>
                            <Link href="/about" className="link text-ink">More about Michel Many</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. Commercial CTA */}
            <ContactCta/>
        </>
    );
}
