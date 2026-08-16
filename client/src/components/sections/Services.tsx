import { useTranslation } from "react-i18next";
import { ClipboardList, PenTool, Rocket, HeartHandshake } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ITEMS = [
  { key: "consult", icon: ClipboardList },
  { key: "design", icon: PenTool },
  { key: "delivery", icon: Rocket },
  { key: "care", icon: HeartHandshake },
] as const;

export function Services() {
  const { t } = useTranslation();

  return (
    <Section id="oferta">
      <Container>
        <SectionHeader
          kicker={t("services.kicker")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <Card key={item.key}>
              <CardHeader>
                <item.icon className="text-primary mb-2 size-6" />
                <CardTitle>{t(`services.items.${item.key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                {t(`services.items.${item.key}.text`)}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
