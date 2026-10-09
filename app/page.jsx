import HeroSection from '@/components/home/HeroSection';
import CategoryCards from '@/components/home/CategoryCards';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import DealershipCertificate from '@/components/shared/DealershipCertificate';
import TrackRecord from '@/components/shared/TrackRecord';
import WaterTestingBanner from '@/components/home/WaterTestingBanner';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import CTASection from '@/components/shared/CTASection';

export default function HomePage() {
  return (
    <>
      {/* Section A: Premium Hero Section With Gradient Background */}
      <HeroSection />

      {/* Section B: Product Categories */}
      <CategoryCards />

      {/* Section C: Featured Products */}
      <FeaturedProducts />

      {/* Authorized Dealership Certification */}
      <DealershipCertificate />

      {/* Proven Track Record Stats */}
      <TrackRecord />

      {/* Water Testing & Borewell Issues Remediation Service Banner */}
      <WaterTestingBanner />

      {/* Section D: Why Choose Gravity Water Treatment? */}
      <WhyChooseUs />

      {/* Section E: Applications */}
      <ApplicationsSection />

      {/* Section F: Final Gradient CTA Section */}
      <CTASection />
    </>
  );
}
