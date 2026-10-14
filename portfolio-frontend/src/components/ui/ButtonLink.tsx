import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

type Props = {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
};

const styles = {
    primary: 'bg-accent text-accent-ink hover:opacity-90',
    secondary: 'border border-line-strong text-ink hover:border-ink',
};

export default function ButtonLink({href, children, variant = 'primary'}: Props) {
    return (
        <Link
            href={href}
            className={`group inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-[0.9375rem] font-medium transition ${styles[variant]}`}
        >
            {children}
            <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
            />
        </Link>
    );
}
