import { siteConfig } from "@/config/site";

/**
 * Generate standard page metadata.
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
  keywords = [],
}) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | Water Purifiers & RO Plants`;

  const metaDesc = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;

  const defaultKeywords = [
    "water purifier",
    "water purification systems",
    "water treatment plant",
    "RO water treatment plant",
    "industrial RO plant",
    "commercial water treatment",
    "water cooler",
    "water treatment equipment",
    "iron removal filter",
    "water softener",
    "borewell water treatment",
    "Vadakkencherry",
    "Palakkad",
    "Kerala water treatment",
  ];

  return {
    title: fullTitle,
    description: metaDesc,
    keywords: [...new Set([...keywords, ...defaultKeywords])].join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDesc,
      images: [image.startsWith("http") ? image : `${siteConfig.url}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generate Organization & LocalBusiness JSON-LD structured data.
 */
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "Gravity Water Treatment",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}/images/og-image.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.5956,
      longitude: 76.4952,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Vadakkencherry" },
      { "@type": "City", name: "Palakkad" },
      { "@type": "City", name: "Alathur" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Water Treatment Systems & Purifiers",
      itemListElement: siteConfig.categories.map((cat, idx) => ({
        "@type": "OfferCatalog",
        name: cat.name,
        position: idx + 1,
      })),
    },
  };
}

/**
 * Generate Product JSON-LD structured data.
 */
export function getProductJsonLd(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: `${siteConfig.url}${product.image}`,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceType: "https://schema.org/ListPrice",
        description: "Contact on WhatsApp for competitive quote and sizing",
      },
    },
  };
}

/**
 * BreadcrumbList JSON-LD.
 */
export function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
