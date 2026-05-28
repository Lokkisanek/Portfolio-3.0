import { profile } from "@/data/profile";
import { services, testimonials, type Service } from "@/data/portfolio";

export const siteUrl = profile.contact.web.replace(/\/$/, "");

export const defaultKeywords = [
  "Matyas Odehnal",
  "full-stack developer Česko",
  "tvorba webů",
  "web development",
  "SEO optimalizace",
  "lokální SEO",
  "Next.js vývojář",
  "React weby",
  "chytrá domácnost",
  "smart home integrace",
  "Home Assistant instalace",
  "Apple HomeKit integrace",
  "Google Home automatizace",
  "Tuya smart home",
  "letecké práce dron",
  "focení nemovitostí dronem",
  "4K video z dronu",
  "DJI operátor",
  "licence dron A1 A3",
  "oprava iPhone",
  "servis Apple",
  "stavba PC na míru",
  "mikropájení",
  "Česká republika",
] as const;

export type ServiceSeo = {
  title: string;
  description: string;
  keywords: readonly string[];
  h1: string;
  intro: string;
  faq: readonly { question: string; answer: string }[];
};

const serviceSeoMap: Record<string, ServiceSeo> = {
  "web-development": {
    title: "Tvorba webů a SEO optimalizace",
    description:
      "Moderní responzivní weby, SPA a lokální SEO pro malé firmy a živnostníky v Česku. React, Next.js, WordPress. První stránka Google na regionální dotazy.",
    keywords: [
      "tvorba webů pro firmy",
      "webové stránky na míru",
      "SEO optimalizace webu",
      "lokální SEO Česko",
      "responzivní web design",
      "Next.js vývoj",
      "SPA pro živnostníky",
      "web pro restaurace",
    ],
    h1: "Web Development & SEO",
    intro:
      "Navrhuji a vyvíjím rychlé, mobilně optimalizované weby s důrazem na lokální dohledatelnost ve vyhledávačích — ideální pro restaurace, řemeslníky a malé podniky v celé České republice.",
    faq: [
      {
        question: "Pro koho jsou weby a SEO nejvhodnější?",
        answer:
          "Pro malé a střední podniky, lokální živnostníky, restaurace a služby, které chtějí být vidět v Google na regionální dotazy.",
      },
      {
        question: "Jaké technologie používáte?",
        answer:
          "React, Next.js, Tailwind CSS, případně WordPress (headless). Součástí je komplexní SEO a lokální zápisy.",
      },
      {
        question: "Jak dlouho trvá vytvoření webu?",
        answer:
          "Jednoduchá prezentace nebo SPA obvykle v řádu týdnů podle rozsahu; vždy s mobile-first přístupem.",
      },
    ],
  },
  "smart-home": {
    title: "Integrace chytré domácnosti (Smart Home)",
    description:
      "Návrh a instalace smart home: Home Assistant, Apple HomeKit, Google Home, Tuya. Automatizace, senzory, 3D vizualizace ovládacích panelů v ČR.",
    keywords: [
      "chytrá domácnost instalace",
      "smart home integrátor",
      "Home Assistant expert",
      "Apple HomeKit integrace",
      "Google Home automatizace",
      "Tuya IoT",
      "automatizace domácnosti",
      "3D vizualizace smart home",
    ],
    h1: "Smart Home — návrh a integrace",
    intro:
      "Propojuji nekompatibilní ekosystémy do jednoho spolehlivého systému. Od konzultace a 3D vizualizace až po finální nastavení automatizací vytápění, osvětlení a zabezpečení.",
    faq: [
      {
        question: "Které platformy smart home podporujete?",
        answer:
          "Home Assistant (expert), Apple Home (HomeKit), Google Home a Tuya / Smart Life — včetně přemostění zařízení do jedné správy.",
      },
      {
        question: "Umíte vytvořit 3D vizualizaci domu pro tablet?",
        answer:
          "Ano — custom 3D modely a interaktivní prvky pro dashboard (Spline 3D / Mac), včetně ovládání na zdi v obýváku.",
      },
      {
        question: "Řešíte i zabezpečení a vytápění?",
        answer:
          "Ano — návrh senzorů, automatické řízení vytápění podle počasí, notifikace s fotkou na Apple/Google zařízení.",
      },
    ],
  },
  "drone-services": {
    title: "Letecké práce a video z dronu (4K)",
    description:
      "Profesionální dronové natáčení a fotografie nemovitostí v 4K. Licence A1/A3, pojištění. Reality, firemní promo a eventy v Česku.",
    keywords: [
      "letecké práce dron",
      "focení nemovitostí dronem",
      "video z dronu 4K",
      "DJI operátor Česko",
      "dron pro realitky",
      "firemní promo video dron",
      "licence A1 A3 dron",
      "pojištění leteckých prací",
    ],
    h1: "Letecké práce & video produkce",
    intro:
      "Natáčím a fotografuji z dronu v rozlišení až 4K pro realitní kanceláře, developery i firemní promo. Legální provoz s licencí A1/A3 a pojištěním odpovědnosti.",
    faq: [
      {
        question: "Máte povolení k provozu dronu?",
        answer:
          "Ano — povolení k létání A1/A3 (případně A2) a pojištění odpovědnosti pro letecké práce.",
      },
      {
        question: "Jaké typy zakázek realizujete?",
        answer:
          "Prezentace nemovitostí, firemní promo videa, eventy a letecké záběry pozemků s postprodukcí.",
      },
      {
        question: "Jaké vybavení používáte?",
        answer: "DJI drone systém, 4K video, profesionální střih a dodání hotového materiálu.",
      },
    ],
  },
  "hardware-services": {
    title: "Stavba PC a servis iPhone / Apple",
    description:
      "PC na míru, opravy iPhone a iPad, mikropájení, originální díly a záruka. Fotodokumentace opravy. Servis elektroniky v České republice.",
    keywords: [
      "stavba PC na míru",
      "oprava iPhone",
      "servis Apple Česko",
      "výměna displeje iPhone",
      "mikropájení",
      "oprava základní desky",
      "custom PC build",
      "záruka na opravu telefonu",
    ],
    h1: "PC Building & servis elektroniky",
    intro:
      "Stavím výkonná PC na zakázku a provádím precizní opravy iPhone a tabletů včetně zachování TrueTone a Face ID. Prémiové díly a fotodokumentace celého postupu.",
    faq: [
      {
        question: "Opravujete iPhone s garancí kvality?",
        answer:
          "Ano — používám prémiové nebo originální díly, záruka na opravu a zachování prachotěsnosti či voděodolnosti kde je to možné.",
      },
      {
        question: "Provádíte mikropájení?",
        answer:
          "Ano — opravy základní desky a složitější zásahy pod mikroskopem s fotodokumentací pro zákazníka.",
      },
      {
        question: "Stavíte i herní nebo pracovní PC?",
        answer:
          "Ano — kompletní custom build na míru podle rozpočtu a účelu využití.",
      },
    ],
  },
};

export function getServiceSeo(service: Service): ServiceSeo {
  return (
    serviceSeoMap[service.id] ?? {
      title: service.category,
      description: service.description,
      keywords: [service.category],
      h1: service.category,
      intro: service.description,
      faq: [],
    }
  );
}

export const homeSeo = {
  title: `${profile.name} — Web, Smart Home, Drony & HW servis`,
  description: `${profile.bio} Nabízím tvorba webů a SEO, integraci chytré domácnosti (Home Assistant, Apple Home), letecké práce dronem (4K, licence A1/A3) a servis PC/iPhone v ${profile.location}.`,
  keywords: defaultKeywords,
} as const;

export const allFaq = services.flatMap((s) => getServiceSeo(s).faq);

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export const serviceIds = services.map((s) => s.id);

export const siteName = profile.name;
