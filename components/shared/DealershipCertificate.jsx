import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import WhatsAppEnquiryButton from '@/components/shared/WhatsAppEnquiryButton';

export default function DealershipCertificate({ className = '' }) {
  const highlights = [
    {
      title: 'Authorized Chrome RO Dealership',
      desc: 'Officially certified partner representing Chrome RO System across Kerala with full authorization.',
    },
    {
      title: '100% Genuine Components',
      desc: 'Direct access to authentic Chrome RO membranes, copper-alkaline mineral cartridges, and original spares.',
    },
    {
      title: 'Factory-Backed Warranty & Service',
      desc: 'Enjoy authentic manufacturer warranty support and dedicated on-site maintenance from trained technicians.',
    },
    {
      title: 'ISO 9001:2008 Quality Assurance',
      desc: 'Purification equipment engineered to strict international quality, health, and drinking water safety standards.',
    },
  ];

  return (
    <section
      className={`py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white relative overflow-hidden ${className}`}
      aria-labelledby="dealership-certificate-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-sky-100 text-[#0088cc] mb-3">
            <Award className="w-4 h-4 text-[#0088cc]" />
            <span>OFFICIAL AUTHORIZATION &amp; CERTIFICATION</span>
          </div>
          <h2
            id="dealership-certificate-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight"
          >
            Authorized Dealer of Chrome RO Systems
          </h2>
          <div className="w-14 h-1 bg-[#0088cc] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Gravity Water Treatment is the certified and authorized dealer of Chrome RO Systems in Kerala, bringing ISO 9001:2008 certified purification technology and reliable service to your doorstep.
          </p>
        </div>

        {/* Certificate Card & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          
          {/* Certificate Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-4 border-2 border-sky-100 shadow-2xl hover:shadow-sky-100/80 transition-all duration-300 group">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80">
                <Image
                  src="/images/authorized-dealership-certificate.jpg"
                  alt="Certificate of Authorized Dealership - Gravity Water Treatment for Chrome RO System"
                  fill
                  className="object-contain sm:object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Certificate Badge Pill Overlay */}
              <div className="absolute top-6 right-6 bg-brand-navy/95 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1.5 border border-brand-cyan/40">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Verified Dealer</span>
              </div>
            </div>

            {/* Credential Note under Certificate */}
            <div className="mt-4 text-center sm:text-left flex items-center justify-center sm:justify-start space-x-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Certified under Registration: <strong>GRAVITY WATER - MR RAGUNATH</strong></span>
            </div>
          </div>

          {/* Credentials & Trust Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0088cc]">
                WHY BUY FROM AN AUTHORIZED DEALER?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-snug">
                Guaranteed Authenticity, Genuine Spares &amp; Direct Support
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                When you choose an authorized dealer, you ensure complete peace of mind. Every Chrome RO purifier delivered and installed by Gravity Water Treatment comes directly with official warranty documentation and access to certified replacement filters.
              </p>
            </div>

            {/* 4 Feature Points */}
            <div className="space-y-3.5 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="p-1 rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/products?category=water-purifier"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0088cc] hover:bg-[#0077b5] active:bg-[#006699] transition-colors shadow-sm group"
              >
                <span>Browse Chrome Purifiers</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <WhatsAppEnquiryButton
                subject="Authorized Dealership Enquiry"
                label="Verify or Inquire on WhatsApp"
                variant="secondary"
                className="py-3.5 text-sm"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
