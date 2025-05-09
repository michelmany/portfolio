'use client';

import {Github, Linkedin, Mail, Twitter} from 'lucide-react';
import {useEffect, useState} from 'react';

interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: string;
}

export default function Footer() {
    const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        // Todo: Fetch social links from an API or a config file
        setSocialLinks([
            {id: '1', platform: 'github', url: 'https://github.com/michelmany', icon: 'github'},
            {id: '2', platform: 'linkedin', url: 'https://linkedin.com/in/michelmany', icon: 'linkedin'},
            {id: '3', platform: 'twitter', url: 'https://twitter.com/michelmany', icon: 'twitter'},
            {id: '4', platform: 'email', url: 'mailto:hello@michelmany.com', icon: 'mail'}
        ]);
    }, []);

    const renderIcon = (icon: string) => {
        switch (icon) {
            case 'github':
                return <Github className="h-5 w-5"/>;
            case 'linkedin':
                return <Linkedin className="h-5 w-5"/>;
            case 'twitter':
                return <Twitter className="h-5 w-5"/>;
            case 'mail':
                return <Mail className="h-5 w-5"/>;
            default:
                return null;
        }
    };

    return (
        <footer className="border-t border-t-slate-200 bg-white dark:border-t-slate-700 dark:bg-gray-900">
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                            © {year} Michel Many. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        {socialLinks.map((link: SocialLink) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full text-slate-600 hover:text-teal-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-slate-800 transition-colors"
                                aria-label={`Visit ${link.platform}`}
                            >
                                {renderIcon(link.icon)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
