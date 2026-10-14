import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft, ArrowUpRight} from 'lucide-react';
import ContactCta from '@/components/sections/ContactCta';
import {engagements, getEngagement} from '@/content/work';
import {pageMetadata} from '@/lib/metadata';

type Props = {
    params: Promise<{slug: string}>;
};

export const dynamicParams = false;

export function generateStaticParams() {
    return engagements.map((engagement) => ({slug: engagement.slug}));
}

export async function generateMetadata({params}: Props) {
    const {slug} = await params;
    const engagement = getEngagement(slug);
    if (!engagement) return {};

    return pageMetadata({
        title: engagement.title,
        description: `${engagement.attribution}. ${engagement.summary}`,
        path: `/work/${engagement.slug}`,
    });
}

export default async function EngagementPage({params}: Props) {
    const {slug} = await params;
    const engagement = getEngagement(slug);
    if (!engagement) notFound();

    const index = engagements.findIndex((item) => item.slug === engagement.slug);
    const next = engagements[(index + 1) % engagements.length];

    return (
        <>
            <article aria-labelledby="page-heading">
                <header className="wrap pb-14 pt-10 sm:pt-14 md:pb-20">
                    <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
                        <ArrowLeft className="h-4 w-4" aria-hidden/>
                        Selected Work
                    </Link>
                    <p className="eyebrow rise mt-12">{engagement.sector}</p>
                    <h1 id="page-heading" className="rise mt-5 max-w-[18ch] text-4xl font-semibold leading-[1.06] sm:text-5xl md:text-6xl">
                        {engagement.title}
                    </h1>
                    <p className="rise mt-5 font-medium text-accent">{engagement.attribution}</p>
                    <p className="rise rise-delay mt-8 max-w-2xl text-lg text-ink-soft sm:text-xl">{engagement.summary}</p>
                </header>

                <div className="border-t border-line">
                    <div className="wrap grid gap-12 py-14 md:grid-cols-[18rem_1fr] md:gap-16 md:py-20">
                        <aside aria-label="Engagement details">
                            <dl className="space-y-6 text-sm">
                                <div>
                                    <dt className="eyebrow">Through</dt>
                                    <dd className="mt-2 text-base text-ink">{engagement.contractor}</dd>
                                </div>
                                {engagement.contractor !== engagement.title && (
                                    <div>
                                        <dt className="eyebrow">Brand / end client</dt>
                                        <dd className="mt-2 text-base text-ink">{engagement.title}</dd>
                                    </div>
                                )}
                                {engagement.technologies && (
                                    <div>
                                        <dt className="eyebrow">Technologies</dt>
                                        <dd className="mt-3">
                                            <ul className="flex flex-wrap gap-2">
                                                {engagement.technologies.map((tech) => (
                                                    <li key={tech} className="rounded-full border border-line px-3 py-1 text-ink-soft">
                                                        {tech}
                                                    </li>
                                                ))}
                                            </ul>
                                        </dd>
                                    </div>
                                )}
                                {engagement.links && (
                                    <div>
                                        <dt className="eyebrow">Public link</dt>
                                        <dd className="mt-2 space-y-1">
                                            {engagement.links.map((link) => (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="link inline-flex items-center gap-1 text-base text-ink"
                                                >
                                                    {link.label}
                                                    <ArrowUpRight className="h-4 w-4" aria-hidden/>
                                                    <span className="sr-only">(opens in a new tab)</span>
                                                </a>
                                            ))}
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        </aside>

                        <div className="max-w-2xl">
                            <section aria-labelledby="context-heading">
                                <h2 id="context-heading" className="text-2xl font-semibold">Context</h2>
                                <div className="mt-4 space-y-4 text-lg text-ink-soft">
                                    {engagement.context.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </section>

                            <section aria-labelledby="contribution-heading" className="mt-14">
                                <h2 id="contribution-heading" className="text-2xl font-semibold">Our contribution</h2>
                                <ul className="mt-6 border-t border-line">
                                    {engagement.contribution.map((item) => (
                                        <li key={item} className="flex gap-4 border-b border-line py-4 text-lg">
                                            <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>

                {next && next.slug !== engagement.slug && (
                    <nav aria-label="Next engagement" className="border-t border-line bg-surface">
                        <Link href={`/work/${next.slug}`} className="wrap group flex items-center justify-between gap-6 py-10">
                            <span>
                                <span className="eyebrow block">Next</span>
                                <span className="mt-2 block text-2xl font-semibold group-hover:text-accent">{next.title}</span>
                            </span>
                            <ArrowUpRight className="h-6 w-6 shrink-0 text-muted group-hover:text-accent" aria-hidden/>
                        </Link>
                    </nav>
                )}
            </article>

            <ContactCta/>
        </>
    );
}
