'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Moon, Sun, Menu, X} from 'lucide-react';
import {useTheme} from 'next-themes';
import Image from "next/image";

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        {name: 'Home', href: '/'},
        {name: 'Portfolio', href: '/portfolio'},
        {name: 'Resume', href: '/resume'},
        {name: 'GitHub', href: '/github'},
        {name: 'Contact', href: '/contact'},
    ];

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
        console.log('Toggling theme from', resolvedTheme, 'to', resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) {
        return (
            <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-gray-900">
                <div className="container mx-auto flex h-16 items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center font-bold text-lg">
                            michelmany.com
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-6">
                        {/* Placeholder for navigation links */}
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Placeholder for theme toggle */}
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header
            className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-gray-900">
            <div className="container mx-auto flex h-16 items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center font-bold text-xl text-teal-600 dark:text-teal-400">
                        {resolvedTheme === 'dark' ? (
                            <Image
                                src="/images/michelmanycom-logo-light.png"
                                alt="Michel Many"
                                height={52}
                                width={180}
                                style={{objectFit: 'contain'}}
                                priority
                            />
                        ) : (
                            <Image
                                src="/images/michelmanycom-logo-dark.png"
                                alt="Michel Many"
                                height={52}
                                width={180}
                                style={{objectFit: 'contain'}}
                                priority
                            />
                        )}
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-heading transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                                pathname === link.href
                                    ? 'text-teal-600 dark:text-teal-400'
                                    : 'text-slate-600 dark:text-slate-300'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                        aria-label="Toggle theme"
                    >
                        {resolvedTheme === 'dark' ? (
                            <Sun className="h-5 w-5 text-yellow-500"/>
                        ) : (
                            <Moon className="h-5 w-5 text-slate-700"/>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5"/>
                        ) : (
                            <Menu className="h-5 w-5"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-16 z-50 bg-white dark:bg-gray-900 p-4">
                    <nav className="flex flex-col gap-4 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`font-heading py-2 text-xl transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                                    pathname === link.href
                                        ? 'text-teal-600 dark:text-teal-400'
                                        : 'text-slate-600 dark:text-slate-300'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
