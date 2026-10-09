import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Award, FlaskConical, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CTASection from '@/components/shared/CTASection';
import WhatsAppEnquiryButton from '@/components/shared/WhatsAppEnquiryButton';
import TrackRecord from '@/components/shared/TrackRecord';
import DealershipCertificate from '@/components/shared/DealershipCertificate';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = generatePageMetadata({
  title: 'About Us',
  description:
    'Learn about Gravity Water Treatment, established in Vadakkencherry, Palakkad in 2018. Specialists in water purification systems, whole-house filters, RO plants, and water coolers.',
  path: '/about',
});

export default function AboutPage() {
  const expertiseAreas = [
    {
      title: 'Domestic Water Purifiers',
      desc: 'Multi-stage RO, UV, and UF purifiers providing safe, pathogen-free drinking water for families and offices. Sales, filter replacement, repair & exchange offers.',
    },
    {
      title: 'Water Treatment Plants',
      desc: 'Whole-house filtration systems built with high-grade Pentair and TATA FRP composite vessels to eliminate dissolved iron, turbidity, foul odor, and limescale hardness.',
    },
    {
      title: 'RO Water Treatment Plants',
      desc: 'Custom-engineered commercial and industrial Reverse Osmosis systems ranging from 250 LPH to 10,000+ LPH for restaurants, schools, institutions, and factories.',
    },
    {
      title: 'Water Testing & Remediation',
      desc: 'Scientific raw water testing to analyze iron, hardness, turbidity, and bacterial load before calibrating custom FRP media filtration.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div>
              <span className="inline-block text-xs font-black uppercase tracking-wider text-[#0A2540] bg-white px-4 py-1.5 rounded-full shadow-md">
                ENGINEERING WATER PURITY SINCE {siteConfig.establishedYear}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              About Gravity Water Treatment
            </h1>
            <p className="text-base sm:text-lg text-blue-50 leading-relaxed max-w-2xl mx-auto">
              Specialized water purification engineering and water treatment solutions in Vadakkencherry, Palakkad, committed to delivering pure, clean water for domestic, commercial, and industrial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Navigation */}
      <div className="border-b border-slate-100 bg-brand-bg-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />
        </div>
      </div>

      {/* Company Overview Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 relative h-[440px] sm:h-[500px]">
                <Image
                  src="/images/about-installation-real.jpg"
                  alt="Gravity Water Treatment FRP vessel installation by technical team in Vadakkencherry, Palakkad"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-3 bg-brand-navy text-white p-5 rounded-2xl shadow-xl border border-brand-cyan/30 hidden sm:block">
                <p className="text-2xl font-black text-brand-cyan">2018</p>
                <p className="text-xs text-slate-300 font-medium">Established at Royal Junction, Vadakkencherry</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                COMPANY OVERVIEW
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
                Dedicated to Solving Complex Water Quality Challenges
              </h2>
              <p className="text-base text-brand-muted leading-relaxed">
                Operating from Royal Junction, Vadakkencherry since 2018, <strong>Gravity Water Treatment</strong> has been at the forefront of tackling challenging borewell, open-well, and municipal water issues across Palakkad, Alathur, and central Kerala.
              </p>
              <p className="text-base text-brand-muted leading-relaxed">
                Whether dealing with stubborn yellow iron stains that ruin sanitary fittings, high calcium hardness causing limescale buildup in geysers, or bacterial turbidity in well water, we engineer targeted solutions. We combine advanced filtration media, Reverse Osmosis, and ultraviolet disinfection to deliver potable, high-clarity water.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">Quality &amp; Service Guarantee</h3>
                    <p className="text-xs text-brand-muted mt-0.5">Reliable warranty, genuine spare parts, and prompt on-call support.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FlaskConical className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy">Water Testing Facility</h3>
                    <p className="text-xs text-brand-muted mt-0.5">Every system is calibrated following precise raw water testing.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-navy text-white font-bold text-sm transition-colors shadow-sm"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <WhatsAppEnquiryButton
                  subject="About Us Consultation"
                  label="Contact Technical Team on WhatsApp"
                  variant="secondary"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Proven Track Record Stats */}
      <TrackRecord />

      {/* Authorized Dealership Certification */}
      <DealershipCertificate />

      {/* Product Expertise */}
      <section className="py-16 sm:py-24 bg-brand-bg-light/50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              CORE DOMAINS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Our Product &amp; Engineering Expertise
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed">
              We provide end-to-end sales, installation, commissioning, and long-term maintenance across four specialized product verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-brand-bg-light text-brand-blue flex items-center justify-center font-bold text-base mb-4 mx-auto">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 w-full flex justify-center">
                  <Link
                    href="/products"
                    className="inline-flex items-center text-xs font-bold text-brand-blue hover:underline"
                  >
                    <span>View Equipment</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
              METHODOLOGY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
              Our Water Engineering Approach
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed">
              Water quality varies dramatically from one well to another. A filter that works for one household may not solve problems for another. That is why our selection methodology is built on 4 pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mx-auto">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">1. Source Water Testing</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Analyzing raw water for dissolved iron, total dissolved solids (TDS), pH, total hardness, and turbidity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mx-auto">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">2. Capacity &amp; Flow Sizing</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Calculating required peak flow rate (LPH) based on family size, bathrooms, overhead tank capacity, or commercial volume.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">3. Media &amp; Vessel Selection</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Using certified Pentair and TATA FRP vessels loaded with BIRM, manganese greensand, cation resin, or activated carbon.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-navy text-base">4. Installation &amp; Service</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Professional plumbing connection, initial backwash calibration, user operation training, and scheduled maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Need Advice on Your Water Quality?"
        description="Connect with our technical team in Vadakkencherry. We will review your water source parameters and recommend the appropriate filtration or RO system."
      />
    </div>
  );
}
