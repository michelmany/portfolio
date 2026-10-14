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

export type Engagement = {
    slug: string;
    title: string;
    // The agency or company the work was done through.
    contractor: string;
    attribution: string;
    sector: string;
    summary: string;
    context: string[];
    contribution: string[];
    technologies?: string[];
    // Public, relevant links only.
    links?: {label: string; href: string}[];
};

export const engagements: Engagement[] = [
    {
        slug: 'skyscanner',
        title: 'Skyscanner',
        contractor: 'Human Made',
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
        contractor: 'Human Made',
        attribution: 'Engineering contribution through Human Made',
        sector: 'Media · Digital publishing',
        summary:
            'Frontend and backend features, content migrations and ongoing maintenance for a digital publishing platform.',
        context: [
            'AGBI (Arabian Gulf Business Insight) is a business news publication covering the Gulf region. This work formed part of Human Made’s engagement on its digital publishing platform.',
            'Michel Many contributed engineering as part of the Human Made team.',
        ],
        contribution: [
            'Frontend features for the publishing platform',
            'Backend features supporting the platform',
            'Content migrations',
            'Ongoing maintenance',
        ],
        links: [{label: 'agbi.com', href: 'https://www.agbi.com'}],
    },
    {
        slug: 'news-uk-video-platform',
        title: 'News UK: Proprietary Video Platform',
        contractor: 'Human Made',
        attribution: 'Engineering contribution through Human Made',
        sector: 'Media · Video',
        summary:
            'Architecture and full-stack development contribution to a proprietary video platform for News UK.',
        context: [
            'News UK is a British news publisher. This work formed part of Human Made’s engagement on a proprietary video platform for News UK.',
            'Michel Many contributed to the architecture and full-stack development of a proprietary video platform, including frontend interfaces, video player functionality, API integrations and backend services, within an Agile team.',
        ],
        contribution: [
            'Contribution to the platform architecture',
            'Frontend interfaces',
            'Video player functionality',
            'API integrations',
            'Backend services',
        ],
    },
    {
        slug: 'goosehead-insurance',
        title: 'Goosehead Insurance',
        contractor: 'Fueled',
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
        contractor: 'Medico Digital',
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
];

export function getEngagement(slug: string) {
    return engagements.find((engagement) => engagement.slug === slug);
}
