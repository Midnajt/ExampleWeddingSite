import { useTranslation } from "react-i18next";
import { Container, Section, SectionHeader } from "@/components/layout/Section";

const KEYS = ["parking", "church", "kids", "diet", "dress", "stay", "gifts", "photos"] as const;

export function FaqAccordion() {
  const { t } = useTranslation();

  return (
    <Section id="faq">
      <Container>
        <SectionHeader kicker={t("faq.kicker")} title={t("faq.title")} subtitle={t("faq.subtitle")} />
        <div className="mx-auto max-w-2xl space-y-3">
          {KEYS.map((key) => (
            <details
              key={key}
              className="bg-card group rounded-xl border px-5 py-3 open:shadow-sm"
            >
              <summary className="font-heading cursor-pointer list-none text-lg marker:content-none">
                {t(`faq.items.${key}.q`)}
              </summary>
              <p className="text-muted-foreground mt-2 pb-2 text-sm leading-relaxed">
                {t(`faq.items.${key}.a`)}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
