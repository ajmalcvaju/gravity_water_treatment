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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
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
                  className="object-contain object-left"
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
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
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
                className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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
                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg sm:hidden"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-navy hover:text-brand-blue hover:bg-brand-bg-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
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
                      isActive
                        ? 'bg-brand-blue text-white'
                        : 'text-brand-text-dark hover:bg-brand-bg-light hover:text-brand-blue'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
                >
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <div className="mt-4 pt-3 text-xs text-center text-slate-500 border-t border-slate-100">
                  <p className="font-semibold text-brand-navy">Gravity Water Treatment</p>
                  <p>Royal Junction, Vadakkencherry, Palakkad</p>
                  <p className="mt-1 font-medium text-brand-blue">Call: {siteConfig.contact.phoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
