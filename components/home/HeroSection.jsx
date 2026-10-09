import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Shield, Droplets } from 'lucide-react';
import WhatsAppEnquiryButton from '@/components/shared/WhatsAppEnquiryButton';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#103B66] via-[#087CC1] to-[#28C5D7] text-white py-16 sm:py-20 lg:py-24">
      {/* Subtle organic water droplet background shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-brand-navy/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs (order-2 on mobile, order-1 on lg) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-50">
              <Droplets className="w-4 h-4 text-brand-cyan" />
              <span>WATER PURIFICATION &amp; TREATMENT SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Pure Water Solutions. <br className="hidden sm:inline" />
              <span className="text-white drop-shadow-sm">Engineered for Every Need.</span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-lg sm:text-xl text-blue-50 max-w-2xl font-normal leading-relaxed">
              Discover water purifiers, RO water treatment plants, and whole-house water filtration systems designed for a range of domestic, commercial, and industrial applications.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-white text-brand-navy hover:bg-brand-bg-light shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-5 h-5 ml-2.5 text-brand-blue group-hover:translate-x-1 transition-transform" />
              </Link>

              <WhatsAppEnquiryButton
                variant="hero"
                label="Enquire on WhatsApp"
                className="rounded-xl px-8 py-4"
              />
            </div>

            {/* Service Descriptors (Supporting Labels) */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span>Water Purification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span>RO Treatment Systems</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span>Commercial &amp; Industrial Solutions</span>
              </div>
            </div>

            {/* Established in Vadakkencherry note */}
            <div className="pt-2 text-xs text-blue-100/90 flex items-center space-x-2">
              <Shield className="w-3.5 h-3.5 text-emerald-300" />
              <span>Vadakkencherry Royal Junction Since 2018 • Water Testing Facility Available</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Image (order-1 on mobile, order-2 on lg) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Premium frosted backdrop card */}
              <div className="relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md p-3 sm:p-4 border border-white/25 shadow-2xl">
                
                {/* Image Container with high contrast and clean ratio */}
                <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[490px] rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                  <Image
                    src="/images/hero-gravity-installation.png"
                    alt="Gravity Water Treatment engineers installing whole house FRP filtration vessel on site in Vadakkencherry, Palakkad"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Subtle dark gradient overlay at bottom for badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 bg-brand-navy/95 border border-brand-cyan/40 text-white rounded-xl p-3.5 shadow-2xl backdrop-blur-md sm:max-w-[270px]">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <p className="text-xs font-bold text-white">100% Pure &amp; Safe Water</p>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-tight">
                    Multi-stage RO &amp; Whole-House Filtration with TATA &amp; Pentair Vessels
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
