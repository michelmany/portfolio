import {Inter} from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import {ThemeProvider} from '@/components/ThemeProvider';

const inter = Inter({subsets: ['latin']});

export const metadata = {
    title: 'Michel Moraes - Senior Frontend & Fullstack Engineer',
    description: 'Portfolio and professional profile of Michel Moraes, Senior Frontend & Fullstack Engineer',
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <ThemeProvider>
                    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
                        <Header/>
                        <main className="flex-grow">{children}</main>
                        <Footer/>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
