import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { homeSeo, siteName, siteUrl, type ServiceSeo } from "@/data/seo";
import type { Service } from "@/data/portfolio";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteName} — portfolio služeb`,
};

function baseOpenGraph(title: string, description: string, path = ""): Metadata["openGraph"] {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  return {
    type: "website",
    locale: "cs_CZ",
    url,
    siteName,
    title,
    description,
    images: [ogImage],
  };
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: homeSeo.title,
      template: `%s | ${siteName}`,
    },
    description: homeSeo.description,
    keywords: [...homeSeo.keywords],
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    publisher: profile.name,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: siteUrl,
      languages: { "cs-CZ": siteUrl },
    },
    openGraph: baseOpenGraph(homeSeo.title, homeSeo.description),
    twitter: {
      card: "summary_large_image",
      title: homeSeo.title,
      description: homeSeo.description,
      images: ["/opengraph-image"],
    },
    other: {
      "geo.region": "CZ",
      "geo.placename": profile.location,
    },
  };
}

export function buildHomeMetadata(): Metadata {
  return {
    title: homeSeo.title,
    description: homeSeo.description,
    keywords: [...homeSeo.keywords],
    alternates: { canonical: siteUrl },
    openGraph: baseOpenGraph(homeSeo.title, homeSeo.description),
  };
}

export function buildServicesIndexMetadata(): Metadata {
  const title = "Všechny služby";
  const description =
    "Přehled služeb: tvorba webů a SEO, smart home integrace, letecké práce dronem a PC/iPhone servis v České republice.";
  return {
    title,
    description,
    keywords: [...homeSeo.keywords],
    alternates: { canonical: `${siteUrl}/sluzby` },
    openGraph: baseOpenGraph(`${title} | ${siteName}`, description, "/sluzby"),
  };
}

export function buildServiceMetadata(
  service: Service,
  seo: ServiceSeo,
): Metadata {
  const title = seo.title;
  const description = seo.description;
  const path = `/sluzby/${service.id}`;

  return {
    title,
    description,
    keywords: [...seo.keywords, ...homeSeo.keywords.slice(0, 8)],
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: baseOpenGraph(`${title} | ${siteName}`, description, path),
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
