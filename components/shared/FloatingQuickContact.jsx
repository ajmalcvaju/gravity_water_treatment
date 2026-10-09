'use client';

import { useState, useEffect } from 'react';
import { Phone, ChevronUp } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { buildGeneralWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function FloatingQuickContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = buildGeneralWhatsAppUrl();
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`;

  return (
    <aside aria-label="Quick Contact Actions" className="fixed bottom-6 right-5 z-50 flex flex-col items-center space-y-3 pointer-events-auto">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-[#0A2540] hover:bg-[#103B66] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Phone Call */}
      <a
        href={phoneHref}
        aria-label="Call Gravity Water Treatment"
        className="w-12 h-12 rounded-full bg-[#087CC1] hover:bg-[#076ba8] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        <Phone className="w-5 h-5 text-white" />
      </a>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gravity Water Treatment on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none ring-4 ring-[#25D366]/20"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white relative z-10" />
      </a>
    </aside>
  );
}
