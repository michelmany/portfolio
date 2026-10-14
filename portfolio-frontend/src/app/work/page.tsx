import ContactCta from '@/components/sections/ContactCta';
import WorkList from '@/components/sections/WorkList';
import {engagements} from '@/content/work';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'Selected Work',
    description:
        'Selected engineering engagements by Michel Many with agencies including Human Made, Fueled and Medico Digital.',
    path: '/work',
});

export default function WorkPage() {
    return (
        <>
            <section aria-labelledby="page-heading" className="wrap pb-16 pt-16 sm:pt-24 md:pb-20">
                <p className="eyebrow rise">Selected Work</p>
                <h1 id="page-heading" className="rise mt-6 max-w-[20ch] text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                    Engineering contributions with agencies and product teams.
                </h1>
                <p className="rise rise-delay mt-8 max-w-2xl text-lg text-ink-soft sm:text-xl">
                    Michel Many often works as part of an agency’s delivery team. Each engagement below names the
                    agency or company we contracted with and describes our contribution, not the whole project.
                </p>
            </section>

            <section aria-label="Engagements" className="wrap pb-20 md:pb-28">
                <WorkList items={engagements} headingLevel="h2"/>
            </section>

            <ContactCta/>
        </>
    );
}
