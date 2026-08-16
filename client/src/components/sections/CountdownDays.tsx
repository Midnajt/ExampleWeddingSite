import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";

function daysSince(isoDate: string): number {
  const wedding = new Date(`${isoDate}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  wedding.setHours(0, 0, 0, 0);
  return Math.max(0, Math.floor((today.getTime() - wedding.getTime()) / 86_400_000));
}

export function CountdownDays() {
  const { t } = useTranslation();
  const days = useMemo(() => daysSince(site.weddingDate), []);

  return (
    <Section id="odliczanie" className="bg-muted/40">
      <Container>
        <SectionHeader kicker={t("countdown.kicker")} title={t("countdown.title")} />
        <div className="mx-auto max-w-xl text-center">
          <p className="font-heading text-primary text-7xl font-semibold md:text-8xl">{days}</p>
          <p className="text-muted-foreground mt-4 text-lg">{t("countdown.daysAgo", { count: days })}</p>
          <p className="mt-2 text-sm tracking-widest uppercase">{t("countdown.dateLabel")}</p>
        </div>
      </Container>
    </Section>
  );
}
