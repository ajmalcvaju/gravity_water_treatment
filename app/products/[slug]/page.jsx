import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Phone, Wrench, ArrowLeft } from 'lucide-react';
import { getAllProducts, getProductBySlug } from '@/data/products';
import { generatePageMetadata, getProductJsonLd } from '@/lib/seo';
import { buildProductWhatsAppUrl } from '@/lib/whatsapp';
import { siteConfig } from '@/config/site';
import WhatsAppIcon from '@/components/shared/WhatsAppIcon';
import ProductCard from '@/components/products/ProductCard';
import CTASection from '@/components/shared/CTASection';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return generatePageMetadata({
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.shortDescription,
    path: `/products/${product.slug}`,
    image: product.image,
  });
}

function getSystemSpecs(product) {
  const specs = [];

  // Flow & Storage
  const flow =
    product.specifications?.['Purification Capacity'] ||
    product.specifications?.['Flow Rate'] ||
    product.specifications?.['Capacity'] ||
    product.specifications?.['Flow Capacity'];
  const storage =
    product.specifications?.['Storage Capacity'] ||
    product.specifications?.['Storage Hydrostatic Tank'] ||
    product.specifications?.['Storage'];
  if (flow && storage) {
    specs.push(`${flow} | ${storage}`);
  } else if (flow) {
    specs.push(`Flow Capacity: ${flow}`);
  }

  // Technology
  const tech =
    product.specifications?.['Purification Technology'] ||
    product.specifications?.['Purification Stages'] ||
    product.specifications?.['Filtration Stages'];
  if (tech) {
    specs.push(tech);
  }

  // Warranty
  const warranty = product.specifications?.['Warranty'] || '1 Yr Warranty & On-Site Support';
  specs.push(warranty);

  // Applications
  if (product.applications && product.applications.length > 0) {
    specs.push(`Ideal for ${product.applications.slice(0, 2).join(' & ')}`);
  }

  // Purification Details / Feature 1
  if (product.features && product.features[0]) {
    specs.push(`Purification: ${product.features[0]}`);
  } else if (tech) {
    specs.push(`Purification: Multi-Stage ${tech}`);
  }

  // Enrichment / Feature 2
  if (product.features && product.features[1]) {
    specs.push(`Enrichment: ${product.features[1]}`);
  }

  // Design / Feature 3
  if (product.features && product.features[2]) {
    specs.push(`Design: ${product.features[2]}`);
  } else if (product.specifications?.['Mounting Type'] || product.specifications?.['Installation Type']) {
    specs.push(`Design: ${product.specifications['Mounting Type'] || product.specifications['Installation Type']}`);
  }

  // Service guarantee
  specs.push('Quality Assured | Genuine Gravity Service Support');

  // Fallback to keyBullets if specs is too small
  if (specs.length < 4 && product.keyBullets) {
    return product.keyBullets;
  }

  return specs;
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const allProducts = getAllProducts();
  let relatedProducts = allProducts.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  );
  if (relatedProducts.length < 4) {
    const others = allProducts.filter(
      (p) => p.id !== product.id && !relatedProducts.some((r) => r.id === p.id)
    );
    relatedProducts = [...relatedProducts, ...others];
  }
  relatedProducts = relatedProducts.slice(0, 4);

  const productJsonLd = getProductJsonLd(product);
  const waUrl = buildProductWhatsAppUrl(product);
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`;

  const categoryBadge =
    product.categoryBadge ||
    (product.categoryId === 'water-purifier' ? 'DOMESTIC PURIFIER' : product.category.toUpperCase());

  const highlightBadge =
    product.highlightBadge ||
    (product.specifications?.['Purification Technology']
      ? product.specifications['Purification Technology'].split('+').slice(0, 2).join(' + ').trim()
      : 'ALKALINE RO');

  const systemSpecs = getSystemSpecs(product);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero Header Banner */}
      <section className="bg-[#0A2540] pt-12 sm:pt-16 pb-20 sm:pb-24 text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-sky-200/90 font-medium mt-3.5 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-sky-400/60">/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span className="text-sky-400/60">/</span>
            <span className="text-white font-semibold">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Main Product Showcase Card */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-10">
        <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Product Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[360px] sm:h-[430px] rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/70 overflow-hidden flex items-center justify-center p-6 sm:p-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 40vw"
                />
              </div>
            </div>

            {/* Right Column: Details & Actions */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded text-[11px] font-black tracking-wider uppercase bg-[#E0F7FA] text-[#00838F]">
                  {categoryBadge}
                </span>
                <span className="px-3 py-1 rounded text-[11px] font-black tracking-wider uppercase bg-[#0088cc] text-white">
                  {highlightBadge}
                </span>
              </div>

              {/* Product Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#0A2540] tracking-tight leading-snug">
                {product.name}
              </h2>

              {/* Product Description */}
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed pt-1">
                {product.fullDescription || product.shortDescription}
              </p>

              {/* System Specifications Checklist */}
              {systemSpecs.length > 0 && (
                <div className="pt-2">
                  <h3 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0A2540] mb-3">
                    SYSTEM SPECIFICATIONS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-[13px] text-slate-700">
                    {systemSpecs.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-[#00A859] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons: WhatsApp Inquiry and Call */}
              <div className="pt-4 space-y-3">
                {/* 1. Full-Width WhatsApp Inquiry Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl text-base font-bold text-white bg-[#00A859] hover:bg-[#00924d] active:bg-[#007f3e] flex items-center justify-center space-x-2.5 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00A859]"
                  aria-label={`WhatsApp Inquiry for ${product.name}`}
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>

                {/* 2. Direct Call Button */}
                <a
                  href={phoneHref}
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#0088cc] hover:bg-[#0077b5] active:bg-[#006699] flex items-center justify-center space-x-2 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                  aria-label={`Call ${siteConfig.contact.phoneDisplay || siteConfig.contact.phone}`}
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call {siteConfig.contact.phoneDisplay || siteConfig.contact.phone}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Technical Specifications Table */}
          {product.specifications && (
            <div className="mt-12 pt-10 border-t border-slate-200">
              <div className="flex items-center space-x-2 mb-6">
                <Wrench className="w-5 h-5 text-[#0088cc]" />
                <h3 className="text-xl font-bold text-[#0A2540]">
                  Technical Specifications &amp; Parameters
                </h3>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-[#0A2540]">
                      <th className="py-3 px-4 font-bold w-1/3">Parameter</th>
                      <th className="py-3 px-4 font-bold w-2/3">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        <td className="py-3.5 px-4 font-semibold text-[#0A2540]">{key}</td>
                        <td className="py-3.5 px-4 text-slate-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* Related Products & Systems Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A2540] text-center tracking-tight mb-8 sm:mb-10">
              Related Products &amp; Systems
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

        {/* Back to Catalogue Link */}
        <div className="mt-12 mb-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-bold text-[#0088cc] hover:text-[#0A2540] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Products Catalogue</span>
          </Link>
        </div>

      </section>

      {/* Bottom CTA Section */}
      <CTASection
        title={`Have Questions About ${product.name}?`}
        description="Our water engineers are available on WhatsApp and phone to explain installation requirements, sizing, and water source suitability."
      />
    </div>
  );
}
