import Link from 'next/link';
import ContactCta from '@/components/sections/ContactCta';
import WorkList from '@/components/sections/WorkList';
import {clientEngagements, products, workCategories} from '@/content/work';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'Selected Work',
    description:
        'Selected client engagements through agencies including Human Made, Fueled and Medico Digital, and MadTicket, an independent product by Michel Moraes.',
    path: '/work',
});

const groups = [
    {id: 'client-engagements', ...workCategories.client, items: clientEngagements},
    {id: 'independent-products', ...workCategories.product, items: products},
];

export default function WorkPage() {
    return (
        <>
            <section aria-labelledby="page-heading" className="wrap pb-16 pt-16 sm:pt-24 md:pb-20">
                <p className="eyebrow rise">Selected Work</p>
                <h1 id="page-heading" className="rise mt-6 max-w-[20ch] text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                    Engineering contributions with agencies and product teams.
                </h1>
                <p className="rise rise-delay mt-8 max-w-2xl text-lg text-ink-soft sm:text-xl">
                    Client engagements and independent products are listed separately. Experience with previous
                    employers is on{' '}
                    <Link href="/about#experience" className="link text-ink">About &amp; Experience</Link>.
                </p>
            </section>

            {groups.map((group) => (
                <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="wrap pb-20 md:pb-24">
                    <div className="mb-8 max-w-2xl">
                        <h2 id={`${group.id}-heading`} className="text-2xl font-semibold sm:text-3xl">{group.title}</h2>
                        <p className="mt-3 text-ink-soft">{group.description}</p>
                    </div>
                    <WorkList items={group.items}/>
                </section>
            ))}

            <ContactCta/>
        </>
    );
}
