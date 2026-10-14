import Image from 'next/image';
import type {Engagement} from '@/content/work';

type Props = {
    item: Engagement;
    sizes: string;
    priority?: boolean;
    // In a list the link already names the project, so the image is decorative.
    decorative?: boolean;
};

// Shows the project's real cover image when there is one. Otherwise renders
// a typographic cover: a brand graphic, deliberately not a fake screenshot.
export default function WorkMedia({item, sizes, priority = false, decorative = false}: Props) {
    if (item.cover) {
        return (
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface">
                <Image
                    src={item.cover.src}
                    alt={decorative ? '' : item.cover.alt}
                    fill
                    sizes={sizes}
                    priority={priority}
                    className="object-cover object-top"
                />
            </div>
        );
    }

    return (
        <div
            aria-hidden
            className="work-cover relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-xl border border-line p-5 sm:p-7"
        >
            <span className="eyebrow">{item.sector}</span>
            <div>
                <p className="text-[1.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-ink sm:text-[2rem]">
                    {item.title.split(/[:(]/)[0].trim()}
                </p>
                {item.contractor && item.contractor !== item.title && (
                    <p className="mt-3 text-sm text-accent">
                        through {item.contractor}
                    </p>
                )}
            </div>
            <span/>
        </div>
    );
}
