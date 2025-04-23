'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ChevronLeft, Globe, Github} from 'lucide-react';
import {useParams} from 'next/navigation';

interface ProjectImage {
    id: string;
    url: string;
    caption?: string;
}

interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    technologies: string[];
    websiteUrl?: string;
    githubUrl?: string;
    images: ProjectImage[];
}

export default function ProjectPage() {
    const {slug} = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        // TODO: Fetch project data from an API

        const mockProjects = [
            {
                id: '1',
                title: 'NITCommerce Platform',
                slug: 'nitcommerce-platform',
                description:
                    'Fullstack e-commerce platform with a clean architecture, built using Next.js, Node.js, Prisma, and Stripe for seamless shopping and admin control.',
                content: `
                <p>NITCommerce is a fullstack e-commerce platform designed to deliver a high-performance shopping experience for end-users, and a simple, scalable management interface for store admins.</p>
            
                <h3>Project Overview</h3>
                <p>The goal was to build a custom e-commerce solution from scratch — with responsive UI, secure payments, dynamic product filtering, and an admin dashboard. The stack chosen ensured flexibility, developer experience, and performance from day one.</p>
            
                <h3>Technical Implementation</h3>
                <p>The frontend was built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, using a mobile-first approach and optimized image delivery via lazy loading. The backend is powered by <strong>Node.js</strong> and <strong>Express.js</strong>, with <strong>Prisma ORM</strong> handling database operations over a PostgreSQL instance.</p>
            
                <p><strong>Key features:</strong></p>
                <ul>
                  <li>Responsive product catalog with SSR + advanced filtering</li>
                  <li>JWT-based user authentication and authorization</li>
                  <li>Shopping cart with localStorage + sync fallback</li>
                  <li>Stripe Checkout integration with real-time order tracking</li>
                  <li>Admin dashboard with product and order management</li>
                  <li>Optimized images, lazy loading, and accessibility improvements</li>
                  <li>Unit tests and coverage using <strong>Vitest</strong></li>
                </ul>
            
                <h3>Challenges & Solutions</h3>
                <p>Handling performance at scale was a key challenge — especially with large datasets in the product catalog. This was addressed using dynamic loading, efficient pagination with Prisma, and SSR/ISR hybrid rendering in Next.js to minimize load times.</p>
            
                <h3>Results</h3>
                <p>The final platform delivered a 35% increase in conversion rate compared to the client's legacy solution. Performance metrics improved significantly, with a 25% decrease in page load times and higher retention in cart-to-checkout flows.</p>
              `,
                technologies: [
                    'TypeScript',
                    'Next.js',
                    'Node.js',
                    'Express.js',
                    'Tailwind CSS',
                    'Prisma',
                    'PostgreSQL',
                    'Stripe',
                    'Vitest'
                ],
                websiteUrl: '',
                githubUrl: 'https://github.com/michelmany/nitcommerce',
                images: [
                    {
                        id: '1',
                        url: '/images/michelmany-project-nitcommerce.png',
                        caption: 'Homepage with featured product highlights and hero CTA'
                    },
                    // {
                    //     id: '2',
                    //     url: '/images/project-1-detail.jpg',
                    //     caption: 'Product detail page with variants and quantity selection'
                    // },
                    // {
                    //     id: '3',
                    //     url: '/images/project-1-cart.jpg',
                    //     caption: 'Shopping cart with real-time sync and quantity updates'
                    // },
                    // {
                    //     id: '4',
                    //     url: '/images/project-1-checkout.jpg',
                    //     caption: 'Secure Stripe-powered checkout flow'
                    // },
                    // {
                    //     id: '5',
                    //     url: '/images/project-1-admin.jpg',
                    //     caption: 'Admin dashboard with product CRUD and order management'
                    // }
                ]
            },
            {
                "id": "2",
                "title": "ICG School Services Management",
                "slug": "icg-ssm-app",
                "description": "Web application for managing school services like transport and billing, built with a modern fullstack architecture.",
                "content": "\n<p>ICG School Services Management is a custom application built to manage and automate school logistics such as student transport routes, meal subscriptions, and billing workflows.</p>\n\n<h3>Project Overview</h3>\n<p>The platform was created to replace outdated manual processes, providing school administrators and staff with a centralized system to manage student-related services. It supports multiple user roles and offers smart filtering, reporting, and activity tracking.</p>\n\n<h3>Technical Implementation</h3>\n<p>The frontend was built with <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, focusing on performance, responsiveness, and accessibility. The backend API was developed with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>Prisma ORM</strong> over a PostgreSQL database.</p>\n\n<ul>\n  <li>Role-based authentication and dashboards (admin, school, parent)</li>\n  <li>Dynamic student service management (transport, meals, billing)</li>\n  <li>Custom reporting tools and CSV data export</li>\n  <li>Secure API with permission layers and route protection</li>\n  <li>Clean codebase following scalable architecture principles</li>\n <li>Unit tests and coverage using Vitest</li>\n</ul>\n\n<h3>Challenges & Solutions</h3>\n<p>One challenge was managing service assignments across multiple school branches with separate staff access. This was solved by implementing scoped data visibility and user-specific permission contexts.</p>\n\n<h3>Results</h3>\n<p>The platform streamlined operations, reduced manual errors, and gave administrators better insights through dashboards and reports. Client reported improved workflow efficiency and better parent satisfaction.</p>\n",
                "technologies": [
                    "TypeScript",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "Prisma",
                    "PostgreSQL",
                    "Tailwind CSS"
                ],
                githubUrl: 'https://github.com/michelmany/icg-ssm-app',
            },
            {
                "id": "3",
                "title": "Michel Many Portfolio Website",
                "slug": "michel-many-portfolio",
                "description": "Personal portfolio built with a modern stack — optimized for performance, accessibility, and developer experience.",
                "content": "\n<p>This portfolio website was built to present my professional experience, technical skills, and selected real-world projects in a clean and accessible way.</p>\n\n<h3>Project Overview</h3>\n<p>My goal was to build a fast and minimal site that reflects my profile as a senior developer. It includes dynamic project loading, markdown rendering, dark/light theme switcher, and a custom skill grid.</p>\n\n<h3>Technical Implementation</h3>\n<p>The frontend is developed with <strong>Next.js</strong> using <strong>TypeScript</strong> and styled with <strong>Tailwind CSS</strong>. It uses static generation (SSG) for speed and SEO, and Tailwind's theming API for dark mode.</p>\n\n<ul>\n  <li>Dynamic routing for projects using slugs</li>\n  <li>Custom skill grid with responsive layout and icon badges</li>\n  <li>Dark/light theme toggle with persistence</li>\n  <li>Meta tags for SEO and Open Graph previews</li>\n  <li>Deployed on Vercel with CI pipeline for auto-builds</li>\n</ul>\n\n<h3>Challenges & Solutions</h3>\n<p>The main challenge was managing project data structure while keeping it flexible. I solved this using structured JSON/Markdown and dynamic routing based on slugs for clean URLs.</p>\n\n<h3>Results</h3>\n<p>This website increased recruiter engagement and helped land several freelance and contract opportunities. It's easy to maintain and scale with minimal dependencies.</p>\n",
                "technologies": [
                    "TypeScript",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "Prisma",
                    "PostgreSQL",
                    "Tailwind CSS"
                ],
                githubUrl: 'https://github.com/michelmany/portfolio',
            },
            {
                "id": "4",
                "title": "Custom Gutenberg Blocks with React",
                "slug": "gutenberg-react-blocks",
                "description": "Interactive Gutenberg blocks developed using React and TypeScript, designed for high flexibility within WordPress.",
                "content": "\n<p>This project involved building custom reusable Gutenberg blocks using <strong>React</strong> and <strong>TypeScript</strong> to extend the WordPress block editor for marketing teams.</p>\n\n<h3>Project Overview</h3>\n<p>The objective was to empower non-technical users to create custom layouts without writing code, by delivering blocks with advanced controls, dynamic fields, and scoped styling.</p>\n\n<h3>Technical Implementation</h3>\n<p>Each block was developed as a WordPress plugin using the Gutenberg API and React. Controls were built using the block editor's Inspector components, and the blocks support rich media, layout switching, and dynamic attributes.</p>\n\n<ul>\n  <li>React-based components with inspector and toolbar controls</li>\n  <li>CSS-in-JS + Tailwind classes for scoped visual consistency</li>\n  <li>Dynamic slot fills and reusable layout patterns</li>\n  <li>Accessibility and keyboard navigation support</li>\n</ul>\n\n<h3>Challenges & Solutions</h3>\n<p>One challenge was building flexibility without overwhelming editors. This was solved with well-structured Inspector panels and sane defaults for styling and layout.</p>\n\n<h3>Results</h3>\n<p>The plugin enabled faster content creation and reduced developer dependency across multiple client websites. It was deployed in production on several enterprise WordPress projects.</p>\n",
                "technologies": [
                    "TypeScript",
                    "React",
                    "WordPress",
                    "Gutenberg",
                    "Tailwind CSS"
                ],
                githubUrl: 'https://github.com/michelmany/gutenberg-react-blocks',
            },
            {
              "id": "5",
              "title": "Bricks Builder Editor",
              "slug": "bricks-builder-editor",
              "description": "Frontend development of the visual editor for Bricks — a community-driven site builder for WordPress built with Vue.js.",
              "technologies": [
                "JavaScript",
                "Vue.js",
                "Vuex",
                "SCSS",
                "WordPress"
              ],
              "content": "\n<p>Bricks is a fast, community-driven visual site builder for WordPress. I joined the core team during its early development phase to help implement key frontend features for the in-browser editor.</p>\n\n<h3>Project Overview</h3>\n<p>The goal of Bricks is to empower WordPress users to build highly performant, scalable websites without touching code. My role focused on designing and implementing the core visual editor — with intuitive drag-and-drop, style control, and real-time updates.</p>\n\n<h3>Technical Implementation</h3>\n<p>The application was built using <strong>Vue.js</strong> and <strong>Vuex</strong> for state management. I worked on complex UI interactions, like real-time margin/padding adjustment via draggable handles, and a live preview environment fully synced with the control panel. I also implemented many of the 100+ customizable UI elements available in the builder.</p>\n\n<ul>\n  <li>Drag-and-drop editing with real-time layout updates</li>\n  <li>Custom margin, padding, and alignment controls via mouse-driven UI</li>\n  <li>Advanced typography tools including Google Fonts, Adobe Fonts, and custom uploads</li>\n  <li>Icon integration with libraries like Font Awesome and Ionicons</li>\n  <li>Performance-optimized frontend with scoped SCSS and modular components</li>\n</ul>\n\n<h3>Challenges & Solutions</h3>\n<p>Translating user gestures (drag, resize) into precise layout CSS was a major technical challenge. I built a flexible, state-driven system using Vuex to update style properties in real time without conflicts or performance drops.</p>\n\n<h3>Results</h3>\n<p>The visual editor became the heart of Bricks Builder, enabling thousands of users to build advanced, code-free websites. The builder has since grown into a well-loved product with an active community and commercial success.</p>\n",
              "websiteUrl": "https://bricksbuilder.io/",
              "githubUrl": "",
              "images": [
                {
                  "id": "1",
                  "url": "/images/michelmany-project-bricks-builder.png",
                  "caption": "Bricks Builder's visual editor in action"
                },
                // {
                //   "id": "2",
                //   "url": "/images/michelmany-bricksbuilder-drag.jpg",
                //   "caption": "Custom margin and padding control via draggable UI"
                // },
                // {
                //   "id": "3",
                //   "url": "/images/michelmany-bricksbuilder-elements.jpg",
                //   "caption": "Library of over 100+ customizable design elements"
                // },
                // {
                //   "id": "4",
                //   "url": "/images/michelmany-bricksbuilder-typography.jpg",
                //   "caption": "Advanced typography controls with font library integration"
                // }
              ]
            }
        ];

        const foundProject = mockProjects.find(project => project.slug === slug);
        if (foundProject) {
            const completeProject: Project = {
                ...foundProject,
                images: foundProject.images || []
            };
            setProject(completeProject);
            setSelectedImage(completeProject.images[0]?.url || null);
        }

        setIsLoading(false);
    }, [slug]);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-16">
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                        The project you are looking for does not exist or has been removed.
                    </p>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4"/>
                        <span>Back to Portfolio</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                    >
                        <ChevronLeft className="h-4 w-4"/>
                        <span>Back to Portfolio</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-10">
                    <header>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {project.title}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                                >{tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {project.websiteUrl && (
                                <a
                                    href={project.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                                >
                                    <Globe className="h-4 w-4"/>
                                    <span>Visit Website</span>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white rounded-md transition-colors"
                                >
                                    <Github className="h-4 w-4"/>
                                    <span>View Source</span>
                                </a>
                            )}
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        <div className="lg:col-span-3">
                            <div
                                className="relative aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
                                {selectedImage && (
                                    <Image
                                        src={selectedImage}
                                        alt={project.title}
                                        fill
                                        style={{objectFit: 'cover'}}
                                    />
                                )}
                            </div>
                            <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
                                {project.images.map((image) => (
                                    <button
                                        key={image.id}
                                        onClick={() => setSelectedImage(image.url)}
                                        className={`relative w-24 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                                            selectedImage === image.url
                                                ? 'border-teal-600 dark:border-teal-400'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        <Image
                                            src={image.url}
                                            alt={image.caption || project.title}
                                            fill
                                            style={{objectFit: 'cover'}}
                                        />
                                    </button>
                                ))}
                            </div>
                            {project.images.find(img => img.url === selectedImage)?.caption && (
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                    {project.images.find(img => img.url === selectedImage)?.caption}
                                </p>
                            )}
                        </div>

                        <div className="lg:col-span-2">
                            <div
                                className="prose dark:prose-invert prose-slate prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-teal-600 dark:prose-a:text-teal-400 max-w-none"
                                dangerouslySetInnerHTML={{__html: project.content}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
