import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";

export function About() {
  const { t } = useTranslation();

  return (
    <Section id="onas" className="bg-muted/40">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <img
          src={images.about}
          alt=""
          className="h-80 w-full rounded-xl object-cover md:h-[26rem]"
          loading="lazy"
        />
        <div>
          <SectionHeader kicker={t("about.kicker")} title={t("about.title")} />
          <p className="text-muted-foreground">{t("about.p1")}</p>
          <p className="text-muted-foreground mt-4">{t("about.p2")}</p>
          <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <dt className="font-heading text-3xl">12+</dt>
              <dd className="text-muted-foreground mt-1 text-xs">{t("about.statYears")}</dd>
            </div>
            <div>
              <dt className="font-heading text-3xl">80+</dt>
              <dd className="text-muted-foreground mt-1 text-xs">{t("about.statClients")}</dd>
            </div>
            <div>
              <dt className="font-heading text-3xl">24h</dt>
              <dd className="text-muted-foreground mt-1 text-xs">{t("about.statSupport")}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </Section>
  );
}
