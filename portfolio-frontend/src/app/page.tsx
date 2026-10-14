import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import ButtonLink from '@/components/ui/ButtonLink';
import ContactCta from '@/components/sections/ContactCta';
import WorkList from '@/components/sections/WorkList';
import WorkMedia from '@/components/sections/WorkMedia';
import {engagementModels, services} from '@/content/services';
import {clientEngagements, products} from '@/content/work';
import {profile} from '@/content/profile';
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
                <h1
                    id="hero-heading"
                    className="rise max-w-[16ch] text-[2.5rem] font-semibold leading-[1.04] sm:text-6xl md:text-[4.5rem]"
                >
                    {site.tagline}
                </h1>
                <p className="rise rise-delay mt-8 max-w-2xl text-lg text-ink sm:text-xl">
                    Michel Many provides senior frontend and full-stack engineering for web applications, enterprise
                    platforms and SaaS products.
                </p>
                <p className="rise rise-delay mt-4 max-w-2xl text-ink-soft">
                    Led by Michel Moraes, a senior software engineer with 15+ years of experience working with
                    international teams.
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
                                Engineering services
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
                                Much of this work happens inside agency teams. Each engagement shows the agency or
                                company it was done through and the engineering contribution.
                            </p>
                        </div>
                        <Link href="/work" className="link shrink-0 text-ink-soft">All work</Link>
                    </div>
                    <div className="mt-12">
                        <WorkList items={clientEngagements}/>
                    </div>
                </div>
            </section>

            {/* 4. Engagement models */}
            <section aria-labelledby="models-heading" className="border-t border-line bg-surface">
                <div className="wrap grid gap-12 py-20 md:grid-cols-[1fr_2fr] md:py-28">
                    <div>
                        <p className="eyebrow">Collaboration</p>
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

            {/* 5. Independent product */}
            {products.map((product) => (
                <section key={product.slug} aria-labelledby={`${product.slug}-heading`} className="border-t border-line">
                    <div className="wrap grid gap-8 py-20 md:grid-cols-[1fr_2fr] md:py-28">
                        <div>
                            <p className="eyebrow">Independent product</p>
                            <h2 id={`${product.slug}-heading`} className="mt-4 text-3xl font-semibold sm:text-4xl">
                                {product.title}
                            </h2>
                        </div>
                        <div className="max-w-3xl">
                            <Link href={`/work/${product.slug}`} className="mb-8 block" tabIndex={-1} aria-hidden>
                                <WorkMedia item={product} sizes="(min-width: 768px) 66vw, 100vw" decorative/>
                            </Link>
                            <p className="text-lg text-ink-soft">{product.summary}</p>
                            {product.technologies && (
                                <p className="eyebrow mt-5">{product.technologies.join(' · ')}</p>
                            )}
                            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                                <Link href={`/work/${product.slug}`} className="link text-ink">
                                    About {product.title}
                                </Link>
                                {product.links?.slice(0, 1).map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link inline-flex items-center gap-1 text-ink-soft"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-4 w-4" aria-hidden/>
                                        <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* 6. Michel */}
            <section aria-labelledby="michel-heading" className="border-t border-line bg-surface">
                <div className="wrap grid gap-8 py-20 md:grid-cols-[1fr_2fr] md:py-28">
                    <div>
                        <p className="eyebrow">Who leads the work</p>
                        <h2 id="michel-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">
                            {profile.name}
                        </h2>
                    </div>
                    <div className="flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-start">
                        <Image
                            src={profile.photo}
                            alt={profile.name}
                            width={80}
                            height={80}
                            className="h-20 w-20 shrink-0 rounded-full object-cover grayscale"
                        />
                        <div className="space-y-5 text-lg text-ink-soft">
                            <p>
                                Michel Many is led by Michel Moraes, a senior software engineer with 15+ years of
                                experience in frontend and full-stack development, working with international and
                                distributed teams.
                            </p>
                            <p>
                                <Link href="/about" className="link text-ink">About &amp; Experience</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Contact */}
            <ContactCta/>
        </>
    );
}
