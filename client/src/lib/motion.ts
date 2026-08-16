import type { Transition, Variants } from "framer-motion";

/** Cubic bezier from AddPattern: soft overshoot, no bounce. */
export const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, amount: 0.15 as const };
export const viewportHeader = { once: true, amount: 0.3 as const };

const ease: Transition["ease"] = easeOutExpo;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const scaleItem: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

export const heroWordContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

export function staggerContainer(stagger = 0.1, delay = 0.15): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

/** Lift only on the wrapper; glow uses drop-shadow so it follows rounded corners. */
export const hoverLift = {
  y: -6,
  filter:
    "drop-shadow(0 8px 16px rgba(158, 90, 48, 0.18)) drop-shadow(0 0 28px rgba(94, 101, 81, 0.12))",
};

export const hoverGlow = {
  scale: 1.04,
  boxShadow: "0 0 20px rgba(158, 90, 48, 0.35), 0 0 40px rgba(94, 101, 81, 0.22)",
};
