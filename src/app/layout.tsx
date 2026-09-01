import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Christian Jordan Keminsi — Full-Stack Software Engineer & Systems Architect',
  description: 'Full-Stack Software Engineer specializing in scalable digital products, software architecture, offline-first systems, and AI-powered applications.',
  keywords: [
    'Christian Jordan Keminsi',
    'Full-Stack Software Engineer',
    'Software Architecture',
    'AI Products',
    'Machine Learning',
    'FastAPI',
    'Angular',
    'Next.js',
    'Offline-First',
    'Distributed Systems',
    'PostgreSQL',
    'Docker'
  ],
  authors: [{ name: 'Christian Jordan Keminsi' }],
  creator: 'Christian Jordan Keminsi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://christiankeminsi.dev',
    title: 'Christian Jordan Keminsi — Full-Stack Software Engineer & Systems Architect',
    description: 'I design and build complete digital products, from complex business platforms to AI-powered applications.',
    siteName: 'Christian Jordan Keminsi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian Jordan Keminsi — Full-Stack Software Engineer & Systems Architect',
    description: 'I design and build complete digital products, from complex business platforms to AI-powered applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Christian Jordan Keminsi',
              jobTitle: 'Full-Stack Software Engineer & Software Architect',
              url: 'https://christiankeminsi.dev',
              sameAs: [
                'https://github.com/jkeminsi',
                'https://www.linkedin.com/in/christian-keminsi-376479215/'
              ],
              knowsAbout: [
                'Software Architecture',
                'Full-Stack Development',
                'Machine Learning',
                'FastAPI',
                'Angular',
                'Next.js',
                'Offline-First Systems',
                'Distributed Systems'
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-[#3B82F6]/30 selection:text-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
