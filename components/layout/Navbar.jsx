'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { buildGeneralWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if user has scrolled past the hero / heading session
      const heroOrHeadingSection = document.querySelector('main section') || document.querySelector('section');
      if (heroOrHeadingSection) {
        const rect = heroOrHeadingSection.getBoundingClientRect();
        // The hero / heading session has finished when its bottom reaches the navbar (~70px)
        setPastHero(rect.bottom <= 70);
      } else {
        setPastHero(window.scrollY > 350);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = siteConfig.navLinks;
  const whatsappUrl = buildGeneralWhatsAppUrl("Website General Enquiry");

  return (
    <>
      {/* Top Notification Bar - Contact Info & Testing Service */}
      <div className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-200">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              Water Testing &amp; Whole House Filtration Facility Available • Vadakkencherry, Palakkad
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
              className="flex items-center text-slate-200 hover:text-brand-cyan transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-cyan" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <span className="text-white/30">|</span>
            <span className="text-slate-300">Mon - Sat: 9:00 AM - 7:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          pastHero
            ? 'bg-[#103B66]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-3'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with smooth cross-fade */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
              aria-label="Gravity Water Treatment - Home"
            >
              <div className="relative h-12 w-48 sm:w-56 md:w-64">
                <Image
                  src="/images/logo.png"
                  alt="Gravity Water Treatment Logo"
                  fill
                  className={`object-contain object-left transition-opacity duration-300 ${
                    pastHero ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                  priority
                />
                <Image
                  src="/images/logo-white.png"
                  alt="Gravity Water Treatment Logo"
                  fill
                  className={`object-contain object-left transition-opacity duration-300 ${
                    pastHero ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                      pastHero
                        ? isActive
                          ? 'text-brand-cyan bg-white/15 font-bold shadow-sm'
                          : 'text-slate-100 hover:text-brand-cyan hover:bg-white/10'
                        : isActive
                        ? 'text-brand-blue bg-brand-bg-light font-bold'
                        : 'text-brand-text-dark hover:text-brand-blue hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* WhatsApp Quick Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  pastHero ? 'ring-1 ring-white/20' : ''
                }`}
                aria-label="Enquire on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2 text-white group-hover:scale-110 transition-transform" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg sm:hidden transition-colors ${
                  pastHero
                    ? 'text-emerald-400 hover:bg-white/10'
                    : 'text-emerald-600 hover:bg-emerald-50'
                }`}
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  pastHero
                    ? 'text-white hover:text-brand-cyan hover:bg-white/10 focus:ring-brand-cyan'
                    : 'text-brand-navy hover:text-brand-blue hover:bg-brand-bg-light focus:ring-brand-blue'
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t px-4 pt-3 pb-6 shadow-2xl animate-fadeIn transition-colors duration-200 ${
              pastHero
                ? 'bg-[#0A2540] border-white/10 text-white'
                : 'bg-white border-slate-100'
            }`}
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      pastHero
                        ? isActive
                          ? 'bg-brand-blue text-white'
                          : 'text-slate-100 hover:bg-white/10 hover:text-brand-cyan'
                        : isActive
                        ? 'bg-brand-blue text-white'
                        : 'text-brand-text-dark hover:bg-brand-bg-light hover:text-brand-blue'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className={`pt-4 mt-2 border-t ${pastHero ? 'border-white/10' : 'border-slate-100'}`}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <div
                  className={`mt-4 pt-3 text-xs text-center border-t ${
                    pastHero ? 'border-white/10 text-slate-300' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <p className={`font-semibold ${pastHero ? 'text-white' : 'text-brand-navy'}`}>
                    Gravity Water Treatment
                  </p>
                  <p>Royal Junction, Vadakkencherry, Palakkad</p>
                  <p className={`mt-1 font-medium ${pastHero ? 'text-brand-cyan' : 'text-brand-blue'}`}>
                    Call: {siteConfig.contact.phoneDisplay}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
