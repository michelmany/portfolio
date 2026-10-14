import ButtonLink from '@/components/ui/ButtonLink';
import {site} from '@/content/site';

type Props = {
    heading?: string;
    body?: string;
};

export default function ContactCta({
    heading = 'Need senior engineering capacity?',
    body = 'Share a few details about the project, the team and the timeline to start the conversation.',
}: Props) {
    return (
        <section aria-labelledby="contact-cta" className="border-t border-line">
            <div className="wrap grid gap-8 py-20 md:grid-cols-[1.5fr_1fr] md:items-end md:py-28">
                <div>
                    <h2 id="contact-cta" className="text-3xl font-semibold leading-tight sm:text-4xl">
                        {heading}
                    </h2>
                    <p className="mt-4 max-w-xl text-lg text-ink-soft">{body}</p>
                </div>
                <div className="flex flex-col items-start gap-4 md:items-end">
                    <ButtonLink href="/contact">Discuss a project</ButtonLink>
                    <a href={`mailto:${site.email}`} className="link text-sm text-muted">
                        or email {site.email}
                    </a>
                </div>
            </div>
        </section>
    );
}
