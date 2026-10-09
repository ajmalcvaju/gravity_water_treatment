'use client';

import { buildProductWhatsAppUrl, buildGeneralWhatsAppUrl } from '@/lib/whatsapp';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';

export default function WhatsAppEnquiryButton({
  product,
  subject,
  details,
  label = "Enquire on WhatsApp",
  variant = "primary", // primary, secondary, outline, compact
  className = "",
}) {
  let url = "";

  if (product) {
    url = buildProductWhatsAppUrl(product);
  } else {
    url = buildGeneralWhatsAppUrl(subject || "General Consultation", details || {});
  }

  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg group select-none";

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-sm hover:shadow-md px-4 py-2.5 text-sm";
  } else if (variant === "secondary") {
    variantStyles =
      "bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-300 shadow-sm px-4 py-2.5 text-sm";
  } else if (variant === "outline") {
    variantStyles =
      "bg-transparent hover:bg-emerald-600/10 text-emerald-400 border border-emerald-400 px-4 py-2.5 text-sm";
  } else if (variant === "compact") {
    variantStyles =
      "bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-xs shadow-sm";
  } else if (variant === "hero") {
    variantStyles =
      "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-base px-6 py-3.5 shadow-lg hover:shadow-xl font-bold";
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={`${label}${product ? ` for ${product.name}` : ''}`}
    >
      <WhatsAppIcon className="w-4 h-4 mr-2 text-current group-hover:scale-110 transition-transform flex-shrink-0" />
      <span>{label}</span>
    </a>
  );
}
