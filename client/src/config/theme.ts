export type HeroLayout = "fullscreen" | "split" | "editorial";
export type SectionDensity = "comfortable" | "compact" | "airy";
export type ThemePresetId = "classic" | "modern" | "elegant";

export type ThemeTokens = {
  radius: string;
  headingFont: string;
  bodyFont: string;
  googleFontsHref: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  border: string;
  input: string;
  ring: string;
};

export type ThemePreset = {
  id: ThemePresetId;
  namePl: string;
  nameEn: string;
  heroLayout: HeroLayout;
  density: SectionDensity;
  light: ThemeTokens;
  dark: ThemeTokens;
};

const classicLight: ThemeTokens = {
  radius: "0.625rem",
  headingFont: '"Libre Baskerville", serif',
  bodyFont: '"Source Sans 3", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;500;600;700&display=swap",
  background: "oklch(0.985 0.005 90)",
  foreground: "oklch(0.22 0.02 50)",
  card: "oklch(0.995 0.004 90)",
  cardForeground: "oklch(0.22 0.02 50)",
  popover: "oklch(0.995 0.004 90)",
  popoverForeground: "oklch(0.22 0.02 50)",
  primary: "oklch(0.38 0.06 250)",
  primaryForeground: "oklch(0.98 0.01 90)",
  secondary: "oklch(0.94 0.02 90)",
  secondaryForeground: "oklch(0.28 0.03 50)",
  muted: "oklch(0.95 0.015 90)",
  mutedForeground: "oklch(0.5 0.02 50)",
  accent: "oklch(0.72 0.12 75)",
  accentForeground: "oklch(0.22 0.03 50)",
  destructive: "oklch(0.577 0.245 27.325)",
  border: "oklch(0.9 0.015 80)",
  input: "oklch(0.9 0.015 80)",
  ring: "oklch(0.38 0.06 250)",
};

const classicDark: ThemeTokens = {
  ...classicLight,
  background: "oklch(0.18 0.02 50)",
  foreground: "oklch(0.96 0.01 90)",
  card: "oklch(0.22 0.02 50)",
  cardForeground: "oklch(0.96 0.01 90)",
  popover: "oklch(0.22 0.02 50)",
  popoverForeground: "oklch(0.96 0.01 90)",
  primary: "oklch(0.78 0.08 75)",
  primaryForeground: "oklch(0.2 0.03 50)",
  secondary: "oklch(0.28 0.02 50)",
  secondaryForeground: "oklch(0.96 0.01 90)",
  muted: "oklch(0.28 0.02 50)",
  mutedForeground: "oklch(0.72 0.02 80)",
  accent: "oklch(0.7 0.12 75)",
  accentForeground: "oklch(0.18 0.02 50)",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 12%)",
  input: "oklch(1 0 0 / 16%)",
  ring: "oklch(0.78 0.08 75)",
};

const modernLight: ThemeTokens = {
  radius: "0.25rem",
  headingFont: '"Outfit", sans-serif',
  bodyFont: '"Outfit", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap",
  background: "oklch(0.99 0 0)",
  foreground: "oklch(0.145 0 0)",
  card: "oklch(1 0 0)",
  cardForeground: "oklch(0.145 0 0)",
  popover: "oklch(1 0 0)",
  popoverForeground: "oklch(0.145 0 0)",
  primary: "oklch(0.55 0.2 265)",
  primaryForeground: "oklch(0.99 0 0)",
  secondary: "oklch(0.96 0 0)",
  secondaryForeground: "oklch(0.2 0 0)",
  muted: "oklch(0.96 0 0)",
  mutedForeground: "oklch(0.5 0 0)",
  accent: "oklch(0.55 0.2 265)",
  accentForeground: "oklch(0.99 0 0)",
  destructive: "oklch(0.577 0.245 27.325)",
  border: "oklch(0.9 0 0)",
  input: "oklch(0.9 0 0)",
  ring: "oklch(0.55 0.2 265)",
};

