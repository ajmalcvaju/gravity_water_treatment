import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbJsonLd } from '@/lib/seo';

export default function Breadcrumbs({ items = [] }) {
  const fullItems = [{ name: 'Home', url: '/' }, ...items];
  const jsonLd = getBreadcrumbJsonLd(fullItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 flex-wrap">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-brand-blue transition-colors"
            >
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                {isLast ? (
                  <span
                    className="font-semibold text-brand-navy truncate max-w-[200px] sm:max-w-none"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-brand-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
