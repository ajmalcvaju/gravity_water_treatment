import { siteConfig } from '@/config/site';
import { getAllProducts } from '@/data/products';

export default function sitemap() {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const products = getAllProducts();
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
