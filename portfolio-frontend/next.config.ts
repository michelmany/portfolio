import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    poweredByHeader: false,
    async redirects() {
        // Old URLs from the previous site, pointed at their current equivalents.
        // The old /portfolio/* project pages have no equivalent and return 404
        // (see docs/content-audit.md).
        return [
            {source: '/portfolio', destination: '/work', permanent: true},
            {source: '/resume', destination: '/about#cv', permanent: true},
            {
                source: '/resume/michel-moraes-cv-resume-2025.pdf',
                destination: '/cv/Michel_Moraes_CV_Product_Engineering_2026.pdf',
                permanent: true,
            },
            {source: '/github', destination: '/about#links', permanent: true},
        ];
    },
};

export default nextConfig;
