import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  metadataBase: new URL('https://faridsalomon.com'),
  title: 'Farid Salomon | Backend Developer',
  description:
    'Backend Developer focused on Java, Spring Boot, APIs, persistence, and database-driven applications.',
  openGraph: {
    title: 'Farid Salomon Portfolio',
    description:
      'Backend Developer building reliable applications with Java, Spring Boot, APIs, and databases.',
    url: 'https://faridsalomon.com',
    siteName: 'Farid Salomon Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Farid Salomon portfolio preview'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
