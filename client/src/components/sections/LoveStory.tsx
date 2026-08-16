import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";

export function LoveStory() {
  const { t } = useTranslation();

  return (
    <Section id="historia">
      <Container>
        <SectionHeader kicker={t("story.kicker")} title={t("story.title")} />
        <div className="mx-auto max-w-2xl space-y-4 text-center text-base leading-relaxed md:text-lg">
          <p>{t("story.p1")}</p>
          <p className="text-muted-foreground">{t("story.p2")}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {images.story.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl">
              <img
                src={photo.src}
                alt={t(photo.altKey)}
                className="h-72 w-full object-cover md:h-80"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
