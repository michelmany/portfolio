import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    poweredByHeader: false,
    async redirects() {
        // Only pages with a relevant equivalent are redirected. Personal pages
        // (/resume, /github and the old /portfolio/* projects) are no longer
        // part of this site and intentionally return 404. See
        // docs/personal-site-migration.md.
        return [
            {source: '/portfolio', destination: '/work', permanent: true},
        ];
    },
};

export default nextConfig;
