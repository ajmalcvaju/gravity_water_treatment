import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactForm from '@/components/contact/ContactForm';
import WhatsAppEnquiryButton from '@/components/shared/WhatsAppEnquiryButton';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

export const metadata = generatePageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Gravity Water Treatment in Vadakkencherry, Palakkad. Call +91 9562584025 or WhatsApp us for water purifiers, water testing, and whole-house filtration.',
  path: '/contact',
});

export default function ContactPage() {
  const contact = siteConfig.contact;

  return (
    <div className="bg-brand-bg-light/30 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0A2540] bg-white px-4 py-1.5 rounded-full shadow-md inline-block">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact Gravity Water Treatment
            </h1>
            <p className="text-base sm:text-lg text-blue-50 leading-relaxed max-w-2xl mx-auto">
              Have questions about your water quality or need a product quote? Connect with our engineering and service team at Vadakkencherry, Palakkad.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Navigation */}
      <div className="border-b border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />
        </div>
      </div>

      {/* Main Contact Grid */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Authentic Contact Info Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
                  DIRECT CONTACT
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Visit Our Office or Connect Online
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We are conveniently located at Royal Junction, Vadakkencherry. Drop in to bring water samples or request an on-site technician inspection.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg-light text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Address</h3>
                    <p className="text-sm font-bold text-brand-navy mt-1">
                      {contact.address.display}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Vadakkencherry Royal Junction, Palakkad</p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone &amp; WhatsApp</h3>
                    <p className="text-sm font-bold text-brand-navy mt-1">
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-brand-blue transition-colors">
                        {contact.phoneDisplay}
                      </a>
                    </p>
                    <div className="pt-2">
                      <WhatsAppEnquiryButton
                        subject="Quick Contact Enquiry"
                        label="Message on WhatsApp"
                        variant="compact"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg-light text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</h3>
                    <p className="text-sm font-bold text-brand-navy mt-1">
                      <a href={`mailto:${contact.email}`} className="hover:text-brand-blue transition-colors break-all">
                        {contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Official enquiries &amp; quotation requests</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-bg-light text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Working Hours</h3>
                    <p className="text-sm font-bold text-brand-navy mt-1">
                      {contact.hours}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Emergency service calls accommodated</p>
                  </div>
                </div>

              </div>

              {/* Service Assurance */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Operating Since 2018:</strong> Full warranty, water testing facility, genuine filter cartridge spares, and service support for all brands of purifiers.
                </span>
              </div>
            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* Location Map Section */}
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-brand-navy">Gravity Water Treatment Location Map</h3>
                <p className="text-xs text-slate-500">Royal Junction, Vadakkencherry, Palakkad District, Kerala</p>
              </div>
              <a
                href="https://maps.google.com/?q=Gravity+water+treatment+Vadakkencherry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center"
              >
                <span>Open in Google Maps App</span>
              </a>
            </div>

            <div className="relative w-full h-[360px] sm:h-[450px] rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="Gravity Water Treatment Vadakkencherry Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.8128266393373!2d76.4820598!3d10.593802599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8099722b3d1cb%3A0x32fe3c51ee0c79ef!2sGravity%20water%20treatment!5e0!3m2!1sen!2sin!4v1791529195219!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
