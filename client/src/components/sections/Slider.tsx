import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import { Container, Section, SectionHeader } from "@/components/layout/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Slider() {
  const { t } = useTranslation();

  return (
    <Section className="bg-muted/40">
      <Container>
        <SectionHeader kicker={t("nav.gallery")} title={t("slider.title")} subtitle={t("slider.subtitle")} />
        <Carousel opts={{ loop: true }} className="px-12">
          <CarouselContent>
            {images.slider.map((slide) => (
              <CarouselItem key={slide.src}>
                <img
                  src={slide.src}
                  alt={slide.altKey}
                  className="h-64 w-full rounded-xl object-cover md:h-[28rem]"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
}
