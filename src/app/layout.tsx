import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ScrollObserver } from '@/components/ui/ScrollObserver';
import { BRAND } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | Premium Bridal Makeup & Beauty Studio`,
    template: `%s | ${BRAND.name}`,
  },
  description: "Gomathi Bridal Studio — Coimbatore's premier bridal makeup and beauty parlour. Expert bridal makeup, hair styling, mehndi, skincare, and complete bridal packages.",
  keywords: ['bridal makeup Coimbatore', 'bridal studio Coimbatore', 'wedding makeup Tamil Nadu', 'Gomathi bridal', 'beauty parlour Coimbatore'],
  openGraph: {
    type: 'website', locale: 'en_IN', url: 'https://gomathibridal.com', siteName: BRAND.name,
    title: `${BRAND.name} | Premium Bridal Makeup & Beauty Studio`,
    description: "Coimbatore's premier bridal makeup and beauty parlour since 2010.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BeautySalon',
    name: BRAND.name, url: 'https://gomathibridal.com',
    telephone: BRAND.phone, email: BRAND.email,
    address: { '@type': 'PostalAddress', streetAddress: '12, Anna Nagar Main Road', addressLocality: 'Coimbatore', addressRegion: 'Tamil Nadu', postalCode: '641001', addressCountry: 'IN' },
    openingHours: 'Mo-Su 08:00-21:00', priceRange: '₹₹',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '500' },
  };
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-cream font-sans antialiased">
        <ScrollObserver />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
