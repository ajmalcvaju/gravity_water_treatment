import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function ProductCard({ product }) {
  if (!product) return null;

  const waUrl = buildProductWhatsAppUrl(product);

  const categoryBadge =
    product.categoryBadge ||
    (product.categoryId === 'water-purifier' ? 'DOMESTIC PURIFIER' : product.category.toUpperCase());

  const highlightBadge =
    product.highlightBadge ||
    (product.specifications?.['Purification Technology']
      ? product.specifications['Purification Technology'].split('+').slice(0, 2).join(' + ').trim()
      : null);

  // 2 concise, consistent specifications bullets
  const techSpec =
    product.specifications?.['Purification Technology'] ||
    product.specifications?.['Purification Stages'] ||
    product.specifications?.['Filtration Stages'] ||
    'Multi-Stage RO Filtration';

  const capSpec =
    product.specifications?.['Purification Capacity'] ||
    product.specifications?.['Flow Rate'] ||
    product.specifications?.['Storage Capacity'] ||
    product.specifications?.['Capacity'] ||
    'High-Flow Drinking Water';

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
      <div>
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-black tracking-wider uppercase bg-[#E0F7FA] text-[#00838F]">
            {categoryBadge}
          </span>
          {highlightBadge && (
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-black tracking-wider uppercase bg-[#0088cc] text-white">
              {highlightBadge}
            </span>
          )}
        </div>

        {/* Product Image Frame */}
        <Link
          href={`/products/${product.slug}`}
          className="relative block h-48 sm:h-52 w-full rounded-2xl bg-slate-50/70 border border-slate-100 my-2 overflow-hidden group/img focus:outline-none group-hover:bg-slate-100/60 transition-colors"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover/img:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>

        {/* Product Title (Centered & Uniform Height) */}
        <Link
          href={`/products/${product.slug}`}
          className="block text-sm sm:text-base font-bold text-[#0A2540] group-hover:text-[#0088cc] transition-colors leading-snug text-center line-clamp-2 min-h-[44px] flex items-center justify-center mb-3"
        >
          {product.name}
        </Link>

        {/* 2 Clean Key Spec Highlights */}
        <div className="space-y-1.5 mb-4 text-[12px] text-slate-600 bg-slate-50/70 rounded-xl p-2.5 border border-slate-100">
          <div className="flex items-center space-x-1.5 truncate">
            <Check className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0 stroke-[2.5]" />
            <span className="truncate">{techSpec}</span>
          </div>
          <div className="flex items-center space-x-1.5 truncate">
            <Check className="w-3.5 h-3.5 text-[#00A859] flex-shrink-0 stroke-[2.5]" />
            <span className="truncate">{capSpec}</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions: View Details + WhatsApp Inquire */}
      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0A2540] hover:bg-[#123055] transition-colors text-center shadow-xs"
        >
          View Details
        </Link>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#00A859] hover:bg-[#00924d] active:bg-[#007f3e] transition-colors text-center shadow-xs flex items-center justify-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-[#00A859]"
          aria-label={`Inquire about ${product.name} on WhatsApp`}
        >
          <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
          <span>Inquire</span>
        </a>
      </div>
    </div>
  );
}
