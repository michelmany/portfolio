import type {Metadata} from 'next';
import {site} from '@/content/site';

type PageMetadata = {
    title: string;
    description: string;
    path: string;
    // Use the title as-is instead of the "%s | Michel Many" template.
    absoluteTitle?: boolean;
};

// Next.js merges metadata shallowly, so each page sets its own canonical,
// Open Graph and Twitter fields in full.
const socialImage = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Michel Many: software engineering for agencies and product teams',
};

export function pageMetadata({title, description, path, absoluteTitle}: PageMetadata): Metadata {
    const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

    return {
        title: absoluteTitle ? {absolute: title} : title,
        description,
        alternates: {canonical: path},
        openGraph: {
            type: 'website',
            siteName: site.name,
            locale: site.locale,
            url: path,
            title: fullTitle,
            description,
            images: [socialImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [socialImage],
        },
    };
}
