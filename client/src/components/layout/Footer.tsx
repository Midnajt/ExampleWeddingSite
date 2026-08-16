import { useTranslation } from "react-i18next";
import { site } from "@/config/site";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold">{site.name}</p>
          <p className="text-muted-foreground mt-2 text-sm">{t("hero.kicker")}</p>
          <p className="text-muted-foreground mt-2 text-sm">{t("footer.demo")}</p>
        </div>
        <div>
          <p className="text-sm font-medium">{t("nav.home")}</p>
          <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-foreground" href="#slub">
                {t("nav.ceremony")}
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#wesele">
                {t("nav.reception")}
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#rsvp">
                {t("nav.rsvp")}
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#galeria">
                {t("nav.gallery")}
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#kontakt">
                {t("nav.contact")}
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#polecamy">
                {t("partners.title")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">{t("footer.privacy")}</p>
          <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-foreground" href="#/rodo">
                {t("footer.rodo")}
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#/polityka">
                {t("footer.privacy")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-muted-foreground mx-auto max-w-6xl border-t px-4 py-6 text-xs sm:px-6">
        <p>
          © {year} {site.legalName} · {t("footer.rights")}
        </p>
        <p className="mt-2">
          {t("footer.createdBy")}{" "}
          <a className="underline" href={site.addPattern.url} target="_blank" rel="noreferrer">
            {site.addPattern.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
