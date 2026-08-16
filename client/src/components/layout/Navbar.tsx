import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, Moon, Sun } from "lucide-react";
import { site } from "@/config/site";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  { href: "#oferta", key: "nav.services" },
  { href: "#onas", key: "nav.about" },
  { href: "#zespol", key: "nav.team" },
  { href: "#galeria", key: "nav.gallery" },
  { href: "#cennik", key: "nav.pricing" },
  { href: "#kontakt", key: "nav.contact" },
] as const;

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { mode, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleLang = () => {
    void i18n.changeLanguage(i18n.language === "pl" ? "en" : "pl");
  };

  return (
    <header className="bg-background/90 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="font-heading text-lg font-semibold tracking-tight">
          {site.name}
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Główne">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLang}
            aria-label={t("theme.lang")}
          >
            {i18n.language === "pl" ? "EN" : "PL"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMode}
            aria-label={mode === "dark" ? t("theme.light") : t("theme.dark")}
          >
            {mode === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={site.phoneHref}>{t("hero.ctaCall")}</a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label={t("nav.menu")}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4" aria-label={t("nav.menu")}>
                {LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a href={link.href} className="hover:bg-accent rounded-md px-2 py-3 text-base">
                      {t(link.key)}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
