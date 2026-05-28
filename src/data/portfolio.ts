export const portfolioMeta = {
  lang: "cs",
  lastUpdated: "2026-05-26",
  professionalLook: true,
  mobileOptimized: true,
  trustIndexOptimized: true,
} as const;

export type Ecosystem = { name: string; level: string };

export type Service = {
  id: string;
  category: string;
  description: string;
  sub_services?: readonly string[];
  technologies?: readonly string[];
  supported_ecosystems?: readonly Ecosystem[];
  equipment_and_trust?: Readonly<Record<string, string>>;
  guarantees?: readonly string[];
};

export const services: readonly Service[] = [
  {
    id: "web-development",
    category: "Web Development & SEO",
    description:
      "Moderní, rychlé a responzivní weby optimalizované pro vyhledávače a mobily.",
    sub_services: [
      "Single Page Applications (SPA)",
      "Webové prezentace pro malé podniky (restaurace, lokální služby, řemeslníci)",
      "Komplexní SEO optimalizace a lokální zápisy",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "WordPress / Headless",
      "SEO tools",
    ],
  },
  {
    id: "smart-home",
    category: "Návrh & Integrace Chytré Domácnosti (Smart Home)",
    description:
      "Komplexní automatizace domácností od konzultace a 3D vizualizace až po finální oživení a nastavení ekosystémů.",
    supported_ecosystems: [
      {
        name: "Home Assistant",
        level:
          "Advanced / Expert (vlastní automatizace, Zigbee/Z-Wave mosty, lokální správa)",
      },
      {
        name: "Apple Home (HomeKit)",
        level:
          "Advanced (integrace, sdílení v rodině, bezpečné streamování kamer)",
      },
      {
        name: "Google Home",
        level: "Advanced (hlasové ovládání, propojení spotřebičů, rutiny)",
      },
      {
        name: "Tuya / Smart Life",
        level: "Advanced (IoT zařízení, cloudová i lokální řešení, senzory)",
      },
    ],
    sub_services: [
      "Návrh senzorů, osvětlení, vytápění a zabezpečení",
      "Přemostění nekompatibilních zařízení do jednoho systému (přes Home Assistant)",
      "Tvorba vlastních 3D vizualizací domů pro ovládací panely",
    ],
  },
  {
    id: "drone-services",
    category: "Letecké práce & Video produkce",
    description:
      "Profesionální natáčení a fotografování z dronu v rozlišení až 4K pro reality a firemní promo.",
    equipment_and_trust: {
      drone_licence: "Povolení k létání A1/A3 (případně A2)",
      insurance: "Pojištění odpovědnosti pro letecké práce",
      hardware: "DJI Drone System",
    },
  },
  {
    id: "hardware-services",
    category: "PC Building & Servis elektroniky",
    description:
      "Stavba PC na zakázku a precizní opravy mobilních telefonů (primárně iPhone) a tabletů.",
    guarantees: [
      "Použití prémiových / originálních dílů",
      "Záruka na opravu a zachování prachotěsnosti/voděodolnosti",
      "Fotodokumentace postupu opravy pro zákazníka",
    ],
  },
];

export type ProjectImage = { url: string; alt: string };
export type ProjectMedia = {
  type: string;
  url: string;
  thumbnail: string;
  alt: string;
};

export type Project3dItem = {
  name: string;
  type: string;
  file: string;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  features?: readonly string[];
  results?: string;
  images?: readonly ProjectImage[];
  media?: readonly ProjectMedia[];
  "3d_components_potatoma"?: {
    software_used: string;
    description: string;
    items: readonly Project3dItem[];
  };
};

