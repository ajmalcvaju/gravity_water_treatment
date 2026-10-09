import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import WhatsAppEnquiryButton from '@/components/shared/WhatsAppEnquiryButton';
import { siteConfig } from '@/config/site';

export default function CTASection({
  title = "Looking for the Right Water Treatment Solution?",
  description = "Tell us what you need, and get in touch to discuss suitable products for your application. Our engineers test your water before recommending equipment.",
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-navy/30 blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold text-white uppercase tracking-wider">
          <span>Serving Vadakkencherry, Palakkad &amp; Central Kerala</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto font-normal leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-base font-bold bg-white text-brand-navy hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-base font-bold bg-brand-navy/60 hover:bg-brand-navy text-white border border-white/30 backdrop-blur-sm transition-all duration-200"
          >
            <span>Contact Us</span>
          </Link>

          <WhatsAppEnquiryButton
            variant="hero"
            label="Enquire on WhatsApp"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="pt-6 border-t border-white/20 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-100">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-brand-cyan" />
            <span>Direct Call: <strong className="text-white">{siteConfig.contact.phoneDisplay}</strong></span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>Water Testing Facility Available</span>
        </div>
      </div>
    </section>
  );
}
