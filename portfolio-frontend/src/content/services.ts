export type Service = {
    id: string;
    title: string;
    summary: string;
    points: string[];
};

export const services: Service[] = [
    {
        id: 'frontend-engineering',
        title: 'Frontend Engineering',
        summary:
            'Production interfaces for web applications and digital platforms, built to be accessible, fast and straightforward to maintain.',
        points: [
            'React, TypeScript and Next.js',
            'Interfaces and reusable component libraries',
            'Integration with APIs and content management systems',
            'Accessibility, performance and long-term maintenance',
        ],
    },
    {
        id: 'full-stack-product-development',
        title: 'Full-Stack & Product Development',
        summary:
            'End-to-end features for web applications and SaaS products, from the interface through to APIs and data.',
        points: [
            'Applications with Next.js, Node.js and PHP, depending on the project',
            'APIs and third-party integrations',
            'Data modelling and integration',
            'Features for SaaS products',
        ],
    },
    {
        id: 'enterprise-publishing-platforms',
        title: 'Enterprise & Publishing Platforms',
        summary:
            'Engineering for content-heavy platforms, editorial teams and organisations running WordPress at scale.',
        points: [
            'WordPress, Gutenberg and headless architectures',
            'Editorial features and tooling',
            'Migrations and integrations',
            'Improvements to and maintenance of existing platforms',
        ],
    },
];

export type EngagementModel = {
    id: string;
    title: string;
    description: string;
};

export const engagementModels: EngagementModel[] = [
    {
        id: 'embedded',
        title: 'Embedded engineering',
        description:
            'Senior engineering capacity working inside your team, with your processes, your tools and your planning cadence.',
    },
    {
        id: 'project-delivery',
        title: 'Project delivery',
        description:
            'Collaboration on a defined scope, such as a feature set, a platform build or a migration, agreed with you up front.',
    },
    {
        id: 'ongoing',
        title: 'Ongoing engineering',
        description:
            'Continued development and maintenance of an existing product or platform once the initial work is done.',
    },
];
