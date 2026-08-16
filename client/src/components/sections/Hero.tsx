import { useTranslation } from "react-i18next";
import { Images } from "lucide-react";
import { images } from "@/config/assets";
import { site } from "@/config/site";
import { FloralDivider } from "@/components/layout/FloralDivider";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <img
        src={images.hero}
        alt={t("photos.hero")}
        className="absolute inset-0 size-full object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-[#4A3F30]/50" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center text-white sm:px-6">
        <p className="text-sm font-medium tracking-[0.35em] uppercase text-white/85">
          {t("hero.kicker")}
        </p>
        <h1 className="font-heading mt-4 text-5xl leading-tight md:text-7xl">{site.name}</h1>
        <p className="mt-5 max-w-xl text-base text-white/90 md:text-lg">{t("hero.subtitle")}</p>
        <FloralDivider className="mt-8 brightness-0 invert" />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href="#galeria">
              <Images />
              {t("hero.ctaGallery")}
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#rsvp">{t("hero.ctaRsvp")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
