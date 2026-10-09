# Gravity Water Treatment — Official Website

A modern, high-performance, responsive, and SEO-optimized website built with **Next.js (App Router)** and **Tailwind CSS** for **Gravity Water Treatment**, a premier water purification equipment and water treatment engineering company based in Vadakkencherry, Palakkad, Kerala (operating since 2018).

---

## 🌟 Key Features

1. **5 Main Navigation Pages**:
   - **Home (`/`)**: High-impact gradient hero section (`#103B66` to `#28C5D7`), category showcases, featured products, water testing & borewell remediation highlight, customer benefits, applications, and CTAs.
   - **About Us (`/about`)**: Company background since 2018, core domains, 4-step engineering approach, quality guarantees, and testing capabilities.
   - **Products (`/products`)**: Filterable catalogue by category (`Water Purifier`, `Water Treatment Plant`, `RO Water Treatment Plant`, `Water Cooler`) with real-time text search and URL query synchronization (`?category=...`).
   - **Individual Product Pages (`/products/[slug]`)**: Pre-rendered static pages for all 12 products with technical specifications tables, feature lists, applications, related products, and structured product data.
   - **Solutions (`/solutions`)**: Engineering guide for domestic, commercial, and industrial water treatment, reverse osmosis technical breakdown, and a 6-factor equipment selection guide.
   - **Contact Us (`/contact`)**: Authentic contact details, business hours, interactive enquiry form with validation and WhatsApp submission fallback, plus Google Maps embed.

2. **Standardized WhatsApp Click-to-Chat Integration**:
   - Reusable utility in `lib/whatsapp.js` configured with the authentic business contact number: `+91 95625 84025`.
   - Every product card and product detail page opens WhatsApp pre-filled with the exact product name, category, description, specifications, and URL.

3. **Complete SEO & Technical Best Practices**:
   - Semantic HTML and accessible contrast ratios.
   - Dynamic `sitemap.xml` (`app/sitemap.js`) and `robots.txt` (`app/robots.js`).
   - OpenGraph and Twitter card metadata for social sharing.
   - JSON-LD Structured Data: `LocalBusiness` / `Organization`, `Product`, and `BreadcrumbList`.
   - 100% statically pre-rendered (SSG) for ultra-fast loading and superior Google indexing.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript / JSX
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Asset Rendering**: Scalable SVGs with Next.js Image component
- **Deployment Target**: Vercel

---

## 📁 Project Structure

```text
gravity_water_treatment/
├── app/
│   ├── about/
│   │   └── page.jsx
│   ├── contact/
│   │   └── page.jsx
│   ├── products/
│   │   ├── [slug]/
│   │   │   └── page.jsx
│   │   └── page.jsx
│   ├── solutions/
│   │   └── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   ├── not-found.jsx
│   ├── page.jsx
│   ├── robots.js
│   └── sitemap.js
├── components/
│   ├── contact/
│   │   └── ContactForm.jsx
│   ├── home/
│   │   ├── ApplicationsSection.jsx
│   │   ├── CategoryCards.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── HeroSection.jsx
│   │   ├── WaterTestingBanner.jsx
│   │   └── WhyChooseUs.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── products/
│   │   ├── ProductCard.jsx
│   │   └── ProductCatalog.jsx
│   └── shared/
│       ├── Breadcrumbs.jsx
│       ├── CTASection.jsx
│       └── WhatsAppEnquiryButton.jsx
├── config/
│   └── site.js
├── data/
│   └── products.js
├── lib/
│   ├── seo.js
│   └── whatsapp.js
├── public/
│   └── images/
│       ├── logo.svg
│       ├── logo-white.svg
│       ├── hero-plant.svg
│       ├── about-plant.svg
│       └── products/ (12 product illustrations)
├── package.json
└── tailwind.config.js
```

---

## 🚀 Running the Project Locally

1. **Install dependencies** (already installed):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build and test production output**:
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Deploying to Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and import the repository.
3. Vercel automatically detects Next.js:
   - Build Command: `next build`
   - Output Directory: `.next`
4. Click **Deploy**. Your website will be live in seconds with global edge caching and free SSL!
