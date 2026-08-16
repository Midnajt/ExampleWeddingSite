import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/config/site";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <Section id="kontakt" className="bg-muted/40">
      <Container>
        <SectionHeader
          kicker={t("contact.kicker")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="flex gap-3 text-sm">
              <MapPin className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                <span className="font-medium">{t("contact.address")}</span>
                <br />
                {site.address.full}
              </span>
            </p>
            <p className="flex gap-3 text-sm">
              <Phone className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                <span className="font-medium">{t("contact.phone")}</span>
                <br />
                <a className="hover:underline" href={site.phoneHref}>
                  {site.phone}
                </a>
              </span>
            </p>
            <p className="flex gap-3 text-sm">
              <Mail className="text-primary mt-0.5 size-5 shrink-0" />
              <span>
                <span className="font-medium">{t("contact.email")}</span>
                <br />
                <a className="hover:underline" href={site.emailHref}>
                  {site.email}
                </a>
              </span>
            </p>
            <div className="flex gap-3 text-sm">
              <Clock className="text-primary mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-medium">{t("contact.hours")}</p>
                <ul className="text-muted-foreground mt-1 space-y-1">
                  {site.hours.map((row) => (
                    <li key={row.daysPl}>
                      {i18n.language === "en" ? row.daysEn : row.daysPl}:{" "}
                      {row.hours === "nieczynne" ? t("contact.closed") : row.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={site.phoneHref}>{t("hero.ctaCall")}</a>
              </Button>
              <Button asChild variant="outline">
                <a href={site.emailHref}>{t("hero.ctaEmail")}</a>
              </Button>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium">{t("contact.map")}</p>
            <iframe
              title={t("contact.map")}
              src={site.mapEmbed}
              className="h-72 w-full rounded-xl border md:h-80"
              loading="lazy"
            />
            <p className="mt-2 text-xs">
              <a className="underline" href={site.mapLink} target="_blank" rel="noreferrer">
                OpenStreetMap
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
