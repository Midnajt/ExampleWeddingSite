export type HeroLayout = "fullscreen" | "split" | "editorial";
export type SectionDensity = "comfortable" | "compact" | "airy";
export type ThemePresetId = "boho";

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

const bohoLight: ThemeTokens = {
  radius: "0.75rem",
  headingFont: '"Cormorant Garamond", serif',
  bodyFont: '"Nunito Sans", sans-serif',
  googleFontsHref:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Nunito+Sans:wght@400;500;600;700&display=swap",
  background: "#F9F4EC",
  foreground: "#4A3F30",
  card: "#FFFCF7",
  cardForeground: "#4A3F30",
  popover: "#FFFCF7",
  popoverForeground: "#4A3F30",
  primary: "#9E5A30",
  primaryForeground: "#FFFCF7",
  secondary: "#EFE4D2",
  secondaryForeground: "#4A3F30",
  muted: "#F1E6D4",
  mutedForeground: "#7A6A55",
  accent: "#5E6551",
  accentForeground: "#FFFCF7",
  destructive: "#9B3D2E",
  border: "#E4D8C4",
  input: "#E4D8C4",
  ring: "#9E5A30",
};

const bohoDark: ThemeTokens = { ...bohoLight };

export const themePresets: ThemePreset[] = [
  {
    id: "boho",
    namePl: "Boho",
    nameEn: "Boho",
    heroLayout: "fullscreen",
    density: "airy",
    light: bohoLight,
    dark: bohoDark,
  },
];

export const defaultPresetId: ThemePresetId = "boho";

export function getPreset(id: ThemePresetId): ThemePreset {
  return themePresets.find((preset) => preset.id === id) ?? themePresets[0];
}

export function densityClass(density: SectionDensity): string {
  if (density === "compact") return "py-12 md:py-16";
  if (density === "airy") return "py-24 md:py-32";
  return "py-16 md:py-24";
}
