import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = { 
  title: 'Gallery', 
  description: 'Browse stunning bridal transformations at Gomathi Bridal Studio.' 
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Portfolio" 
        title="Our Bridal" 
        titleHighlight="Gallery" 
        subtitle="Every look tells a story. Browse our portfolio of beautiful bridal transformations." 
      />
      <section className="py-20 px-6 lg:px-24 bg-cream">
        <div className="max-w-8xl mx-auto">
          <GalleryClient />
        </div>
      </section>
      <CTASection />
    </>
  );
}
