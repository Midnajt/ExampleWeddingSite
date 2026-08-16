import { useTranslation } from "react-i18next";
import { DevPanel } from "@/components/layout/DevPanel";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Slider } from "@/components/sections/Slider";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { PrivacyPage, RodoPage } from "@/components/legal/LegalPages";
import { useHashView } from "@/lib/hash-view";

function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Slider />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Pricing />
      <Contact />
    </main>
  );
}

export default function App() {
  const { t } = useTranslation();
  const { view } = useHashView();

  return (
    <div id="top" className="min-h-dvh">
      <a
        href="#content"
        className="bg-primary text-primary-foreground sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:px-3 focus:py-2"
      >
        {t("common.skip")}
      </a>
      <div className="sticky top-0 z-40">
        <DevPanel />
        <Navbar />
      </div>
      {view === "rodo" ? <RodoPage /> : view === "privacy" ? <PrivacyPage /> : <HomePage />}
      <Footer />
      <CookieBanner />
    </div>
  );
}
