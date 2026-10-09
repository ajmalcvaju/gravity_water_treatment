export const siteConfig = {
  name: "Gravity Water Treatment",
  shortName: "Gravity",
  tagline: "Pure Water Solutions. Engineered for Every Need.",
  description:
    "Leading water purification equipment and water treatment engineering solutions in Vadakkencherry, Palakkad. Specialized in Domestic & Commercial RO Systems, Whole House Water Filtration Plants, and Water Softeners.",
  url: "https://www.gravitywatertreatment.com",
  ogImage: "https://www.gravitywatertreatment.com/images/og-image.jpg",
  establishedYear: 2018,
  contact: {
    phone: "+91 9562584025",
    phoneDisplay: "+91 95625 84025",
    whatsappNumber: "919562584025", // International format for wa.me link
    whatsappDisplay: "+91 95625 84025",
    email: "gravityvdy@gmail.com",
    address: {
      street: "Royal Junction",
      locality: "Vadakkencherry",
      city: "Palakkad",
      state: "Kerala",
      postalCode: "678683",
      country: "India",
      display: "Royal Junction, Vadakkencherry, Palakkad, Kerala - 678683",
    },
    hours: "Monday – Saturday: 9:00 AM – 7:30 PM, Sunday: On Call Service",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.8128266393373!2d76.4820598!3d10.593802599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8099722b3d1cb%3A0x32fe3c51ee0c79ef!2sGravity%20water%20treatment!5e0!3m2!1sen!2sin!4v1791529195219!5m2!1sen!2sin",
  },
  categories: [
    {
      id: "water-purifier",
      name: "Domestic Purifier",
      slug: "water-purifier",
      badge: "RESIDENTIAL",
      subBadge: "30+ Models",
      shortDescription:
        "Multi-Stage RO + UV + UF, Copper & Alkaline Purifiers",
      image: "/images/products/domestic-ro-purifier.png",
      titleColor: "text-brand-navy",
    },
    {
      id: "water-treatment-plant",
      name: "Water Treatment Plant",
      slug: "water-treatment-plant",
      badge: "WATER FILTRATION",
      subBadge: "Custom Vessel",
      shortDescription:
        "FRP Vessel Sand, Sediment, Carbon & Iron Remover Filters",
      image: "/images/products/frp-vessel-real-installation.png",
      titleColor: "text-[#0088cc]",
    },
    {
      id: "ro-water-treatment-plant",
      name: "RO Treatment Plant",
      slug: "ro-water-treatment-plant",
      badge: "COMMERCIAL RO",
      subBadge: "Skid Mounted",
      shortDescription:
        "Commercial & Industrial High-Flow RO Plants (50-5000 LPH)",
      image: "/images/products/ro-water-treatment-plant.png",
      titleColor: "text-brand-navy",
    },
  ],
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact Us", href: "/contact" },
  ],
};
