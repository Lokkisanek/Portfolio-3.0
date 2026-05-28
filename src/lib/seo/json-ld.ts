import { profile } from "@/data/profile";
import {
  allFaq,
  homeSeo,
  siteUrl,
  getServiceSeo,
  type ServiceSeo,
} from "@/data/seo";
import { services, testimonials, type Service } from "@/data/portfolio";

function serviceOffer(service: Service, seo: ServiceSeo) {
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      "@id": `${siteUrl}/sluzby/${service.id}#service`,
      name: seo.title,
      description: seo.description,
      url: `${siteUrl}/sluzby/${service.id}`,
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: {
        "@type": "Country",
        name: "Česká republika",
      },
      serviceType: service.category,
    },
  };
}

export function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    url: siteUrl,
    email: profile.contact.email,
    telephone: profile.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
      addressRegion: profile.location,
    },
    sameAs: [
      profile.socials.github,
      profile.socials.instagram,
      profile.socials.linkedin,
    ],
    knowsAbout: [
      "Web Development",
      "SEO",
      "Smart Home",
      "Home Assistant",
      "Drone videography",
      "PC building",
      "iPhone repair",
    ],
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: homeSeo.title,
    description: homeSeo.description,
    inLanguage: "cs-CZ",
    publisher: { "@id": `${siteUrl}/#person` },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: profile.name,
    description: homeSeo.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: profile.contact.phone,
    email: profile.contact.email,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Česká republika",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
    },
    founder: { "@id": `${siteUrl}/#person` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Služby",
      itemListElement: services.map((service) =>
        serviceOffer(service, getServiceSeo(service)),
      ),
    },
    aggregateRating:
      testimonials.length > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(testimonials.length),
            bestRating: "5",
          }
        : undefined,
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.client_name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
      reviewBody: t.text,
      publisher: { "@type": "Organization", name: t.company },
    })),
  };
}

export function buildFaqSchema(
  faq: readonly { question: string; answer: string }[],
) {
  if (faq.length === 0) return null;
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServicePageSchema(service: Service, seo: ServiceSeo) {
  const url = `${siteUrl}/sluzby/${service.id}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: seo.title,
    description: seo.description,
    url,
    provider: { "@id": `${siteUrl}/#person` },
    areaServed: { "@type": "Country", name: "Česká republika" },
    serviceType: service.category,
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildHomeJsonLd() {
  const faq = buildFaqSchema(allFaq);
  const graph = [
    buildPersonSchema(),
    buildWebSiteSchema(),
    buildProfessionalServiceSchema(),
    ...(faq ? [faq] : []),
  ];
  return { "@context": "https://schema.org", "@graph": graph };
}

export function buildServicePageJsonLd(service: Service, seo: ServiceSeo) {
  const url = `${siteUrl}/sluzby/${service.id}`;
  const faq = buildFaqSchema(seo.faq);
  const graph = [
    buildPersonSchema(),
    buildServicePageSchema(service, seo),
    buildBreadcrumbSchema([
      { name: "Domů", url: siteUrl },
      { name: "Služby", url: `${siteUrl}/sluzby` },
      { name: seo.title, url },
    ]),
    ...(faq ? [faq] : []),
  ];
  return { "@context": "https://schema.org", "@graph": graph };
}
