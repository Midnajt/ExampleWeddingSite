import { useTranslation } from "react-i18next";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const KEYS = ["couple", "brideFamily", "groomFamily", "friends", "piwniczna", "barcice"] as const;

export function TablePlan() {
  const { t } = useTranslation();

  return (
    <Section id="stoly" className="bg-muted/40">
      <Container>
        <SectionHeader kicker={t("tables.kicker")} title={t("tables.title")} subtitle={t("tables.subtitle")} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KEYS.map((key) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{t(`tables.groups.${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t(`tables.groups.${key}.text`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
