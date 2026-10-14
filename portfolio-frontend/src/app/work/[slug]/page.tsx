import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft, ArrowUpRight} from 'lucide-react';
import ContactCta from '@/components/sections/ContactCta';
import WorkGallery from '@/components/sections/WorkGallery';
import WorkMedia from '@/components/sections/WorkMedia';
import {engagements, getEngagement, workCategories} from '@/content/work';
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
                        Work
                    </Link>
                    <p className="eyebrow rise mt-12">{engagement.sector}</p>
                    <h1 id="page-heading" className="rise mt-5 max-w-[18ch] text-4xl font-semibold leading-[1.06] sm:text-5xl md:text-6xl">
                        {engagement.title}
                    </h1>
                    <p className="rise mt-5 font-medium text-accent">{engagement.attribution}</p>
                </header>

                {/* Real images only; typographic covers are used in lists, not here. */}
                {engagement.cover && (
                    <figure className="wrap rise rise-delay pb-14 md:pb-20">
                        <WorkMedia item={engagement} priority sizes="(min-width: 1216px) 1152px, 100vw"/>
                        {engagement.cover.caption && (
                            <figcaption className="mt-3 text-sm text-muted">{engagement.cover.caption}</figcaption>
                        )}
                    </figure>
                )}

                <div className="border-t border-line">
                    <div className="wrap grid gap-12 py-14 md:grid-cols-[18rem_1fr] md:gap-16 md:py-20">
                        <aside aria-label="Engagement details">
                            <dl className="space-y-6 text-sm">
                                <div>
                                    <dt className="eyebrow">Type</dt>
                                    <dd className="mt-2 text-base text-ink">{workCategories[engagement.category].label}</dd>
                                </div>
                                {engagement.contractor && (
                                    <div>
                                        <dt className="eyebrow">Through</dt>
                                        <dd className="mt-2 text-base text-ink">{engagement.contractor}</dd>
                                    </div>
                                )}
                                {engagement.contractor && engagement.contractor !== engagement.title && (
                                    <div>
                                        <dt className="eyebrow">Brand / end client</dt>
                                        <dd className="mt-2 text-base text-ink">{engagement.title}</dd>
                                    </div>
                                )}
                                {engagement.period && (
                                    <div>
                                        <dt className="eyebrow">Period</dt>
                                        <dd className="mt-2 text-base text-ink">{engagement.period}</dd>
                                    </div>
                                )}
                                {engagement.technologies && (
                                    <div>
                                        <dt className="eyebrow">Confirmed technologies</dt>
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
                                        <dt className="eyebrow">{engagement.links.length > 1 ? 'Links' : 'Public link'}</dt>
                                        <dd className="mt-2 flex flex-col items-start gap-2">
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
                            <section aria-labelledby="overview-heading">
                                <h2 id="overview-heading" className="text-2xl font-semibold">Overview</h2>
                                <p className="mt-4 text-lg text-ink-soft">{engagement.summary}</p>
                            </section>

                            <section aria-labelledby="context-heading" className="mt-14">
                                <h2 id="context-heading" className="text-2xl font-semibold">
                                    {engagement.category === 'product' ? 'Product context' : 'Engagement context'}
                                </h2>
                                <div className="mt-4 space-y-4 text-lg text-ink-soft">
                                    {engagement.context.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            </section>

                            <section aria-labelledby="contribution-heading" className="mt-14">
                                <h2 id="contribution-heading" className="text-2xl font-semibold">Engineering contribution</h2>
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

                {engagement.highlights && (
                    <section aria-labelledby="highlights-heading" className="border-t border-line">
                        <div className="wrap py-14 md:py-20">
                            <h2 id="highlights-heading" className="text-2xl font-semibold">What the product includes</h2>
                            <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
                                {engagement.highlights.map((group) => (
                                    <div key={group.title}>
                                        <h3 className="text-lg font-semibold">{group.title}</h3>
                                        {group.description && <p className="mt-1 text-sm text-muted">{group.description}</p>}
                                        <ul className="mt-4 border-t border-line">
                                            {group.items.map((item) => (
                                                <li key={item} className="flex gap-3 border-b border-line py-3 text-ink-soft">
                                                    <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden/>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {engagement.gallery && <WorkGallery gallery={engagement.gallery}/>}

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
