import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/next';

const inter = Teko({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chiqane | Guess the F1 track layouts',
  description: 'Guess the F1 track layouts',
  metadataBase: new URL('https://chiqane.vercel.app'),
  openGraph: {
    title: 'Chiqane | Guess the F1 track layouts',
    description: 'Chiqane | Guess the F1 track layouts',
    url: 'https://chiqane.vercel.app',
    siteName: 'Chiqane',
    type: 'website',
  },
  twitter: {
    title: 'Chiqane',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/images/favicon.png"
        type="image/x-icon"
      />
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
