import type { Metadata } from 'next';
import { Teko } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Teko({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chiqane | Guess the track layout',
  description: 'Guess the F1 track layout',
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
      </body>
    </html>
  );
}