'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, X} from 'lucide-react';
import {navigation, site} from '@/content/site';
import Logo from '@/components/ui/Logo';

function isActive(pathname: string, href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close the mobile menu on navigation and with the Escape key.
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!menuOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [menuOpen]);

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
            <div className="wrap flex h-16 items-center justify-between gap-6">
                <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
                    {/* Offset the logo's built-in left padding so it aligns with the gutter. */}
                    <Logo height={60} priority className="-ml-[24px] block"/>
                </Link>

                <nav aria-label="Main" className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navigation.map((item) => {
                            const active = isActive(pathname, item.href);
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        aria-current={active ? 'page' : undefined}
                                        className={`text-[0.9375rem] transition-colors hover:text-ink ${
                                            active ? 'text-ink underline decoration-accent decoration-2 underline-offset-[0.6em]' : 'text-muted'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-surface md:hidden"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <X className="h-5 w-5" aria-hidden/> : <Menu className="h-5 w-5" aria-hidden/>}
                </button>
            </div>

            <div
                id="mobile-menu"
                hidden={!menuOpen}
                className="border-t border-line bg-paper md:hidden"
            >
                <nav aria-label="Main" className="wrap py-4">
                    <ul className="flex flex-col">
                        {navigation.map((item) => {
                            const active = isActive(pathname, item.href);
                            return (
                                <li key={item.href} className="border-b border-line last:border-b-0">
                                    <Link
                                        href={item.href}
                                        aria-current={active ? 'page' : undefined}
                                        className={`block py-4 text-xl tracking-[-0.02em] ${active ? 'text-ink' : 'text-ink-soft'}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
