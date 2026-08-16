import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Gallery() {
  const { t } = useTranslation();
  const [index, setIndex] = useState<number | null>(null);
  const items = images.gallery;
  const current = index === null ? null : items[index];

  const prev = () => {
    setIndex((i) => (i === null ? 0 : (i + items.length - 1) % items.length));
  };
  const next = () => {
    setIndex((i) => (i === null ? 0 : (i + 1) % items.length));
  };

  return (
    <Section id="galeria">
      <Container>
        <SectionHeader
          kicker={t("gallery.kicker")}
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              className="group overflow-hidden rounded-lg focus-visible:ring-ring ring-offset-background focus-visible:ring-2 focus-visible:outline-none"
              onClick={() => setIndex(i)}
            >
              <img
                src={item.src}
                alt={t(item.altKey)}
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-44"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </Container>
      <Dialog open={index !== null} onOpenChange={(open) => !open && setIndex(null)}>
        <DialogContent className="bg-background p-2 sm:max-w-5xl">
          <DialogTitle className="sr-only">{current ? t(current.altKey) : ""}</DialogTitle>
          {current ? (
            <div className="relative">
              <img
                src={current.src}
                alt={t(current.altKey)}
                className="max-h-[80vh] w-full object-contain"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button variant="secondary" size="icon" onClick={prev} aria-label={t("gallery.prev")}>
                  <ChevronLeft />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button variant="secondary" size="icon" onClick={next} aria-label={t("gallery.next")}>
                  <ChevronRight />
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
