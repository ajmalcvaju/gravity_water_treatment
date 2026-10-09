import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { buildGeneralWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildGeneralWhatsAppUrl("Footer Consultation");

  return (
    <footer className="bg-brand-navy text-slate-300 border-t border-brand-blue/30" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="relative h-12 w-48 sm:w-56">
              <Image
                src="/images/logo-white.png"
                alt="Gravity Water Treatment"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Engineering reliable water purification systems, whole-house FRP filtration plants, reverse osmosis plants, and commercial water coolers.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-brand-cyan">
              <ShieldCheck className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span>Operating in Vadakkencherry Since {siteConfig.establishedYear}</span>
            </div>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold px-3 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
                Chat on WhatsApp (+91 95625 84025)
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase border-b border-brand-blue/40 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center hover:text-brand-cyan transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions"
                  className="flex items-center hover:text-brand-cyan transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Water Testing Facility</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase border-b border-brand-blue/40 pb-2">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="flex items-center hover:text-brand-cyan transition-colors group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products?category=water-treatment-plant"
                  className="flex items-center text-xs text-brand-cyan/80 hover:text-brand-cyan transition-colors"
                >
                  <span>• Iron Removal &amp; Water Softeners</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=ro-water-treatment-plant"
                  className="flex items-center text-xs text-brand-cyan/80 hover:text-brand-cyan transition-colors"
                >
                  <span>• Commercial RO (250 / 500 / 1000 LPH)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Authentic Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase border-b border-brand-blue/40 pb-2">
              Contact &amp; Location
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.display}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2.5 text-brand-cyan flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-brand-cyan transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <WhatsAppIcon className="w-4 h-4 mr-2.5 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-brand-cyan flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-cyan transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 mr-2 text-brand-cyan flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {currentYear} Gravity Water Treatment. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-slate-400">
            Water Purifiers • RO Plants • Whole House Systems | Palakkad, Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
