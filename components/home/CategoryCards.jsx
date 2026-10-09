import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CategoryCards() {
  const categories = siteConfig.categories;

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60" aria-labelledby="categories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching User Reference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0088cc] mb-2">
            EQUIPMENT CATALOGUE
          </p>
          <h2 id="categories-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Our Water Treatment Products
          </h2>
          {/* Subtle cyan underline accent bar */}
          <div className="w-12 h-1 bg-[#0088cc] mx-auto rounded-full mt-3 mb-4" />
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore equipment for a range of domestic, commercial, and industrial water purification and treatment requirements.
          </p>
        </div>

        {/* 3 Category Cards Grid Matching Reference Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Card Header: Category Badge & Secondary Sub-Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-sky-100 text-[#0088cc]">
                    {category.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {category.subBadge}
                  </span>
                </div>

                {/* Product Image Frame */}
                <Link
                  href={`/products?category=${category.slug}`}
                  className="relative block h-56 w-full my-4 overflow-hidden group/img focus:outline-none"
                  aria-label={`View ${category.name} products`}
                >
                  <Image
                    src={category.image}
                    alt={`${category.name} - Gravity Water Treatment`}
                    fill
                    className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>

                {/* Category Title & Description (Centered) */}
                <div className="text-center mb-5">
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="block focus:outline-none"
                  >
                    <h3
                      className={`text-base sm:text-lg font-black leading-snug mb-2 transition-colors ${
                        category.titleColor === 'text-[#0088cc]'
                          ? 'text-[#0088cc] hover:text-brand-navy'
                          : 'text-brand-navy hover:text-[#0088cc]'
                      }`}
                    >
                      {category.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[38px] line-clamp-2">
                    {category.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Button: Explore Category */}
              <div className="pt-2">
                <Link
                  href={`/products?category=${category.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0088cc] hover:bg-[#0077b5] active:bg-[#006699] flex items-center justify-center space-x-1.5 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:ring-offset-1 group/btn"
                >
                  <span>Explore Category</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
