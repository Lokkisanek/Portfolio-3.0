export type ScrollCallout = {
  at: number;
  side: "left" | "right";
  title: string;
  text: string;
};

export type CodeScene = {
  id: string;
  type: "code";
  title: string;
  subtitle: string;
  serviceHref: string;
  serviceLabel: string;
  accent: string;
  code: string;
  filename: string;
  callouts: ScrollCallout[];
};

export type ModelScene = {
  id: string;
  type: "model";
  title: string;
  subtitle: string;
  serviceHref: string;
  serviceLabel: string;
  accent: string;
  modelUrl: string;
  modelVariant: "iphone" | "echo" | "drone" | "pc";
  modelScale: number;
  callouts: ScrollCallout[];
};

export type ScrollScene = CodeScene | ModelScene;

export const scrollScenes: ScrollScene[] = [
  {
    id: "web",
    type: "code",
    title: "Web Development & SEO",
    subtitle: "Moderní weby, které vydělávají — rychlé, responzivní a viditelné v Google.",
    serviceHref: "/sluzby/web-development",
    serviceLabel: "Služba: Web & SEO",
    accent: "#2dd4bf",
    filename: "app/page.tsx",
    code: `import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export const metadata = {
  title: "Vaše firma | Lokální služby",
  description: "Rychlý web optimalizovaný pro mobily a SEO.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero
        title="Řemeslník Jan — Praha"
        cta="Nezávazná poptávka"
      />
      <Services items={["Web", "SEO", "Kontakt"]} />
    </main>
  );
}`,
    callouts: [
      {
        at: 0.15,
        side: "left",
        title: "React & Next.js",
        text: "Rychlé SPA a prezentace pro živnostníky i malé firmy.",
      },
      {
        at: 0.45,
        side: "right",
        title: "Lokální SEO",
        text: "Optimalizace na regionální dotazy — aby vás zákazníci našli.",
      },
      {
        at: 0.72,
        side: "left",
        title: "Mobile-first",
        text: "Perfektní zobrazení na telefonu, kde dnes lidé hledají služby.",
      },
    ],
  },
  {
    id: "iphone",
    type: "model",
    title: "Opravy iPhone & Apple",
    subtitle: "Precizní servis s garancí funkčnosti — TrueTone, Face ID i voděodolnost kde lze.",
    serviceHref: "/sluzby/hardware-services",
    serviceLabel: "Služba: PC & iPhone servis",
    accent: "#a78bfa",
    modelUrl: "/models/iphone_x_lowpoly/scene.gltf",
    modelVariant: "iphone",
    modelScale: 0.022,
    callouts: [
      {
        at: 0.2,
        side: "right",
        title: "Oprava na počkání",
        text: "Výměna displeje, baterie i složitější zásahy podle domluvy.",
      },
      {
        at: 0.48,
        side: "left",
        title: "Záruka funkčnosti",
        text: "Prémiové díly a kontrola před předáním — telefon musí fungovat.",
      },
      {
        at: 0.75,
        side: "right",
        title: "Fotodokumentace",
        text: "Průběh opravy na fotkách — transparentnost pro zákazníka.",
      },
    ],
  },
  {
    id: "smart-home",
    type: "model",
    title: "Smart Home & Home Assistant",
    subtitle: "Jeden systém pro Apple Home, Google, Tuya — automatizace podle vašeho života.",
    serviceHref: "/sluzby/smart-home",
    serviceLabel: "Služba: Smart Home",
    accent: "#38bdf8",
    modelUrl: "/models/echo_dot__alexa/scene.gltf",
    modelVariant: "echo",
    modelScale: 8,
    callouts: [
      {
        at: 0.18,
        side: "left",
        title: "Home Assistant Expert",
        text: "Vlastní automatizace, mosty Zigbee/Z-Wave, lokální správa.",
      },
      {
        at: 0.5,
        side: "right",
        title: "3D vizualizace domu",
        text: "Interaktivní panel na tabletu — ovládání, které zaujme celou rodinu.",
      },
      {
        at: 0.78,
        side: "left",
        title: "Zabezpečení & vytápění",
        text: "Senzory, notifikace s fotkou, chytré řízení podle počasí.",
      },
    ],
  },
  {
    id: "drone",
    type: "model",
    title: "Letecké práce & Video 4K",
    subtitle: "Profesionální záběry nemovitostí a firem — licence A1/A3 a pojištění.",
    serviceHref: "/sluzby/drone-services",
    serviceLabel: "Služba: Dron & video",
    accent: "#fbbf24",
    modelUrl: "/models/dji_spark_-_low_poly_medium/scene.gltf",
    modelVariant: "drone",
    modelScale: 0.35,
    callouts: [
      {
        at: 0.22,
        side: "right",
        title: "4K & postprodukce",
        text: "Letecké video i foto s profesionálním střihem pro reality a promo.",
      },
      {
        at: 0.52,
        side: "left",
        title: "Licence A1/A3",
        text: "Legální provoz dronu a pojištění odpovědnosti u leteckých prací.",
      },
      {
        at: 0.8,
        side: "right",
        title: "DJI systém",
        text: "Spolehlivé vybavení pro nemovitosti, eventy i firemní kampaně.",
      },
    ],
  },
];

export const SCENE_SCROLL_HEIGHT_VH = 280;
