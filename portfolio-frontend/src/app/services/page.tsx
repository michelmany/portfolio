import ContactCta from '@/components/sections/ContactCta';
import {engagementModels, services} from '@/content/services';
import {pageMetadata} from '@/lib/metadata';

export const metadata = pageMetadata({
    title: 'Services',
    description:
        'Michel Many provides frontend engineering, full-stack and product development, and enterprise and publishing platform work to agencies and product teams.',
    path: '/services',
});

export default function ServicesPage() {
    return (
        <>
            <section aria-labelledby="page-heading" className="wrap pb-16 pt-16 sm:pt-24 md:pb-20">
                <p className="eyebrow rise">Services</p>
                <h1 id="page-heading" className="rise mt-6 max-w-[20ch] text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
                    Senior engineering, from interface to integration.
                </h1>
                <p className="rise rise-delay mt-8 max-w-2xl text-lg text-ink-soft sm:text-xl">
                    Michel Many provides frontend and full-stack engineering to agencies and product teams. The
                    specialism is the frontend, with full-stack capability covering the APIs, data and platform work around it.
                </p>
            </section>

            <section aria-label="Service areas" className="border-t border-line">
                <div className="wrap">
                    {services.map((service, index) => (
                        <article
                            key={service.id}
                            id={service.id}
                            aria-labelledby={`${service.id}-heading`}
                            className="grid gap-6 border-b border-line py-14 last:border-b-0 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-20"
                        >
                            <div>
                                <span className="eyebrow" aria-hidden>0{index + 1}</span>
                                <h2 id={`${service.id}-heading`} className="mt-4 text-3xl font-semibold sm:text-[2.25rem]">
                                    {service.title}
                                </h2>
                                <p className="mt-4 max-w-md text-lg text-ink-soft">{service.summary}</p>
                            </div>
                            <ul className="self-start border-t border-line">
                                {service.points.map((point) => (
                                    <li key={point} className="flex gap-4 border-b border-line py-4 text-ink">
                                        <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden/>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section aria-labelledby="models-heading" className="border-t border-line bg-surface">
                <div className="wrap py-20 md:py-28">
                    <p className="eyebrow">Engagement models</p>
                    <h2 id="models-heading" className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
                        Engagement models
                    </h2>
                    <p className="mt-4 max-w-2xl text-ink-soft">
                        All work is contracted business to business. The scope and arrangement are agreed with you
                        before work begins.
                    </p>
                    <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
                        {engagementModels.map((model, index) => (
                            <li key={model.id} className="bg-paper p-6 sm:p-8">
                                <span className="eyebrow" aria-hidden>0{index + 1}</span>
                                <h3 className="mt-6 text-xl font-semibold">{model.title}</h3>
                                <p className="mt-3 text-ink-soft">{model.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <ContactCta heading="Have a project or a team that needs support?"/>
        </>
    );
}
