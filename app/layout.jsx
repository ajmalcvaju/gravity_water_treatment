import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { getLocalBusinessJsonLd } from '@/lib/seo';
import FloatingQuickContact from '@/components/shared/FloatingQuickContact';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Gravity Water Treatment | Water Purifiers & RO Plants",
    template: "%s | Gravity Water Treatment",
  },
  description:
    "Explore water purifiers, water treatment plants, and RO water treatment systems from Gravity Water Treatment. Contact us for product enquiries.",
  keywords: [
    "water purifier",
    "water purification systems",
    "water treatment plant",
    "RO water treatment plant",
    "industrial RO plant",
    "commercial water treatment",
    "water treatment equipment",
    "iron removal filter",
    "water softener",
    "Pentair FRP vessels",
    "TATA Steel FRP vessels",
    "Vadakkencherry",
    "Palakkad water treatment",
    "Kerala",
  ],
  authors: [{ name: "Gravity Water Treatment" }],
  creator: "Gravity Water Treatment",
  publisher: "Gravity Water Treatment",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Gravity Water Treatment | Water Purifiers & RO Plants",
    description:
      "Explore water purifiers, water treatment plants, and RO water treatment systems from Gravity Water Treatment. Vadakkencherry, Palakkad.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/hero-plant.svg`,
        width: 1200,
        height: 630,
        alt: "Gravity Water Treatment Industrial Plants and Purifiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravity Water Treatment | Water Purifiers & RO Plants",
    description:
      "Engineered water treatment solutions, whole-house filters, and RO plants in Vadakkencherry, Palakkad.",
    images: [`${siteConfig.url}/images/hero-plant.svg`],
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

export default function RootLayout({ children }) {
  const localBusinessJsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon-g.png" type="image/png" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon-g.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-brand-text-dark antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingQuickContact />
      </body>
    </html>
  );
}
