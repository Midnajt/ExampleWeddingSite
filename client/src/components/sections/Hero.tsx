import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";
import { images } from "@/config/assets";
import { site } from "@/config/site";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();
  const { preset } = useTheme();
  const layout = preset.heroLayout;

  const copy = (
    <div className={cn(layout === "fullscreen" && "max-w-2xl text-white")}>
      <p
        className={cn(
          "text-sm font-medium tracking-widest uppercase",
          layout === "fullscreen" ? "text-white/80" : "text-primary",
        )}
      >
        {t("hero.kicker")}
      </p>
      <h1
        className={cn(
          "mt-3 font-heading leading-tight",
          layout === "editorial" ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl",
        )}
      >
        {t("hero.title")}
      </h1>
      <p
        className={cn(
          "mt-4 max-w-xl text-base md:text-lg",
          layout === "fullscreen" ? "text-white/85" : "text-muted-foreground",
        )}
      >
        {t("hero.subtitle")}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href={site.phoneHref}>
            <Phone />
            {t("hero.ctaCall")}
          </a>
        </Button>
        <Button asChild size="lg" variant={layout === "fullscreen" ? "secondary" : "outline"}>
          <a href={site.emailHref}>
            <Mail />
            {t("hero.ctaEmail")}
          </a>
        </Button>
      </div>
    </div>
  );

  if (layout === "fullscreen") {
    return (
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={images.hero}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-end px-4 py-20 sm:px-6">
          {copy}
        </div>
      </section>
    );
  }

  if (layout === "editorial") {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        {copy}
        <img
          src={images.hero}
          alt=""
          className="mt-12 h-72 w-full rounded-2xl object-cover md:h-[28rem]"
        />
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
      {copy}
      <img
        src={images.hero}
        alt=""
        className="h-80 w-full rounded-xl object-cover md:h-[28rem]"
      />
    </section>
  );
}
