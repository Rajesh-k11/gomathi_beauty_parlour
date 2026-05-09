import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import { StatsStrip } from '@/components/sections/StatsStrip';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
