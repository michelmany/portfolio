import type {Metadata} from 'next';
import Link from 'next/link';
import ButtonLink from '@/components/ui/ButtonLink';

export const metadata: Metadata = {
    title: 'Page not found',
    robots: {index: false},
};

export default function NotFound() {
    return (
        <section aria-labelledby="page-heading" className="wrap pb-24 pt-16 sm:pt-24 md:pb-32">
            <p className="eyebrow">404</p>
            <h1 id="page-heading" className="mt-6 max-w-[20ch] text-4xl font-semibold leading-[1.08] sm:text-5xl">
                This page isn’t here.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
                The page may have moved as part of the new Michel Many website. These are good places to continue:
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-lg">
                <li><Link href="/services" className="link">Services</Link></li>
                <li><Link href="/work" className="link">Selected Work</Link></li>
                <li><Link href="/about" className="link">About</Link></li>
            </ul>
            <div className="mt-10">
                <ButtonLink href="/contact">Discuss a project</ButtonLink>
            </div>
        </section>
    );
}
