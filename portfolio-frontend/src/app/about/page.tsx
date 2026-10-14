import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight, Download} from 'lucide-react';
import ContactCta from '@/components/sections/ContactCta';
import {
    certification,
    currentRole,
    education,
    languages,
    previousRoles,
    profile,
    skills,
} from '@/content/profile';
import {contractingEntities, site} from '@/content/site';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'Michel Moraes | Experience & CV | Michel Many',
    description:
        'Michel Moraes is a senior software engineer with 15+ years of experience in frontend and full-stack development. Experience, skills, education and CV.',
    path: '/about',
    absoluteTitle: true,
});

const uk = contractingEntities.find((entity) => entity.id === 'uk');

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/about#person`,
    name: profile.name,
    jobTitle: 'Senior Software Engineer',
    description: profile.summary,
    url: `${site.url}/about`,
    image: `${site.url}${profile.photo}`,
    email: site.email,
    homeLocation: {'@type': 'Place', name: 'Madrid, Spain'},
    knowsLanguage: languages.map((language) => language.name),
    alumniOf: [
        {'@type': 'CollegeOrUniversity', name: 'Estácio de Sá University'},
        {'@type': 'EducationalOrganization', name: 'INFNET Institute'},
    ],
    hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: certification.title,
        recognizedBy: {'@type': 'Organization', name: certification.issuer},
        url: certification.href,
    },
    worksFor: uk && {'@type': 'Organization', '@id': `${site.url}/legal#michel-many-limited`, name: uk.name},
    sameAs: profile.links.map((link) => link.href),
};

function ExternalLink({href, children}: {href: string; children: React.ReactNode}) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
            {children}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden/>
            <span className="sr-only">(opens in a new tab)</span>
        </a>
    );
}

