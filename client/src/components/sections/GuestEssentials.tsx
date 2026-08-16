import { Bus, CalendarDays, CalendarPlus, MapPinned, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/config/site";
import { quickActionsGapClass } from "@/config/theme";
import { downloadWeddingCalendar } from "@/lib/calendar";
import { useTheme } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";

const QUICK_ACTIONS = [
  {
    key: "schedule",
    href: "#plan",
    icon: CalendarDays,
  },
  {
    key: "bus",
    href: "#organizacja",
    icon: Bus,
  },
  {
    key: "contact",
    href: "#kontakt",
    icon: Phone,
  },
] as const;

export function GuestEssentials() {
  const { t, i18n } = useTranslation();
  const { preset } = useTheme();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "pl";

  return (
    <Section id="niezbednik" className="bg-muted/40">
      <Container>
        <SectionHeader
          kicker={t("essentials.kicker")}
          title={t("essentials.title")}
          subtitle={t("essentials.subtitle")}
        />

        <Stagger
          className={cn("grid sm:grid-cols-2 lg:grid-cols-4", quickActionsGapClass(preset.density))}
        >
          {QUICK_ACTIONS.slice(0, 2).map(({ key, href, icon: Icon }) => (
            <StaggerItem key={key} hover>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <Icon className="text-primary size-5" />
                  <CardTitle>{t(`essentials.${key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-muted-foreground flex-1 text-sm">{t(`essentials.${key}.text`)}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={href}>{t(`essentials.${key}.action`)}</a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}

          <StaggerItem hover>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <MapPinned className="text-primary size-5" />
                <CardTitle>{t("essentials.maps.title")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-muted-foreground flex-1 text-sm">{t("essentials.maps.text")}</p>
                <div className="grid gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={site.ceremony.mapLink} target="_blank" rel="noreferrer">
                      {t("essentials.maps.ceremony")}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={site.reception.mapLink} target="_blank" rel="noreferrer">
                      {t("essentials.maps.reception")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

          {QUICK_ACTIONS.slice(2).map(({ key, href, icon: Icon }) => (
            <StaggerItem key={key} hover>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <Icon className="text-primary size-5" />
                  <CardTitle>{t(`essentials.${key}.title`)}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-muted-foreground flex-1 text-sm">{t(`essentials.${key}.text`)}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={href}>{t(`essentials.${key}.action`)}</a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Card className="mt-6 border-primary/25 bg-card">
          <CardContent className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-heading text-xl">{t("essentials.calendar.title")}</h3>
              <p className="text-muted-foreground mt-1 max-w-2xl text-sm">
                {t("essentials.calendar.text")}
              </p>
            </div>
            <Button onClick={() => downloadWeddingCalendar(language)} className="shrink-0">
              <CalendarPlus />
              {t("essentials.calendar.action")}
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