export const projects: readonly Project[] = [
  {
    id: "project-smart-home-01",
    category: "smart-home",
    title: "Komplexní automatizace novostavby přes Home Assistant",
    description:
      "Návrh a integrace chytré domácnosti kombinující ekosystémy Apple Home a Tuya pod jednotnou správu Home Assistant. Součástí projektu bylo vytvoření interaktivního 3D plánu domu pro tablet na zdi.",
    features: [
      "Automatické řízení podlahového vytápění podle předpovědi počasí",
      "Zabezpečovací systém s notifikacemi s fotkou na Apple/Google zařízení",
      "Hlasové ovládání napříč celým domem",
    ],
    "3d_components_potatoma": {
      software_used: "Spline 3D / Mac 3D Tool (Potato 3D style)",
      description:
        "Custom modelované interaktivní prvky pro dashboard chytré domácnosti.",
      items: [
        {
          name: "Smart Hub Console",
          type: "Low-poly 3D Model",
          file: "/assets/3d/smart_hub.gltf",
        },
        {
          name: "Animated Smart Thermostat",
          type: "Interactive 3D Asset",
          file: "/assets/3d/thermostat.gltf",
        },
        {
          name: "IoT Gateway Box",
          type: "Low-poly 3D Asset",
          file: "/assets/3d/gateway.gltf",
        },
      ],
    },
    images: [
      {
        url: "/images/projects/smarthome-dashboard-3d.jpg",
        alt: "3D vizualizace domu na tabletu",
      },
      {
        url: "/images/projects/smarthome-rack-setup.jpg",
        alt: "Pohled na zapojení centrálního hubu",
      },
      {
        url: "/images/projects/smarthome-mobile-app.jpg",
        alt: "Mobilní rozhraní pro ovládání na telefonu",
      },
    ],
  },
  {
    id: "project-web-01",
    category: "web-development",
    title: "Lokální Servis — Responzivní SPA s lokálním SEO",
    description:
      "Single Page webová stránka pro menší firmu s optimalizací na klíčová slova v daném regionu. Plně přizpůsobeno pro zobrazení na mobilech.",
    results:
      "Web se drží na první stránce v Google vyhledávání na lokální dotazy.",
    images: [
      {
        url: "/images/portfolio/web-firmy-desktop.jpg",
        alt: "Desktop verze stránky",
      },
      {
        url: "/images/portfolio/web-firmy-mobile.jpg",
        alt: "Mobilní optimalizovaná verze",
      },
    ],
  },
  {
    id: "project-drone-01",
    category: "drone-services",
    title: "Video a fotoprezentace nemovitosti",
    description:
      "Letecké 4K záběry pozemku a okolí domu doplněné o profesionální postprodukci a střih.",
    media: [
      {
        type: "video",
        url: "/videos/drone/reality-promo.mp4",
        thumbnail: "/images/drone/thumb.jpg",
        alt: "Promo video z dronu",
      },
    ],
  },
  {
    id: "project-hw-01",
    category: "hardware-services",
    title: "Oprava základní desky a výměna displeje iPhone",
    description:
      "Ukázka čisté práce při mikropájení a výměně displeje u Apple iPhone se zachováním TrueTone a FaceID funkcí.",
    images: [
      {
        url: "/images/hardware/iphone-disassembly.jpg",
        alt: "Rozložený iPhone na servisní podložce",
      },
      {
        url: "/images/hardware/microscope-soldering.jpg",
        alt: "Práce pod mikroskopem — vysoký detail a preciznost",
      },
    ],
  },
];

export type Testimonial = {
  client_name: string;
  company: string;
  rating: number;
  text: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    client_name: "Marek Richter",
    company: "Majitel rodinného domu",
    rating: 5,
    text: "Propojení Home Assistantu s našimi Apple zařízeními funguje skvěle. 3D model domu na tabletu v obýváku vypadá luxusně a každý ho obdivuje.",
  },
  {
    client_name: "Lucie Černá",
    company: "Květinářství u Lucie",
    rating: 5,
    text: "Rychlé jednání, jednoduchý web, který skvěle funguje na telefonech a lidé nás díky SEO konečně najdou na internetu.",
  },
];

export const categoryLabels: Record<string, string> = {
  "smart-home": "Smart Home",
  "web-development": "Web & SEO",
  "drone-services": "Dron & video",
  "hardware-services": "Hardware",
};

const trustLabels: Record<string, string> = {
  drone_licence: "Licence",
  insurance: "Pojištění",
  hardware: "Vybavení",
};

export function formatTrustKey(key: string): string {
  return trustLabels[key] ?? key.replace(/_/g, " ");
}
