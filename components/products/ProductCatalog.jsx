'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, Filter, RotateCcw, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { siteConfig } from '@/config/site';

function ProductCatalogInner({ allProducts }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(activeCategoryParam);
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize state when URL query param changes
  useEffect(() => {
    setSelectedCategory(activeCategoryParam);
  }, [activeCategoryParam]);

  const categories = [
    { id: 'all', name: 'All Equipment' },
    ...siteConfig.categories.map((c) => ({ id: c.slug, name: c.name })),
  ];

  // Category item counts
  const categoryCounts = useMemo(() => {
    const counts = { all: allProducts.length };
    allProducts.forEach((p) => {
      const catId = p.categoryId?.toLowerCase();
      if (catId) {
        counts[catId] = (counts[catId] || 0) + 1;
      }
    });
    return counts;
  }, [allProducts]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId === 'all') {
      params.delete('category');
    } else {
      params.set('category', categoryId);
    }
    router.replace(`/products?${params.toString()}`, { scroll: false });
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    router.replace('/products', { scroll: false });
  };

  // Filtered and searched product list
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' ||
        product.categoryId.toLowerCase() === selectedCategory.toLowerCase();

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [allProducts, selectedCategory, searchQuery]);

  const currentCategoryName =
    categories.find((c) => c.id === selectedCategory)?.name || 'All Equipment';

  return (
    <div className="space-y-8">
      {/* Controls Bar: Search & Category Tabs */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        
        {/* Search Input Box */}
        <div className="relative max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5 text-[#0088cc]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search purifiers, RO plants, or FRP vessels by model or type..."
            className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0088cc] focus:bg-white transition-all text-[#0A2540] placeholder-slate-400"
            aria-label="Search products"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search input"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pill Filters with Counts */}
        <div className="space-y-2.5">
          <div className="flex items-center text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
            <Filter className="w-3.5 h-3.5 mr-1.5 text-[#0088cc]" />
            <span>Filter By System Type:</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                    isSelected
                      ? 'bg-[#0A2540] text-white shadow-md scale-[1.02]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filters Summary */}
        {(selectedCategory !== 'all' || searchQuery) && (
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <span className="font-medium text-slate-400">Active filter:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center bg-[#E0F7FA] text-[#00838F] font-bold px-3 py-1 rounded-lg">
                  {currentCategoryName}
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center bg-slate-100 text-[#0A2540] font-bold px-3 py-1 rounded-lg">
                  &ldquo;{searchQuery}&rdquo;
                </span>
              )}
            </div>

            <button
              onClick={handleClearFilters}
              className="inline-flex items-center text-[#0088cc] hover:text-[#0A2540] font-bold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Grid Subheader / Status */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 px-1">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-4 h-4 text-[#0088cc]" />
          <span>
            Showing <strong className="text-[#0A2540]">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'model' : 'models'} in <strong className="text-[#0A2540]">{currentCategoryName}</strong>
          </span>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-8 h-8 text-[#0088cc]" />
          </div>
          <h3 className="text-xl font-bold text-[#0A2540]">No Matching Models Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            We couldn&apos;t find any equipment matching your query. Try searching for different terms or reset your filters.
          </p>
          <div className="pt-2">
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold bg-[#0A2540] text-white hover:bg-[#123055] transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              <span>Show All Equipment</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductCatalog({ allProducts }) {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading product catalogue...</div>}>
      <ProductCatalogInner allProducts={allProducts} />
    </Suspense>
  );
}
