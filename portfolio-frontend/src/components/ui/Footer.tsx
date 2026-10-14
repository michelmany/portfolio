import Link from 'next/link';
import {navigation, site} from '@/content/site';
import Logo from '@/components/ui/Logo';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-line">
            <div className="wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <Logo height={64} className="-ml-[25px] -my-2 block"/>
                    <p className="mt-3 max-w-sm text-sm text-muted">{site.tagline}</p>
                </div>

                <nav aria-label="Footer">
                    <p className="eyebrow mb-4">Explore</p>
                    <ul className="space-y-2 text-sm">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-ink-soft hover:text-ink">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <p className="eyebrow mb-4">Get in touch</p>
                    <a href={`mailto:${site.email}`} className="link text-sm text-ink">
                        {site.email}
                    </a>
                </div>
            </div>

            <div className="wrap flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:justify-between">
                <p>© {year} Michel Many.</p>
                <ul className="flex gap-6" aria-label="Legal">
                    <li><Link href="/legal" className="hover:text-ink">Legal notice</Link></li>
                    <li><Link href="/privacy" className="hover:text-ink">Privacy</Link></li>
                </ul>
            </div>
        </footer>
    );
}
