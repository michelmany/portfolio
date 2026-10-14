import Image from 'next/image';
import type {Engagement} from '@/content/work';

type Props = {
    gallery: NonNullable<Engagement['gallery']>;
};

export default function WorkGallery({gallery}: Props) {
    return (
        <section aria-labelledby="gallery-heading" className="border-t border-line bg-surface">
            <div className="wrap py-14 md:py-20">
                <h2 id="gallery-heading" className="text-2xl font-semibold">Screens</h2>

                {gallery.map((group) => (
                    <div key={group.title} className="mt-10">
                        <h3 className="text-lg font-semibold">{group.title}</h3>
                        {group.description && <p className="mt-1 max-w-2xl text-sm text-muted">{group.description}</p>}

                        <ul
                            className={`mt-6 grid gap-6 ${
                                group.frame === 'desktop'
                                    ? 'md:grid-cols-2'
                                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                            }`}
                        >
                            {group.images.map((image) => (
                                <li key={image.src}>
                                    <figure>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            sizes={
                                                group.frame === 'desktop'
                                                    ? '(min-width: 768px) 50vw, 100vw'
                                                    : '(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw'
                                            }
                                            className={`h-auto w-full border border-line ${
                                                group.frame === 'desktop' ? 'rounded-xl' : 'rounded-[1.25rem]'
                                            }`}
                                        />
                                        {image.caption && (
                                            <figcaption className="mt-3 text-sm text-ink-soft">{image.caption}</figcaption>
                                        )}
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
