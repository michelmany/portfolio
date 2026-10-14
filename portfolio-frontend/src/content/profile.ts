// Michel Moraes's professional profile, used on About & Experience.
// Source: Michel_Moraes_CV_Product_Engineering_2026.pdf and Michel's brief.
// Previous employers are employers, not clients of Michel Many Limited.

export const profile = {
    name: 'Michel Moraes',
    headline: 'Senior Software Engineer | Full-Stack React, TypeScript, Next.js & Node.js | SaaS & Product Engineering',
    summary:
        'I’m a Senior Software Engineer with 15+ years of experience building web applications, enterprise platforms and digital products for international companies. My strongest expertise is in frontend engineering, particularly React, TypeScript, JavaScript and modern CSS, combined with full-stack experience using Next.js, Node.js, PHP and relational databases.',
    facts: [
        'Based in Madrid, Spain',
        'Spanish / EU citizen',
        'Eligible to work across the EU without sponsorship',
        'Experienced in international and distributed teams',
        'Creator of MadTicket',
    ],
    photo: '/images/profile-michelmany.jpeg',
    cv: {
        href: '/cv/Michel_Moraes_CV_Product_Engineering_2026.pdf',
        label: 'Download CV (PDF, 2 pages)',
    },
    links: [
        {label: 'LinkedIn', href: 'https://linkedin.com/in/michelmany'},
        {label: 'GitHub', href: 'https://github.com/michelmany'},
        {label: 'Codeable', href: 'https://codeable.io/developers/michel-many'},
    ],
} as const;

export type Role = {
    company: string;
    title: string;
    period: string;
    location: string;
    description: string;
};

// Current B2B work. The CV groups these engagements under Michel Many Ltd;
// the contracting entity for each has not been confirmed individually.
export const currentRole = {
    company: 'Michel Many Limited',
    title: 'Senior Software Engineer / Independent Contractor',
    period: 'Nov 2023 - Present',
    location: 'Madrid, Spain | Remote: UK, Europe & US',
    description:
        'Senior engineering and technical consultancy through B2B engagements, delivering customer-facing applications and enterprise platforms.',
    engagements: [
        {
            company: 'Human Made',
            title: 'Senior Web Engineer',
            period: 'Feb 2026 - Present',
            projects: [
                {name: 'Skyscanner', slug: 'skyscanner'},
                {name: 'AGBI', slug: 'agbi'},
                {name: 'News UK', slug: 'news-uk-video-platform'},
            ],
        },
        {
            company: 'Fueled',
            title: 'Senior Engineer, Web Applications',
            period: '2026',
            projects: [{name: 'Goosehead Insurance', slug: 'goosehead-insurance'}],
        },
        {
            company: 'Medico Digital',
            title: 'Senior Frontend Engineer',
            period: '2025 - 2026',
            projects: [{name: 'Healthcare and pharmaceutical work', slug: 'medico-digital'}],
        },
    ],
};

export const previousRoles: Role[] = [
    {
        company: 'Syde GmbH',
        title: 'Senior Fullstack Engineer',
        period: 'Nov 2021 - Nov 2023',
        location: 'Germany | Remote',
        description:
            'Built enterprise WordPress platforms for clients in finance, healthcare and education. Developed React / TypeScript Gutenberg blocks, namespaced PHP plugin architecture and service containers, enterprise API integrations and custom admin features. Contributed to PHPUnit / Playwright testing, CI/CD, architecture reviews and technical mentorship.',
    },
    {
        company: 'TEAM LEWIS',
        title: 'Senior Frontend Engineer',
        period: 'Dec 2020 - Dec 2021',
        location: 'Madrid, Spain | Hybrid',
        description:
            'Built interactive digital experiences with Vue.js, Next.js, TypeScript and React, including real-time features and animation with Three.js and GSAP. Collaborated across teams on accessibility, performance and continuous delivery.',
    },
    {
        company: 'Logic London',
        title: 'Lead Frontend Engineer',
        period: 'Jun 2019 - Dec 2020',
        location: 'London, UK | Hybrid',
        description:
            'Led technical planning and frontend delivery across multiple projects using Next.js, Vue.js and React. Integrated WordPress REST API, Contentful and Strapi through REST and GraphQL, built reusable frontend architecture and coordinated cross-functional teams and backend / DevOps integration.',
    },
    {
        company: 'Simplicity Partners',
        title: 'Full Stack Web Developer',
        period: 'Jul 2016 - Jun 2019',
        location: 'London, UK | Hybrid',
        description:
            'Delivered applications and websites for finance, technology and consulting clients using PHP, Laravel, React and Vue.js. Built custom WordPress themes and plugins, modular Umbraco components, API integrations and database-backed features.',
    },
    {
        company: 'NITDESIGN Creative Studio',
        title: 'Fullstack Web Developer',
        period: 'Jan 2010 - Jun 2016',
        location: 'Niterói, Brazil | On-site',
        description:
            'Led design and development of websites and systems for education, legal and local business clients. Built custom WordPress themes and plugins with object-oriented PHP, frontend interfaces with HTML, CSS, JavaScript and AngularJS, and MySQL-backed content platforms.',
    },
];

export const skills = [
    {group: 'Frontend', items: 'React, TypeScript, JavaScript, Next.js, Astro, HTML, CSS / SCSS, Tailwind CSS'},
    {group: 'Backend & Data', items: 'Node.js, PHP, Laravel, REST APIs, GraphQL, PostgreSQL, MySQL, Prisma'},
    {group: 'Enterprise & CMS', items: 'WordPress, Gutenberg, WooCommerce, Headless CMS'},
    {group: 'Engineering', items: 'Git, Docker, AWS, GitHub Actions, CI/CD, Jest, Vitest, PHPUnit, Pest'},
];

export const education = [
    {title: 'Bachelor’s Degree in Graphic Design', institution: 'Estácio de Sá University, Brazil'},
    {title: 'Software Engineering & Development', institution: 'INFNET Institute, Rio de Janeiro, Brazil'},
];

export const certification = {
    title: 'Certified WordPress Expert',
    issuer: 'Codeable',
    href: 'https://codeable.io/developers/michel-many',
};

export const languages = [
    {name: 'Portuguese', level: 'Native'},
    {name: 'English', level: 'Advanced'},
    {name: 'Spanish', level: 'Advanced'},
];
