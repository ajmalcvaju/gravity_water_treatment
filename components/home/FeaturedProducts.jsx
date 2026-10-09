import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="featured-products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0088cc] mb-2">
            BESTSELLERS &amp; TOP RATED
          </p>
          <h2 id="featured-products-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight mb-3">
            Featured Products
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore Kerala&apos;s most trusted multi-stage Copper, Zinc &amp; Alkaline RO water purifiers and whole-house filtration systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products Link at Bottom */}
        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#087CC1] hover:bg-[#103B66] transition-all shadow-md hover:shadow-lg group"
          >
            <span>View All Water Purification Equipment</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
