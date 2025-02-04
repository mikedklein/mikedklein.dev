import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mike Klein - Senior Software Engineer & Technology Leader',
  description:
    'Mike Klein is a Senior Software Engineer specializing in full-stack development, cloud technologies, and innovative solutions for complex challenges.',
  keywords:
    'Mike Klein, Software Engineer, Full-stack Developer, Cloud Technologies, React, Node.js, Python, AWS',
  authors: [{ name: 'Mike Klein' }],
  openGraph: {
    title: 'Mike Klein - Senior Software Engineer & Technology Leader',
    description:
      'Specializing in full-stack development, cloud technologies, and innovative solutions.',
    url: 'https://www.mikedklein.dev',
    siteName: "Mike Klein's Personal Website",
    images: [
      {
        url: 'https://www.mikedklein.dev/avatars/me.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Klein - Senior Software Engineer & Technology Leader',
    description:
      'Specializing in full-stack development, cloud technologies, and innovative solutions.',
    images: ['https://www.mikedklein.dev/avatars/me.png'],
  },
  icons: [
    { rel: 'icon', url: '/favicon.svg' },
    { rel: 'apple-touch-icon', url: '/favicon.svg' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
