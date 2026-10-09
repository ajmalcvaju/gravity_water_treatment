import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ProductCatalog from '@/components/products/ProductCatalog';
import CTASection from '@/components/shared/CTASection';
import { getAllProducts } from '@/data/products';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Water Treatment Products Catalogue',
  description:
    'Browse domestic RO purifiers, whole house water filtration plants, and commercial RO systems (250–1000 LPH) by Gravity Water Treatment in Palakkad.',
  path: '/products',
});

export default function ProductsPage() {
  const allProducts = getAllProducts();

  return (
    <div className="bg-brand-bg-light/30 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-cyan text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0A2540] bg-white px-4 py-1.5 rounded-full shadow-md inline-block">
                COMPLETE PRODUCT CATALOGUE
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Our Products
            </h1>
            <p className="text-base sm:text-lg text-blue-50 leading-relaxed max-w-2xl mx-auto">
              Explore professional water purification equipment, iron removal filter plants, and commercial &amp; industrial RO skids engineered by Gravity Water Treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="border-b border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Products', url: '/products' }]} />
        </div>
      </div>

      {/* Main Catalogue Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCatalog allProducts={allProducts} />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Need Technical Help Choosing the Right Equipment?"
        description="Every water source is different. Speak with our water treatment engineers to get an exact recommendation for your home or commercial establishment."
      />
    </div>
  );
}
