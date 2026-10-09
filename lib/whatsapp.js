import { siteConfig } from "@/config/site";

/**
 * Builds a standardized product enquiry message for WhatsApp.
 *
 * @param {Object} product - Product details object
 * @param {string} [originUrl] - Optional product URL
 * @returns {string} WhatsApp click-to-chat URL
 */
export function buildProductWhatsAppUrl(product, originUrl = "") {
  const number = siteConfig.contact.whatsappNumber;

  let specsText = "Available on request";
  if (product.specifications) {
    if (Array.isArray(product.specifications)) {
      specsText = product.specifications.join(", ");
    } else if (typeof product.specifications === "object") {
      specsText = Object.entries(product.specifications)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
    } else {
      specsText = String(product.specifications);
    }
  }

  const productUrl =
    originUrl ||
    (typeof window !== "undefined"
      ? `${window.location.origin}/products/${product.slug}`
      : `${siteConfig.url}/products/${product.slug}`);

  const message = [
    "Hello Gravity Water Treatment,",
    "",
    "I am interested in the following product:",
    "",
    `Product Name: ${product.name}`,
    `Category: ${product.category}`,
    `Description: ${product.shortDescription || product.name}`,
    `Specifications: ${specsText}`,
    `Product URL: ${productUrl}`,
    "",
    "Please share more details, pricing, and availability.",
    "",
    "Thank you.",
  ].join("\n");

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a generic consultation/enquiry WhatsApp URL.
 *
 * @param {string} subject - Topic or requirement
 * @param {Object} details - Optional extra key-values
 * @returns {string} WhatsApp click-to-chat URL
 */
export function buildGeneralWhatsAppUrl(subject = "Water Treatment Enquiry", details = {}) {
  const number = siteConfig.contact.whatsappNumber;

  const lines = [
    "Hello Gravity Water Treatment,",
    "",
    "I have a water treatment enquiry.",
  ];

  if (details.name) lines.push(`Name: ${details.name}`);
  if (details.category) lines.push(`Category: ${details.category}`);
  if (details.location) lines.push(`Location: ${details.location}`);
  if (details.source) lines.push(`Water Source: ${details.source}`);
  if (details.message) lines.push(`Requirement Details: ${details.message}`);

  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
