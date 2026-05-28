import type { Metadata } from "next";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { IntroStrip } from "@/components/scroll-experience/intro-strip";
import { ScrollExperienceLoader } from "@/components/scroll-experience/scroll-experience-loader";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";
import { TrustBar } from "@/components/trust-bar";
import { allFaq } from "@/data/seo";
import { buildHomeMetadata } from "@/lib/seo/metadata";
import { buildHomeJsonLd } from "@/lib/seo/json-ld";

export const metadata: Metadata = buildHomeMetadata();

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomeJsonLd()} />
      <SiteHeader />
      <main>
        <IntroStrip />
        <ScrollExperienceLoader />
        <div id="portfolio">
          <TrustBar />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Faq items={allFaq} title="Časté dotazy ke službám" />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
