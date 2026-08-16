import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PLANS = [
  { key: "start", featured: false, count: 3 },
  { key: "biz", featured: true, count: 3 },
  { key: "care", featured: false, count: 3 },
] as const;

export function Pricing() {
  const { t } = useTranslation();

  return (
    <Section id="cennik">
      <Container>
        <SectionHeader
          kicker={t("pricing.kicker")}
          title={t("pricing.title")}
          subtitle={t("pricing.subtitle")}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.key}
              className={cn(plan.featured && "border-primary shadow-md")}
            >
              <CardHeader>
                <p className="text-muted-foreground text-sm">
                  {t(`pricing.plans.${plan.key}.name`)}
                </p>
                <CardTitle className="text-3xl">
                  {t(`pricing.plans.${plan.key}.price`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {Array.from({ length: plan.count }).map((_, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-primary mt-0.5 size-4 shrink-0" />
                      {t(`pricing.plans.${plan.key}.items.${i}`)}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <a href={site.phoneHref}>{t("pricing.cta")}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
