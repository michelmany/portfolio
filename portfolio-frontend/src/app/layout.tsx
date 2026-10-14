import type {Metadata, Viewport} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import {site} from '@/content/site';

const geist = Geist({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-geist',
});

const geistMono = Geist_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-geist-mono',
});

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: {
        default: 'Michel Many | Software Engineering for Agencies & Product Teams',
        template: '%s | Michel Many',
    },
    description: site.description,
    applicationName: site.name,
    openGraph: {
        type: 'website',
        siteName: site.name,
        locale: site.locale,
        url: '/',
    },
    twitter: {
        card: 'summary_large_image',
    },
};

export const viewport: Viewport = {
    themeColor: [
        {media: '(prefers-color-scheme: light)', color: '#f5f4f0'},
        {media: '(prefers-color-scheme: dark)', color: '#111315'},
    ],
};

// "Michel Many" is a brand, not a legal entity, so it is described as a
// WebSite. Michel Many Limited is described as an Organization on /legal.
const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: 'en-GB',
    author: {'@id': `${site.url}/about#person`},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en-GB" className={`${geist.variable} ${geistMono.variable}`}>
        <body className="flex min-h-dvh flex-col antialiased">
        <a
            href="#main"
            className="sr-only z-50 rounded-full bg-accent text-accent-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:px-4 focus:py-2"
        >
            Skip to content
        </a>
        <Header/>
        <main id="main" className="flex-1">{children}</main>
        <Footer/>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(websiteJsonLd)}}
        />
        </body>
        </html>
    );
}
