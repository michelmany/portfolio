// Selected work under the Michel Many brand.
//
// Rules for this file:
// - Only list confirmed engagements.
// - Always state the agency or company the work was done through. Do not
//   present end clients as direct clients when the work happened through an
//   agency.
// - Do not attribute an engagement to Michel Many Limited or to Michel Moraes
//   (self-employed, Spain) unless the contracting entity has been confirmed.
//   Use the brand ("Michel Many") instead.
// - Only list technologies, facts and links that have been confirmed. Leave a
//   field out rather than guessing; no metrics or results without evidence.

export type WorkCategory = 'client' | 'product';

export const workCategories: Record<WorkCategory, {title: string; label: string; description: string}> = {
    client: {
        title: 'Client engagements',
        label: 'Client engagement',
        description:
            'B2B engagements, mostly as part of agency delivery teams. Each one names the agency or company the work was done through and describes the engineering contribution, not the whole project.',
    },
    product: {
        title: 'Independent products',
        label: 'Independent product',
        description: 'Products created by Michel Moraes.',
    },
};

export type Engagement = {
    slug: string;
    title: string;
    category: WorkCategory;
    // The agency or company the work was done through (client engagements).
    contractor?: string;
    // Only when known. For agency work this is the agency engagement period.
    period?: string;
    attribution: string;
    sector: string;
    summary: string;
    context: string[];
    contribution: string[];
    technologies?: string[];
    // Public, relevant links only.
    links?: {label: string; href: string}[];
    // Real images only: public pages or published store screenshots. Never
    // stock images or mock-ups presented as the project. Projects without
    // images get a typographic cover.
    cover?: WorkImage;
    gallery?: {title: string; description?: string; frame: 'desktop' | 'phone'; images: WorkImage[]}[];
    highlights?: {title: string; description?: string; items: string[]}[];
};

export type WorkImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
};

const madticketImage = (file: string, alt: string, caption: string, desktop = false): WorkImage => ({
    src: `/images/work/madticket/${file}`,
    alt,
    caption,
    width: desktop ? 1920 : 780,
    height: desktop ? 1080 : 1688,
});

