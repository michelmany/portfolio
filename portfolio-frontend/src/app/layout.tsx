import {Inter, Sora} from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import {ThemeProvider} from '@/components/ThemeProvider';
import {Metadata} from "next";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const sora = Sora({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sora',
});

export const metadata: Metadata = {
    title: 'Michel Moraes - Senior Frontend & Fullstack Engineer',
    description: 'Portfolio and professional profile of Michel Moraes, Senior Frontend & Fullstack Engineer',
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable}`}>
        <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
            <div className="bg-white dark:bg-gray-900">
                <Header/>
                <main className="flex-grow">{children}</main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
