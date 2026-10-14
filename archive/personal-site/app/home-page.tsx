import Link from 'next/link';
import Image from 'next/image';
import {ArrowRight, Github, Linkedin, Mail, FileText} from 'lucide-react';
import {ReactElement} from 'react';

import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiPostgresql,
    SiTailwindcss,
    SiVuedotjs,
    SiGraphql,
    SiGit,
    SiWordpress,
    SiPhp,
    SiDocker,
    SiVitest
} from "react-icons/si";

import {MdPhoneIphone} from "react-icons/md";
import {VscCode} from "react-icons/vsc";
import {BiGridVertical} from "react-icons/bi";
import {TbProgressCheck} from "react-icons/tb";

export default function Home() {
    // TODO: This should be fetched from my API
    const featuredProjects = [
        {
            id: '2',
            title: 'ICG School Services Management',
            slug: 'icg-ssm-app',
            description: 'End-to-end solution for managing school services such as transportation and billing — built with a fullstack architecture using Next.js and Node.js.',
            technologies: [
                'TypeScript',
                'Next.js',
                'Node.js',
                'Express.js',
                'Tailwind CSS'
            ],
            type: "SaaS / Internal Tool",
            images: [{ url: '/images/michelmany-icg-ssm.png' }]
        },
        {
            id: '1',
            title: 'NITCommerce Platform',
            slug: 'nitcommerce-platform',
            description: 'Custom e-commerce platform built with Next.js, featuring a scalable architecture, Stripe integration, and dynamic product filtering.',
            technologies: [
                'TypeScript',
                'Next.js',
                'Node.js',
                'Express.js',
                'Tailwind CSS'
            ],
            type: "E-Commerce Platform",
            images: [{ url: '/images/michelmany-project-nitcommerce.png' }]
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

    type SkillItem = {
        name: string;
        icon: ReactElement;
    };

    const skills: SkillItem[] = [
        {name: "TypeScript", icon: <SiTypescript/>},
        {name: "React.js", icon: <SiReact/>},
        {name: "Next.js", icon: <SiNextdotjs/>},
        {name: "Node.js", icon: <SiNodedotjs/>},
        {name: "Express.js", icon: <SiExpress/>},
        {name: "Prisma ORM", icon: <SiPrisma/>},
        {name: "PostgreSQL", icon: <SiPostgresql/>},
        {name: "Tailwind CSS", icon: <SiTailwindcss/>},
        {name: "Vue.js", icon: <SiVuedotjs/>},
        {name: "GraphQL", icon: <SiGraphql/>},
        {name: "Git", icon: <SiGit/>},
        {name: "Automated Testing", icon: <SiVitest/>},
        {name: "Responsive Design", icon: <MdPhoneIphone/>},
        {name: "Clean Code & Architecture", icon: <VscCode/>},
        {name: "WordPress (Enterprise)", icon: <SiWordpress/>},
        {name: "Gutenberg (React Blocks)", icon: <SiReact/>},
        {name: "PHP (OOP)", icon: <SiPhp/>},
        {name: "Docker", icon: <SiDocker/>},
        {name: "Component-Based Development", icon: <BiGridVertical/>},
        {name: "Agile Workflows", icon: <TbProgressCheck/>},
    ];

    return (
        <div className="flex flex-col gap-16 py-8">
            {/* Hero Section */}
            <section className="py-20 px-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col items-center gap-8">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden">
                            <Image
                                src="/images/profile-michelmany.jpeg"
                                alt="Avatar Picture of Michel Moraes"
                                fill
                                sizes={'(max-width: 160px) 100vw, 160px'}
                                style={{objectFit: 'cover'}}
                                priority
                            />
                        </div>

                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                Michel Moraes
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-teal-600 dark:text-teal-400 mb-6">
                                Senior Frontend & Full Stack Engineer
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                                I build performant, scalable web applications using <strong>TypeScript, React, and Next.js</strong> — with a focus on maintainable architecture, developer experience, and pixel-perfect UI implementation.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                                On the backend, I work with <strong>Node.js, Express, and Prisma ORM</strong>, designing robust APIs and data layers when fullstack capabilities are needed.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/portfolio"
                                    className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                                >
                                    <span className="font-heading">View Portfolio</span>
                                    <ArrowRight className="h-4 w-4"/>
                                </Link>
                                <Link
                                    href="/resume"
                                    className="flex items-center gap-2 px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white rounded-md transition-colors"
                                >
                                    <FileText className="h-4 w-4"/>
                                    <span className="font-heading">Download CV</span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <a href="https://github.com/michelmany"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-3 rounded-full text-slate-600 hover:text-teal-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-slate-800 transition-colors"
                            >
                                <Github className="h-6 w-6"/>
                            </a>
                            <a href="https://linkedin.com/in/michelmany"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="p-3 rounded-full text-slate-600 hover:text-teal-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-slate-800 transition-colors"
                            >
                                <Linkedin className="h-6 w-6"/>
                            </a>
                            <a href="mailto:contact@michelmany.com"
                               className="p-3 rounded-full text-slate-600 hover:text-teal-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-slate-800 transition-colors"
                            >
                                <Mail className="h-6 w-6"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            About Me
                        </h2>
                        <div className="prose dark:prose-invert prose-lg mx-auto text-center">
                            <p className="text-lg mb-5">
                                I’m Michel — a frontend-focused fullstack engineer with <strong>12+</strong> years of experience delivering fast, reliable, and scalable web applications. I specialize in building clean, accessible UIs using <strong>TypeScript, React and Next.js</strong>, with a strong design sensibility and a track record of implementing pixel-perfect Figma-to-code interfaces.
                            </p>
                            <p className="mb-5 max-w-2xl mx-auto">
                                On the backend, I’m experienced with <strong>Node.js, Express</strong>, and <strong>Prisma</strong>, building robust APIs and working across the full data lifecycle when needed. I prioritize maintainable code, performance, and long-term scalability.
                            </p>
                            <p className="max-w-2xl mx-auto">
                                I thrive in remote, agile teams that value clean architecture, thoughtful engineering, and collaboration. Outside of coding, I enjoy experimenting with new tools and sharing what I learn with others.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Skills & Technologies
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {skills.map(({name, icon}) => (
                                <div
                                    key={name}
                                    className="h-24 flex flex-col items-center justify-center text-center bg-white dark:bg-slate-700 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600"
                                >
                                    {icon &&
                                        <div className="text-2xl mb-1 text-slate-700 dark:text-slate-300">{icon}</div>}
                                    <span
                                        className="text-slate-800 dark:text-slate-200 font-medium text-sm">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Featured Projects
                            </h2>
                            <Link
                                href="/portfolio"
                                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                            >
                                <span>View All</span>
                                <ArrowRight className="h-4 w-4"/>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredProjects.map((project) => (
                                <Link
                                    key={project.id}
                                    href={`/portfolio/${project.slug}`}
                                    className="group bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-600"
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
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full"
                                                >
                                                  {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span
                                                    className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full">
                                                  +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Let’s Work Together
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                            I collaborate with product teams to build high-quality web applications — from frontend interfaces to fullstack architectures. I’m currently available for <strong>freelance work, technical consulting</strong>, or the right <strong>full-time opportunity</strong>.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors text-lg"
                        >
                            <Mail className="h-5 w-5"/>
                            <span className="font-heading">Let’s Talk</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
