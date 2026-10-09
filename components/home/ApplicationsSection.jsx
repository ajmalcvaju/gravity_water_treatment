import Link from 'next/link';
import Image from 'next/image';
import { Home, Briefcase, UtensilsCrossed, GraduationCap, Factory, ArrowRight, Settings } from 'lucide-react';

export default function ApplicationsSection() {
  const applications = [
    {
      icon: Home,
      title: 'Homes & Apartments',
      subtitle: 'Residential Purity',
      image: '/images/applications/app-homes.jpg',
      description:
        'Whole-house iron removal filters, water softeners to prevent bathroom tile scaling, and multi-stage RO drinking purifiers.',
      link: '/solutions#domestic',
      tag: 'Domestic',
    },
    {
      icon: Briefcase,
      title: 'Offices & Commercial Spaces',
      subtitle: 'Workplace Hydration',
      image: '/images/applications/app-offices-building.jpg',
      description:
        'Continuous cold drinking water dispensers, under-sink compact RO systems, and central point-of-entry filtration.',
      link: '/solutions#commercial',
      tag: 'Commercial',
    },
    {
      icon: UtensilsCrossed,
      title: 'Hotels & Restaurants',
      subtitle: 'Hospitality Grade',
      image: '/images/applications/app-hospitality.jpg',
      description:
        'High-flow RO plants for cooking and beverage preparation, glass-rinse softening, and spotless tableware protection.',
      link: '/solutions#commercial',
      tag: 'Hospitality',
    },
    {
      icon: GraduationCap,
      title: 'Schools & Institutions',
      subtitle: 'High Volume Safe Water',
      image: '/images/applications/app-schools.jpg',
      description:
        'High-capacity commercial RO purification systems ensuring safe, pathogen-free drinking water for students, teachers, and staff.',
      link: '/solutions#commercial',
      tag: 'Institutional',
    },
    {
      icon: Factory,
      title: 'Industrial Facilities',
      subtitle: 'Process & Boiler Water',
      image: '/images/applications/app-industrial-plant.jpg',
      description:
        '1000+ LPH skid-mounted RO plants, high-volume sand & carbon filtration, and tailored demineralization plants for production machinery.',
      link: '/solutions#industrial',
      tag: 'Industrial',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="applications-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0088cc] mb-2">
            VERSATILE DEPLOYMENT
          </p>
          <h2 id="applications-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Solutions for Different Applications
          </h2>
          <div className="w-12 h-1 bg-[#0088cc] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From single-family households battling iron-rich well water to industrial manufacturing plants requiring continuous high-recovery RO processing.
          </p>
        </div>

        {/* Applications 6-Card Grid With Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#0088cc]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0088cc] flex items-center justify-center group-hover:bg-[#0088cc] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0088cc] bg-sky-100 px-3 py-1 rounded-full">
                      {app.tag}
                    </span>
                  </div>

                  {/* Application Photo Frame */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <Image
                      src={app.image}
                      alt={`${app.title} - Water Treatment Solutions`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-[#0088cc] transition-colors leading-snug">
                    {app.title}
                  </h3>
                  <p className="text-xs font-extrabold text-[#0088cc] uppercase tracking-wider mt-1 mb-3">
                    {app.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-5 mt-5 border-t border-slate-100">
                  <Link
                    href={app.link}
                    className="inline-flex items-center text-sm font-bold text-[#0088cc] hover:text-brand-navy group/link transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-brand-cyan group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Engineering Box */}
          <div className="bg-gradient-to-br from-[#0A2540] via-[#103B66] to-[#087CC1] rounded-3xl p-6 sm:p-7 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-cyan flex items-center justify-center">
                  <Settings className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0A2540] bg-white px-3 py-1 rounded-full shadow-sm">
                  Custom
                </span>
              </div>

              {/* Decorative Photo Frame */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-slate-900/40 border border-white/10">
                <Image
                  src="/images/products/ro-water-treatment-plant.png"
                  alt="Custom Engineering Plant by Gravity Water Treatment"
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                Need a Custom Sized System?
              </h3>
              <p className="text-xs font-extrabold text-brand-cyan uppercase tracking-wider mt-1 mb-3">
                Tailored Engineering
              </p>
              <p className="text-sm text-blue-100 leading-relaxed">
                Send us your raw water test report or daily consumption requirements. Our engineers calculate the exact membrane, pump, and FRP vessel specs needed.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/15">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl bg-gradient-to-r from-brand-cyan to-sky-300 hover:from-cyan-300 hover:to-white text-brand-navy font-bold text-sm transition-all shadow-sm"
              >
                <span>Request Custom Sizing</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
