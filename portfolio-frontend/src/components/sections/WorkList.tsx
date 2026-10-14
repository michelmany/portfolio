import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import type {Engagement} from '@/content/work';

type Props = {
    items: Engagement[];
    headingLevel?: 'h2' | 'h3';
};

export default function WorkList({items, headingLevel = 'h3'}: Props) {
    const Heading = headingLevel;

    return (
        <ul className="border-t border-line">
            {items.map((item) => (
                <li key={item.slug} className="border-b border-line">
                    <Link
                        href={`/work/${item.slug}`}
                        className="group grid gap-3 py-8 md:grid-cols-[1.1fr_1.4fr_auto] md:gap-10 md:py-10"
                    >
                        <div>
                            <Heading className="text-2xl font-semibold leading-tight transition-colors group-hover:text-accent sm:text-[1.75rem]">
                                {item.title}
                            </Heading>
                            <p className="mt-2 text-sm font-medium text-accent">{item.attribution}</p>
                        </div>
                        <div>
                            <p className="text-ink-soft">{item.summary}</p>
                            <p className="eyebrow mt-3">{item.sector}</p>
                        </div>
                        <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-line-strong transition group-hover:border-accent group-hover:text-accent md:inline-flex" aria-hidden>
                            <ArrowUpRight className="h-4 w-4"/>
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
