import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Images } from "lucide-react";
import { images } from "@/config/assets";
import { site } from "@/config/site";
import { FloralDivider } from "@/components/layout/FloralDivider";
import { Button } from "@/components/ui/button";
import { fadeUp, heroWord, heroWordContainer, hoverGlow } from "@/lib/motion";

export function Hero() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const words = site.name.split(" ");

  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "linear" }}
      >
        <img
          src={images.hero}
          alt={t("photos.hero")}
          className="absolute inset-0 size-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[#4A3F30]/50" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(80% 50% at 50% -10%, rgba(255, 214, 170, 0.55) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center text-white sm:px-6">
        <motion.p
          className="text-sm font-medium tracking-[0.35em] uppercase text-white/85"
          initial={reduce ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("hero.kicker")}
        </motion.p>

        <motion.h1
          className="font-heading mt-4 text-5xl leading-tight md:text-7xl"
          variants={heroWordContainer}
          initial={reduce ? false : "hidden"}
          animate="show"
          aria-label={site.name}
        >
          {words.map((word, index) => (
            <motion.span key={`${word}-${index}`} variants={heroWord} className="mr-[0.22em] inline-block last:mr-0">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base text-white/90 md:text-lg"
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          animate="show"
          transition={{ delay: 0.9 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          animate="show"
          transition={{ delay: 1 }}
        >
          <FloralDivider className="mt-8 brightness-0 invert" />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-3"
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          animate="show"
          transition={{ delay: 1.1 }}
        >
          <motion.div whileHover={reduce ? undefined : hoverGlow} whileTap={{ scale: 0.97 }}>
            <Button asChild size="lg">
              <a href="#galeria">
                <Images />
                {t("hero.ctaGallery")}
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button asChild size="lg" variant="secondary">
              <a href="#rsvp">{t("hero.ctaRsvp")}</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          className="h-10 w-px bg-linear-to-b from-white/60 to-transparent"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
