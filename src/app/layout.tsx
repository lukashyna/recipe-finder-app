import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000 '),
    title: 'Recipe App - Find Delicious Recipes Easily',
    description:
        'Discover a variety of recipes by cuisine, ingredients, or cooking time using our recipe search powered by Spoonacular API.',
    applicationName: 'Recipe App',
    authors: [{ name: 'Anastasiia', url: 'http://localhost:3000 ' }],
    keywords: ['recipes', 'cooking', 'Spoonacular', 'meal planning', 'food app'],
    creator: 'Anastasiia',
    publisher: 'Anastasiia',
    openGraph: {
        title: 'Recipe App - Find Delicious Recipes Easily',
        description: 'Discover a variety of recipes by cuisine, ingredients, or cooking time.',
        url: 'http://localhost:3000 ',
        siteName: 'Recipe App',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
                width: 1200,
                height: 630,
                alt: 'Recipe App preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Recipe App - Find Delicious Recipes Easily',
        description: 'Search recipes by cuisine, ingredients, or cook time.',
        images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: 'http://localhost:3000 ',
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
};

export default RootLayout;
