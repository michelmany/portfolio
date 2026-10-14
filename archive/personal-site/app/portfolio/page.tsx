'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    type: string;
    images: { url: string }[];
}

export default function PortfolioPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // TODO: Fetch projects from an API
        const mockProjects = [
            {
                id: '3',
                title: 'Michel Many Portfolio Website',
                slug: 'michel-many-portfolio',
                description: 'This website — a fast, responsive portfolio built with modern tooling including Next.js, TypeScript, and Tailwind CSS.',
                technologies: ['TypeScript', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
                type: "Portfolio / Personal Site",
                images: [{ url: '/images/michelmany-project-portfolio-website.png' }]
            },
            {
                id: '2',
                title: 'ICG School Services Management',
                slug: 'icg-ssm-app',
                description: 'End-to-end solution for managing school services such as transportation and billing — built with a fullstack architecture using Next.js and Node.js.',
                technologies: ['TypeScript', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
                type: "SaaS / Internal Tool",
                images: [{ url: '/images/michelmany-icg-ssm.png' }]
            },
            {
                id: '1',
                title: 'NITCommerce Platform',
                slug: 'nitcommerce-platform',
                description: 'Custom e-commerce platform built with Next.js, featuring a scalable architecture, Stripe integration, and dynamic product filtering.',
                technologies: ['TypeScript', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
                type: "E-Commerce Platform",
                images: [{ url: '/images/michelmany-project-nitcommerce.png' }]
            },

            {
                id: '4',
                title: 'Custom Gutenberg Blocks with React',
                slug: 'gutenberg-react-blocks',
                description: 'Interactive Gutenberg blocks built with React and TypeScript for WordPress-based platforms. Accessible, modular, and reusable.',
                technologies: [
                    "TypeScript",
                    "React",
                    "WordPress",
                    "Gutenberg",
                    "Tailwind CSS"
                ],
                type: "WordPress Customization",
                images: [{ url: '/images/michelmany-gutenberg-blocks.png' }]
            },
            {
                id: '5',
                title: 'Bricks Builder Editor',
                slug: 'bricks-builder-editor',
                description: 'Frontend development of the visual editor for Bricks — a community-driven site builder for WordPress built with Vue.js.',
                technologies: [
                    "JavaScript",
                    "Vue.js",
                    "Vuex",
                    "SCSS",
                    "WordPress"
                ],
                type: "Site Builder / Visual Editor",
                images: [{ url: '/images/michelmany-project-bricks-builder.png' }]
            }
        ];

        setProjects(mockProjects);
        setVisibleProjects(mockProjects);
        setIsLoading(false);
    }, []);

    // Handle filter changes with transition
    useEffect(() => {
        if (isLoading) return;

        const applyFilter = () => {
            const filtered = filter === 'all'
                ? projects
                : projects.filter(project => project.type.includes(filter));

            setIsTransitioning(true);

            // First fade out
            setVisibleProjects([]);

            // Then fade in after a short delay
            setTimeout(() => {
                setVisibleProjects(filtered);
                setIsTransitioning(false);
            }, 200);
        };

        applyFilter();
    }, [filter, projects, isLoading]);

    // Get unique technologies from all projects
    const allTypes = ['all', ...new Set(projects.map(p => p.type).filter(Boolean))];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    My Portfolio
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 text-center max-w-3xl mx-auto">
                    Real-world web applications built with modern, scalable technologies — focused on clean architecture and great user experience.
                </p>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {allTypes.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-4 py-2 rounded-full text-sm transition-colors cursor-pointer ${
                                filter === tech
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
                            }`}
                        >
                            {tech === 'all' ? 'All Projects' : tech}
                        </button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <div
                            className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/portfolio/${project.slug}`}
                                className="group bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600"
                                style={{
                                    animation: 'fadeIn 0.3s ease-in-out forwards'
                                }}
                            >
                                <div className="relative h-[250px] w-full bg-slate-200 dark:bg-slate-600">
                                    <Image
                                        src={project.images[0]?.url || '/images/placeholder.jpg'}
                                        alt={project.title}
                                        fill
                                        style={{objectFit: 'cover'}}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {visibleProjects.length === 0 && !isLoading && !isTransitioning && (
                    <div className="text-center py-12">
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            No projects found with the selected filter.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
