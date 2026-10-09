import Link from 'next/link';
import { Droplet, Home, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-brand-bg-light/40">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 text-center shadow-lg space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-brand-bg-light text-brand-blue flex items-center justify-center mx-auto border border-brand-blue/20">
          <Droplet className="w-10 h-10 text-brand-cyan animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-brand-navy">404</span>
          <h1 className="text-xl font-bold text-brand-navy">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The page you are looking for may have been moved, renamed, or does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-col space-y-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-navy text-white text-sm font-bold transition-colors shadow-sm"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy text-sm font-bold transition-colors"
          >
            <span>Browse Products Catalogue</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-sm font-bold transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
