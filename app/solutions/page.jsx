import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Building2,
  Factory,
  Cpu,
  SlidersHorizontal,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CTASection from '@/components/shared/CTASection';
import WhatsAppEnquiryButton from '@/components/shared/WhatsAppEnquiryButton';
import CategoryCards from '@/components/home/CategoryCards';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Water Treatment Solutions & Engineering Guide',
  description:
    'Comprehensive water treatment solutions for domestic, commercial, and industrial needs. Learn how to select RO systems, iron removal filters, and water softeners.',
  path: '/solutions',
});

export default function SolutionsPage() {
  const selectionCriteria = [
    {
      title: '1. Source Water Quality',
      desc: 'Is your raw water sourced from a borewell, open well, or municipal line? Testing iron (ppm), total dissolved solids (TDS), hardness, and microbiological load dictates the media and membrane selection.',
    },
    {
      title: '2. Required Water Output & Flow Rate',
      desc: 'Domestic homes typically need 15–25 LPH for drinking, or 1,000–2,000 LPH for whole-house usage. Commercial restaurants, schools, and factories require continuous 250 LPH to 1,000+ LPH systems.',
    },
    {
      title: '3. Daily Consumption Volume',
      desc: 'Calculating cumulative daily usage helps determine optimal storage tank capacity and prevents unnecessary pump cycling, extending pump and membrane life.',
    },
    {
      title: '4. Application & End Use',
      desc: 'Drinking water requires strict TDS reduction and sterilization. Boiler feed requires total hardness removal to zero scale. Sanitary and general utility water focuses on iron and sediment removal.',
    },
    {
      title: '5. Available Installation Space & Plumbing',
      desc: 'Assessing indoor vs outdoor footprint, overhead tank elevation, drainage lines for backwash or RO reject water, and single-phase vs three-phase power availability.',
    },
    {
      title: '6. Maintenance & Operating Regimen',
      desc: 'Evaluating whether a manual multiport valve suits the site or if an automatic microprocessor valve with automated backwash cycles is preferred.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0A2540] bg-white px-4 py-1.5 rounded-full shadow-md inline-block">
                ENGINEERED WATER SYSTEMS
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Water Treatment Solutions
            </h1>
            <p className="text-base sm:text-lg text-blue-50 leading-relaxed max-w-2xl mx-auto">
              Explore how Gravity Water Treatment designs, configures, and deploys high-performance water purification and filtration systems across domestic, commercial, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Navigation */}
      <div className="border-b border-slate-100 bg-brand-bg-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Solutions', url: '/solutions' }]} />
        </div>
      </div>

      {/* Section 1: Domestic Water Purification */}
      <section id="domestic" className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 bg-brand-bg-light p-6 sm:p-8 rounded-3xl border border-brand-blue/20 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-5 shadow-sm">
                  <Home className="w-6 h-6 stroke-[2.2]" />
                </div>
                
                {/* Photo Frame */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-sm">
                  <Image
                    src="/images/applications/app-homes.jpg"
                    alt="Domestic Water Purification for Homes and Apartments"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <h2 className="text-2xl font-bold text-brand-navy mb-2">
                  Domestic Water Purification
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Tailored drinking water and whole-house protection for apartments, villas, and independent homes.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <Link
                  href="/products?category=water-purifier"
                  className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-navy group/link transition-colors"
                >
                  <span>Explore Domestic Purifiers</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-brand-cyan group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-xl font-bold text-brand-navy">
                Safe Drinking Water &amp; Whole-House Plumbing Protection
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Drinking water safety in homes requires removing dissolved chemical contaminants, heavy metals, microbial bacteria (such as E. Coli and Coliform), and excessive hardness. Our multi-stage RO+UV+UF purifiers incorporate post-mineralization and copper-zinc technology to deliver balanced, refreshing taste.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                For whole-house supply, high iron content in well water causes yellow staining on bathroom tiles and sinks, while hardness causes scale buildup inside geysers and washing machines. Our FRP vessels filter incoming water at the source before it reaches your overhead tank.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Wall-mount &amp; under-sink RO units</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Whole-house iron &amp; turbidity removal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Alkaline &amp; copper mineral replenishment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Exchange offers for old purifiers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Commercial Water Treatment */}
      <section id="commercial" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <h3 className="text-xl font-bold text-brand-navy">
                Continuous Reliability for Hotels, Restaurants &amp; Offices
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Commercial establishments cannot afford downtime or inconsistent water taste. In restaurants and cafes, pure water is essential for consistent coffee flavor, beverage preparation, food safety, and spotless glassware.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In offices and commercial buildings, staff and visitors depend on hygienic drinking water. We configure commercial 250 LPH and 500 LPH RO plants paired with stainless steel chilled water coolers to supply hundreds of people daily without plastic bottle waste.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Commercial 250 LPH &amp; 500 LPH RO Skids</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Ion-exchange softeners for dishwashers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Food-grade stainless steel piping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Scheduled preventive AMC service</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between order-1 lg:order-2 group hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center mb-5 shadow-sm">
                  <Building2 className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Photo Frame */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-sm">
                  <Image
                    src="/images/applications/app-offices-building.jpg"
                    alt="Commercial Water Treatment for Offices, Hotels and Complexes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <h2 className="text-2xl font-bold text-brand-navy mb-2">
                  Commercial Water Treatment
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Engineered systems for hotels, bakeries, cafes, offices, auditoriums, and commercial complexes.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/products?category=ro-water-treatment-plant"
                  className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-navy group/link transition-colors"
                >
                  <span>View Commercial RO Skids</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-brand-cyan group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Industrial Water Treatment */}
      <section id="industrial" className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between group shadow-lg hover:shadow-xl transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan text-brand-navy flex items-center justify-center mb-5 font-bold shadow-sm">
                  <Factory className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Photo Frame */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 bg-slate-800 shadow-sm">
                  <Image
                    src="/images/applications/app-industrial-plant.jpg"
                    alt="Industrial Water Treatment Plants and High-Volume Systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  Industrial Water Treatment
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Heavy-duty systems built for production machinery, manufacturing boilers, pharmaceutical cleaning, and food processing.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  href="/products?category=ro-water-treatment-plant"
                  className="inline-flex items-center text-sm font-bold text-brand-cyan hover:text-white group/link transition-colors"
                >
                  <span>Explore Industrial Plants</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-brand-cyan group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <h3 className="text-xl font-bold text-brand-navy">
                Heavy Duty Engineering &amp; High Recovery Output
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Industrial manufacturing operations demand high water recovery, precise TDS regulation, and continuous 24/7 reliability. Untreated or improperly treated feedwater can cause scale formation in boiler tubes, contaminate chemical formulations, and result in costly downtime.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our industrial 1,000 to 10,000 LPH RO installations incorporate vertical multistage high-pressure pumps, microprocessor/PLC automation panels, dry-run safety trips, Clean-In-Place (CIP) chemical wash ports, and antiscalant metering to maximize membrane longevity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>PLC automation &amp; rotameter flow monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Electronic antiscalant dosing systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Robust SS-304 structural skid frames</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>CIP membrane wash loop piping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Catalogue / Product Categories */}
      <CategoryCards />

      {/* Section 4: Reverse Osmosis Technology Explained */}
      <section className="py-16 sm:py-20 bg-brand-bg-light/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              UNDERSTANDING THE PROCESS
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              RO Water Treatment Plants Explained
            </h2>
            <p className="text-sm sm:text-base text-brand-muted mt-3 leading-relaxed">
              Reverse Osmosis (RO) is a pressure-driven membrane separation process. Learn how it works and why customized pre-filtration is essential for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold mx-auto">
                1
              </div>
              <h3 className="font-bold text-brand-navy text-base">Pre-Filtration Defense</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Raw water passes through multi-grade sand and activated carbon FRP vessels to trap suspended mud, sediment, and chlorine that would otherwise foul and destroy the delicate RO membrane.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold mx-auto">
                2
              </div>
              <h3 className="font-bold text-brand-navy text-base">High Pressure Membrane Separation</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                A vertical stainless steel booster pump pressurizes water across a semi-permeable Thin Film Composite (TFC) membrane (pores ~0.0001 micron), separating dissolved solids and heavy metals into a concentrate reject stream.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold mx-auto">
                3
              </div>
              <h3 className="font-bold text-brand-navy text-base">Post-Treatment &amp; Disinfection</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Permeate water undergoes pH balance, mineralization, and ultraviolet disinfection before being stored in hygienic tanks for consumption or industrial processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Whole House Water Filtration & Softening Solutions */}
      <section id="filtration" className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                WHOLE-HOUSE &amp; COMMERCIAL FILTRATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Iron Removal, Water Softening &amp; Turbidity Solutions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Borewell and open-well water across Kerala commonly contains dissolved iron, heavy turbidity, foul organic odors, and high calcium hardness. Left untreated, iron stains white sanitary fittings and clothing with stubborn yellow/red marks, while hard water causes limescale crust inside geysers and plumbing lines.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our whole-house filtration plants utilize authentic <strong>Pentair</strong> and <strong>TATA Steel</strong> FRP composite pressure vessels packed with catalytic BIRM, manganese greensand, cation softening resin, and high iodine activated carbon. Backwashed effortlessly via top multiport valves to maintain long-lasting purity.
              </p>
              <div className="pt-2">
                <Link
                  href="/products?category=water-treatment-plant"
                  className="inline-flex items-center text-sm font-bold text-brand-blue hover:underline"
                >
                  <span>Browse Whole House Filtration Plants</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-bg-light p-8 rounded-3xl border border-brand-blue/20 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white text-brand-blue shadow-sm flex items-center justify-center mx-auto">
                <FlaskConical className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">TATA &amp; Pentair FRP Plants</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Customized for flow rates from 1,000 to 5,000+ LPH with manual or automated digital multiport valves.
              </p>
              <WhatsAppEnquiryButton
                subject="Whole House Filter Enquiry"
                label="Enquire for Sizing on WhatsApp"
                variant="primary"
                className="w-full text-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Selecting the Right Equipment */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              ENGINEERING ADVICE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-1">
              Selecting the Right Equipment
            </h2>
            <p className="text-sm sm:text-base text-brand-muted mt-3 leading-relaxed">
              Avoid investing in incorrect filter media or undersized pumps. Consider these 6 key engineering factors before finalizing a system:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectionCriteria.map((item, index) => (
              <div
                key={index}
                className="bg-brand-bg-light/40 rounded-2xl p-6 border border-slate-200/80 space-y-3"
              >
                <h3 className="font-bold text-brand-navy text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppEnquiryButton
              subject="Equipment Selection Consultation"
              label="Talk to an Engineer About Your Water Quality"
              variant="hero"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Transform Your Water Quality?"
        description="Schedule a water sample test or discuss your facility requirements with Gravity Water Treatment in Vadakkencherry."
      />
    </div>
  );
}
