import { useTranslation } from "react-i18next";
import { BookOpen, Cookie, Plane, Wine } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ITEMS = [
  { key: "wine", icon: Wine },
  { key: "books", icon: BookOpen },
  { key: "travel", icon: Plane },
  { key: "sweets", icon: Cookie },
] as const;

export function GiftWishes() {
  const { t } = useTranslation();

  return (
    <Section id="prezenty">
      <Container>
        <SectionHeader kicker={t("gifts.kicker")} title={t("gifts.title")} subtitle={t("gifts.subtitle")} />
        <div className="grid gap-4 sm:grid-cols-2">
          {ITEMS.map(({ key, icon: Icon }) => (
            <Card key={key}>
              <CardHeader>
                <Icon className="text-primary size-5" />
                <CardTitle>{t(`gifts.${key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t(`gifts.${key}.text`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