const modernDark: ThemeTokens = {
  ...modernLight,
  background: "oklch(0.145 0 0)",
  foreground: "oklch(0.985 0 0)",
  card: "oklch(0.2 0 0)",
  cardForeground: "oklch(0.985 0 0)",
  popover: "oklch(0.2 0 0)",
  popoverForeground: "oklch(0.985 0 0)",
  primary: "oklch(0.7 0.18 265)",
  primaryForeground: "oklch(0.15 0 0)",
  secondary: "oklch(0.27 0 0)",
  secondaryForeground: "oklch(0.985 0 0)",
  muted: "oklch(0.27 0 0)",
  mutedForeground: "oklch(0.72 0 0)",
  accent: "oklch(0.7 0.18 265)",
  accentForeground: "oklch(0.15 0 0)",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 12%)",
  input: "oklch(1 0 0 / 16%)",
  ring: "oklch(0.7 0.18 265)",
};

const elegantLight: ThemeTokens = {
  radius: "1rem",
  headingFont: '"Cormorant Garamond", serif',
  bodyFont: '"Nunito Sans", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Nunito+Sans:wght@400;500;600;700&display=swap",
  background: "oklch(0.97 0.015 80)",
  foreground: "oklch(0.28 0.04 20)",
  card: "oklch(0.99 0.01 80)",
  cardForeground: "oklch(0.28 0.04 20)",
  popover: "oklch(0.99 0.01 80)",
  popoverForeground: "oklch(0.28 0.04 20)",
  primary: "oklch(0.4 0.1 20)",
  primaryForeground: "oklch(0.98 0.01 80)",
  secondary: "oklch(0.93 0.03 80)",
  secondaryForeground: "oklch(0.32 0.05 20)",
  muted: "oklch(0.94 0.02 80)",
  mutedForeground: "oklch(0.5 0.03 30)",
  accent: "oklch(0.55 0.12 20)",
  accentForeground: "oklch(0.98 0.01 80)",
  destructive: "oklch(0.577 0.245 27.325)",
  border: "oklch(0.88 0.03 70)",
  input: "oklch(0.88 0.03 70)",
  ring: "oklch(0.4 0.1 20)",
};

const elegantDark: ThemeTokens = {
  ...elegantLight,
  background: "oklch(0.2 0.02 20)",
  foreground: "oklch(0.96 0.015 80)",
  card: "oklch(0.25 0.025 20)",
  cardForeground: "oklch(0.96 0.015 80)",
  popover: "oklch(0.25 0.025 20)",
  popoverForeground: "oklch(0.96 0.015 80)",
  primary: "oklch(0.78 0.08 70)",
  primaryForeground: "oklch(0.22 0.03 20)",
  secondary: "oklch(0.3 0.03 20)",
  secondaryForeground: "oklch(0.96 0.015 80)",
  muted: "oklch(0.3 0.03 20)",
  mutedForeground: "oklch(0.75 0.03 70)",
  accent: "oklch(0.7 0.1 20)",
  accentForeground: "oklch(0.18 0.02 20)",
  destructive: "oklch(0.704 0.191 22.216)",
  border: "oklch(1 0 0 / 12%)",
  input: "oklch(1 0 0 / 16%)",
  ring: "oklch(0.78 0.08 70)",
};

export const themePresets: ThemePreset[] = [
  {
    id: "classic",
    namePl: "Klasyczny",
    nameEn: "Classic",
    heroLayout: "split",
    density: "comfortable",
    light: classicLight,
    dark: classicDark,
  },
  {
    id: "modern",
    namePl: "Nowoczesny",
    nameEn: "Modern",
    heroLayout: "fullscreen",
    density: "compact",
    light: modernLight,
    dark: modernDark,
  },
  {
    id: "elegant",
    namePl: "Elegancki",
    nameEn: "Elegant",
    heroLayout: "editorial",
    density: "airy",
    light: elegantLight,
    dark: elegantDark,
  },
];

export const defaultPresetId: ThemePresetId = "classic";

export function getPreset(id: ThemePresetId): ThemePreset {
  return themePresets.find((preset) => preset.id === id) ?? themePresets[0];
}

export function densityClass(density: SectionDensity): string {
  if (density === "compact") return "py-12 md:py-16";
  if (density === "airy") return "py-24 md:py-32";
  return "py-16 md:py-24";
}
