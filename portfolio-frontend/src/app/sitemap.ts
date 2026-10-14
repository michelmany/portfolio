import type {MetadataRoute} from 'next';
import {site} from '@/content/site';
import {engagements} from '@/content/work';

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ['/', '/services', '/work', '/about', '/contact', '/legal', '/privacy'];

    return [
        ...pages.map((path) => ({url: `${site.url}${path === '/' ? '' : path}`})),
        ...engagements.map((engagement) => ({url: `${site.url}/work/${engagement.slug}`})),
    ];
}