export default function AboutPage() {
    return (
        <>
            {/* Profile */}
            <section aria-labelledby="page-heading" className="wrap pb-16 pt-16 sm:pt-24 md:pb-20">
                <p className="eyebrow rise">About &amp; Experience</p>
                <div className="rise mt-8 flex flex-col gap-8 sm:flex-row sm:items-center">
                    <Image
                        src={profile.photo}
                        alt={profile.name}
                        width={112}
                        height={112}
                        priority
                        className="h-28 w-28 shrink-0 rounded-full object-cover grayscale"
                    />
                    <div>
                        <h1 id="page-heading" className="text-4xl font-semibold leading-[1.06] sm:text-5xl md:text-6xl">
                            {profile.name}
                        </h1>
                        <p className="mt-3 max-w-3xl text-lg font-medium text-accent">{profile.headline}</p>
                    </div>
                </div>

                <div className="rise rise-delay mt-12 grid gap-10 md:grid-cols-[2fr_1fr] md:gap-16">
                    <div className="space-y-5 text-lg text-ink-soft">
                        <p>{profile.summary}</p>
                        <p>
                            Michel Many is the commercial brand through which I provide software engineering services,
                            mostly to agencies and product teams.
                        </p>
                    </div>
                    <ul className="space-y-2 border-t border-line pt-5 text-ink-soft md:border-l md:border-t-0 md:pl-8 md:pt-0">
                        {profile.facts.map((fact) => (
                            <li key={fact}>{fact}</li>
                        ))}
                    </ul>
                </div>

                <div id="cv" className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <a
                        href={profile.cv.href}
                        download
                        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line-strong px-6 text-[0.9375rem] font-medium text-ink transition hover:border-ink"
                    >
                        <Download className="h-4 w-4" aria-hidden/>
                        {profile.cv.label}
                    </a>
                    <ul id="links" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft" aria-label="Professional profiles">
                        {profile.links.map((link) => (
                            <li key={link.href}>
                                <ExternalLink href={link.href}>{link.label}</ExternalLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" aria-labelledby="experience-heading" className="border-t border-line">
                <div className="wrap grid gap-10 py-16 md:grid-cols-[1fr_2.4fr] md:py-24">
                    <h2 id="experience-heading" className="text-2xl font-semibold sm:text-3xl">Experience</h2>

                    <ol className="space-y-12">
                        <li>
                            <p className="eyebrow">{currentRole.period}</p>
                            <h3 className="mt-2 text-xl font-semibold">{currentRole.company}</h3>
                            <p className="text-ink">{currentRole.title}</p>
                            <p className="mt-1 text-sm text-muted">{currentRole.location}</p>
                            <p className="mt-4 text-ink-soft">{currentRole.description}</p>

                            <div className="mt-6 rounded-2xl border border-line bg-surface p-6">
                                <h4 className="eyebrow">Selected client engagements</h4>
                                <ul className="mt-4 divide-y divide-line">
                                    {currentRole.engagements.map((engagement) => (
                                        <li key={engagement.company} className="py-4 first:pt-0 last:pb-0">
                                            <p className="font-semibold">{engagement.company}</p>
                                            <p className="text-sm text-ink-soft">
                                                {engagement.title}, {engagement.period}
                                            </p>
                                            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                                                {engagement.projects.map((project) => (
                                                    <li key={project.slug}>
                                                        <Link href={`/work/${project.slug}`} className="link text-ink">
                                                            {project.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                        <li>
                            <p className="eyebrow">Own product</p>
                            <h3 className="mt-2 text-xl font-semibold">MadTicket</h3>
                            <p className="text-ink">Creator &amp; Full-Stack Engineer</p>
                            <p className="mt-4 text-ink-soft">
                                Designed, built and launched a SaaS ticketing platform serving over 1,000 users, using
                                Next.js, TypeScript, PostgreSQL, Prisma and Stripe.{' '}
                                <Link href="/work/madticket" className="link text-ink">More about MadTicket</Link>
                            </p>
                        </li>

                        <li>
                            <h3 className="eyebrow">Earlier professional experience</h3>
                            <ol className="mt-6 space-y-10">
                                {previousRoles.map((role) => (
                                    <li key={role.company}>
                                        <p className="eyebrow">{role.period}</p>
                                        <h4 className="mt-2 text-xl font-semibold">{role.company}</h4>
                                        <p className="text-ink">{role.title}</p>
                                        <p className="mt-1 text-sm text-muted">{role.location}</p>
                                        <p className="mt-4 text-ink-soft">{role.description}</p>
                                    </li>
                                ))}
                            </ol>
                        </li>
                    </ol>
                </div>
            </section>

            {/* Skills */}
            <section aria-labelledby="skills-heading" className="border-t border-line bg-surface">
                <div className="wrap grid gap-10 py-16 md:grid-cols-[1fr_2.4fr] md:py-24">
                    <h2 id="skills-heading" className="text-2xl font-semibold sm:text-3xl">Technical skills</h2>
                    <dl className="divide-y divide-line border-y border-line">
                        {skills.map((skill) => (
                            <div key={skill.group} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
                                <dt className="font-semibold">{skill.group}</dt>
                                <dd className="text-ink-soft">{skill.items}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Education, certification, languages */}
            <section aria-labelledby="qualifications-heading" className="border-t border-line">
                <div className="wrap grid gap-10 py-16 md:grid-cols-[1fr_2.4fr] md:py-24">
                    <h2 id="qualifications-heading" className="text-2xl font-semibold sm:text-3xl">Qualifications</h2>
                    <div className="grid gap-10 sm:grid-cols-3">
                        <div>
                            <h3 className="eyebrow">Education</h3>
                            <ul className="mt-4 space-y-4">
                                {education.map((item) => (
                                    <li key={item.title}>
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-sm text-ink-soft">{item.institution}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="eyebrow">Certification</h3>
                            <p className="mt-4 font-medium">{certification.title}</p>
                            <p className="text-sm text-ink-soft">
                                <ExternalLink href={certification.href}>{certification.issuer}</ExternalLink>
                            </p>
                        </div>
                        <div>
                            <h3 className="eyebrow">Languages</h3>
                            <ul className="mt-4 space-y-2">
                                {languages.map((language) => (
                                    <li key={language.name}>
                                        <span className="font-medium">{language.name}</span>
                                        <span className="text-ink-soft">: {language.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContactCta
                heading="Working on something together?"
                body="Get in touch about a project, an engineering need or a professional opportunity."
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(personJsonLd)}}
            />
        </>
    );
}