export const engagements: Engagement[] = [
    {
        slug: 'skyscanner',
        title: 'Skyscanner',
        category: 'client',
        contractor: 'Human Made',
        period: 'Human Made engagement, Feb 2026 - Present',
        attribution: 'Engineering contribution through Human Made',
        sector: 'Travel · Content platform',
        summary:
            'Interactive interfaces, reusable components, localisation tooling and accessibility improvements on a WordPress-based platform for Skyscanner.',
        context: [
            'Skyscanner is a global travel search company. This work formed part of Human Made’s engagement on a WordPress-based platform for Skyscanner that is present in 25+ markets.',
            'Michel Many contributed frontend engineering as part of the Human Made team.',
        ],
        contribution: [
            'Interactive UI built with React and TypeScript',
            'Animated interface elements using Lottie',
            'Reusable components for the platform',
            'Tooling to support localisation across markets',
            'Accessibility improvements',
        ],
        technologies: ['React', 'TypeScript', 'WordPress', 'Lottie'],
    },
    {
        slug: 'agbi',
        title: 'AGBI (Arabian Gulf Business Insight)',
        category: 'client',
        contractor: 'Human Made',
        period: 'Human Made engagement, Feb 2026 - Present',
        attribution: 'Engineering contribution through Human Made',
        sector: 'Media · Digital publishing',
        summary:
            'Frontend and backend features, performance improvements, WordPress editor optimisation, content migrations and maintenance for a digital publishing platform.',
        context: [
            'AGBI (Arabian Gulf Business Insight) is a business news publication covering the Gulf region. This work formed part of Human Made’s engagement on its digital publishing platform.',
            'Michel Many contributed engineering as part of the Human Made team.',
        ],
        contribution: [
            'Frontend features for the publishing platform',
            'Backend features supporting the platform',
            'Performance improvements',
            'WordPress editor optimisation',
            'Content migrations',
            'Platform maintenance',
        ],
        technologies: ['WordPress'],
        links: [{label: 'agbi.com', href: 'https://www.agbi.com'}],
    },
    {
        slug: 'news-uk-video-platform',
        title: 'News UK: Sun Video',
        category: 'client',
        contractor: 'Human Made',
        period: 'Human Made engagement, Feb 2026 - Present',
        attribution: 'Engineering contribution through Human Made',
        sector: 'Media · Video',
        summary:
            'Architecture and full-stack development contribution to Sun Video, the proprietary video platform News UK launched for The Sun.',
        context: [
            'News UK is a British news publisher. Sun Video is the video platform of The Sun, launched in 2026 across web, iOS and Android. This work formed part of Human Made’s engagement on the platform.',
            'Michel Many contributed to the architecture and full-stack development of a proprietary video platform, including frontend interfaces, video player functionality, API integrations and backend services, within an Agile team.',
        ],
        contribution: [
            'Contribution to the platform architecture',
            'Frontend interfaces',
            'Video player functionality',
            'API integrations',
            'Backend services',
        ],
        links: [{label: 'Sun Video', href: 'https://www.thesun.co.uk/videos/'}],
        cover: {
            src: '/images/work/news-uk/sun-video-cover.webp',
            alt: 'Three screens of Sun Video on mobile web: featured carousel, series rails and entertainment rails',
            caption: 'Sun Video at thesun.co.uk/videos on mobile, 14 October 2026',
            width: 1920,
            height: 1200,
        },
        gallery: [
            {
                title: 'Sun Video on mobile web',
                description:
                    'The live product at thesun.co.uk/videos, captured on 14 October 2026. Programming changes daily. The screens show the platform as a whole; the contribution is described above.',
                frame: 'phone',
                images: [
                    {
                        src: '/images/work/news-uk/sun-video-mobile-top.webp',
                        alt: 'Sun Video mobile homepage with The Sun header and a featured series carousel',
                        caption: 'Featured series carousel',
                        width: 780,
                        height: 1400,
                    },
                    {
                        src: '/images/work/news-uk/sun-video-mobile-scroll1.webp',
                        alt: 'Sun Video series rails: True Stories and From The Newsroom, with episode cards and durations',
                        caption: 'Series rails and episode cards',
                        width: 780,
                        height: 1400,
                    },
                    {
                        src: '/images/work/news-uk/sun-video-mobile-scroll2.webp',
                        alt: 'Sun Video rails for sport and Life & Entertainment series',
                        caption: 'Sport and entertainment series',
                        width: 780,
                        height: 1400,
                    },
                ],
            },
        ],
    },
    {
        slug: 'goosehead-insurance',
        title: 'Goosehead Insurance',
        category: 'client',
        contractor: 'Fueled',
        period: 'Fueled engagement, 2026',
        attribution: 'Engineering contribution through Fueled',
        sector: 'Insurance · Customer application',
        summary:
            'Complex features for a customer-facing insurance application, built with React and TypeScript within a distributed product engineering team.',
        context: [
            'Goosehead Insurance is a US insurance agency. This work formed part of Fueled’s engagement on a customer-facing insurance application.',
            'Michel Many contributed engineering as part of a distributed product engineering team.',
        ],
        contribution: [
            'Complex application features built with React and TypeScript',
            'Collaboration within a distributed product engineering team',
        ],
        technologies: ['React', 'TypeScript'],
    },
    {
        slug: 'medico-digital',
        title: 'Medico Digital',
        category: 'client',
        contractor: 'Medico Digital',
        period: '2025 - 2026',
        attribution: 'Engineering services for Medico Digital',
        sector: 'Healthcare · Pharmaceutical',
        summary:
            'Engineering for healthcare and pharmaceutical websites and applications, with a focus on performance, accessibility and reusable UI.',
        context: [
            'Michel Many has provided engineering services to Medico Digital on websites and applications in healthcare and the pharmaceutical industry.',
            'Individual end clients are not named here.',
        ],
        contribution: [
            'Websites and applications for healthcare and pharmaceutical organisations',
            'Headless CMS and GraphQL integrations',
            'Performance and accessibility work',
            'Reusable UI components',
        ],
        technologies: ['React', 'Astro', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Headless CMS'],
    },
    {
        slug: 'madticket',
        title: 'MadTicket',
        category: 'product',
        attribution: 'Independent product created by Michel Moraes',
        sector: 'SaaS · Ticketing · Live events',
        summary:
            'A ticketing platform for live events in Spain, with more than 1,000 users: event discovery and ticket sales on the web, three native iOS apps, and tools for promoters. Created, developed and launched by Michel Moraes.',
        context: [
            'MadTicket is an independent product that Michel Moraes designed, built and launched as its creator and full-stack engineer.',
            'It lists concerts, parties, festivals and shows in Madrid, Barcelona, Valencia, Sevilla and Bilbao. Promoters can sell tickets through MadTicket, or list an event they already sell elsewhere for free, with a link to the official ticket site.',
            'The product covers the whole event journey: a web platform at madticket.es and three native iOS apps on the App Store, for attendees, for promoters and for door staff. MadTicket announces Android versions as coming soon.',
            'Promoters pay no monthly fee; MadTicket charges a commission per ticket sold.',
        ],
        contribution: [
            'Product creation, design and launch',
            'Web platform and promoter tools built with Next.js and TypeScript',
            'Data layer with PostgreSQL and Prisma',
            'Payments, refunds and payouts with Stripe',
            'Three native iOS apps published on the App Store',
            'QR ticketing and access control, on iOS and in the browser',
        ],
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe'],
        links: [
            {label: 'madticket.es', href: 'https://madticket.es'},
            {label: 'MadTicket on the App Store', href: 'https://apps.apple.com/app/id6817014212'},
            {label: 'MadTicket Backoffice on the App Store', href: 'https://apps.apple.com/app/id6769058952'},
            {label: 'MadTicket Scan on the App Store', href: 'https://apps.apple.com/app/id6807575986'},
        ],
        cover: madticketImage(
            'web-home.webp',
            'MadTicket homepage: search by artist, event or venue, and city cards for Madrid, Barcelona, Valencia, Sevilla and Bilbao',
            'madticket.es, homepage',
            true,
        ),
        highlights: [
            {
                title: 'Web platform',
                description: 'madticket.es, for attendees and promoters.',
                items: [
                    'Event discovery by city and date: today, tomorrow or this weekend',
                    'Search by artist, event or venue, in one city or across Spain',
                    'Event pages with online checkout and QR tickets',
                    'Free listings for events sold on other platforms, linking to the official ticket site',
                    'Web ticket scanner for any mobile browser',
                ],
            },
            {
                title: 'MadTicket',
                description: 'iOS app for attendees.',
                items: [
                    'Ticket purchase with Apple Pay or card',
                    'Combo discounts applied automatically when choosing quantities',
                    'QR code for each ticket in “My tickets”, with Apple Wallet support',
                    'Orders and event history',
                ],
            },
            {
                title: 'MadTicket Backoffice',
                description: 'iOS app for promoters.',
                items: [
                    'Instant notification for every new sale',
                    'Sales, revenue and capacity for each event',
                    'Order list with buyer details',
                    'Ticket types: price, stock and visibility',
                    'Discount coupons: create, edit, enable and disable',
                    'Order cancellation and refunds',
                ],
            },
            {
                title: 'MadTicket Scan',
                description: 'iOS app for door staff.',
                items: [
                    'Continuous scanning with the phone camera',
                    'Immediate result: valid, already used or not found',
                    'Real-time attendance count during the event',
                    'Each ticket is marked when validated, so nobody gets in twice',
                ],
            },
            {
                title: 'Promoter tools',
                description: 'Available to promoters selling through MadTicket.',
                items: [
                    'Multiple ticket types (General, VIP, early bird) with their own price, capacity and visibility',
                    'Coupons with percentage, usage limit and expiry, optionally restricted to ticket types',
                    'Combo discounts, for example 2 VIP + 1 General',
                    'Affiliate links with fixed or percentage commission and conversion tracking',
                    'Order exports to PDF and Excel / CSV, filtered by ticket type',
                    'Refunds through Stripe, with warnings when a ticket was already scanned or the event has ended',
                    'Second dates, with complimentary tickets for previous attendees',
                    'Promoter branding with logo and description',
                ],
            },
        ],
        gallery: [
            {
                title: 'Web platform',
                frame: 'desktop',
                images: [
                    madticketImage(
                        'web-events.webp',
                        'MadTicket events page: upcoming events across Spain with city filters',
                        'Events: upcoming events with city filters',
                        true,
                    ),
                    madticketImage(
                        'web-promoters.webp',
                        'MadTicket page for promoters: publish an event, sell tickets online and control access with QR codes',
                        'For promoters: Stripe payments, native iOS app and web scanner, no monthly fees',
                        true,
                    ),
                ],
            },
            {
                title: 'iOS apps',
                description: 'Screenshots published on the App Store. The Backoffice and Scan screens use a demo event with fictional attendees.',
                frame: 'phone',
                images: [
                    madticketImage('app-attendee-event.webp', 'MadTicket app: event page with date, venue, description and buy button', 'MadTicket: event page'),
                    madticketImage('app-attendee-checkout.webp', 'MadTicket app: ticket selection with an automatic 15% combo discount and order total', 'MadTicket: checkout with combo discount'),
                    madticketImage('app-attendee-external-event.webp', 'MadTicket app: event sold on an external platform, listing dates and a link to the official ticket site', 'MadTicket: event sold on another platform'),
                    madticketImage('app-backoffice-summary.webp', 'MadTicket Backoffice: demo event summary with net revenue, tickets sold and sales by ticket type', 'Backoffice: event summary'),
                    madticketImage('app-backoffice-ticket-type.webp', 'MadTicket Backoffice: editing a ticket type with price, stock, web visibility and on-sale toggle', 'Backoffice: ticket type editing'),
                    madticketImage('app-backoffice-coupon.webp', 'MadTicket Backoffice: new coupon form with code, discount percentage, usage limit, expiry and applicable ticket types', 'Backoffice: new coupon'),
                    madticketImage('app-scan-checkin.webp', 'MadTicket Scan: attendee list for a demo event with check-in progress and validated tickets', 'Scan: check-in list'),
                    madticketImage('app-scan-events.webp', 'MadTicket Scan: event selection with validated ticket count and a link to create a staff access link', 'Scan: events and progress'),
                ],
            },
        ],
    },
];

export const clientEngagements = engagements.filter((item) => item.category === 'client');
export const products = engagements.filter((item) => item.category === 'product');

export function getEngagement(slug: string) {
    return engagements.find((engagement) => engagement.slug === slug);
}
