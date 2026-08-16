import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultPresetId,
  getPreset,
  type ThemePreset,
  type ThemePresetId,
  type ThemeTokens,
} from "@/config/theme";

const PRESET_KEY = "theme-preset";
const MODE_KEY = "color-mode";

type ColorMode = "light" | "dark";

type ThemeContextValue = {
  preset: ThemePreset;
  presetId: ThemePresetId;
  setPresetId: (id: ThemePresetId) => void;
  mode: ColorMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readPresetId(): ThemePresetId {
  try {
    const stored = localStorage.getItem(PRESET_KEY);
    if (stored === "classic" || stored === "modern" || stored === "elegant") {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return defaultPresetId;
}

function readMode(): ColorMode {
  try {
    const stored = localStorage.getItem(MODE_KEY);
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* ignore */
  }
  return "light";
}

function applyTokens(tokens: ThemeTokens, mode: ColorMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "dark");
  root.style.setProperty("--radius", tokens.radius);
  root.style.setProperty("--font-heading-stack", tokens.headingFont);
  root.style.setProperty("--font-body", tokens.bodyFont);
  root.style.setProperty("--background", tokens.background);
  root.style.setProperty("--foreground", tokens.foreground);
  root.style.setProperty("--card", tokens.card);
  root.style.setProperty("--card-foreground", tokens.cardForeground);
  root.style.setProperty("--popover", tokens.popover);
  root.style.setProperty("--popover-foreground", tokens.popoverForeground);
  root.style.setProperty("--primary", tokens.primary);
  root.style.setProperty("--primary-foreground", tokens.primaryForeground);
  root.style.setProperty("--secondary", tokens.secondary);
  root.style.setProperty("--secondary-foreground", tokens.secondaryForeground);
  root.style.setProperty("--muted", tokens.muted);
  root.style.setProperty("--muted-foreground", tokens.mutedForeground);
  root.style.setProperty("--accent", tokens.accent);
  root.style.setProperty("--accent-foreground", tokens.accentForeground);
  root.style.setProperty("--destructive", tokens.destructive);
  root.style.setProperty("--border", tokens.border);
  root.style.setProperty("--input", tokens.input);
  root.style.setProperty("--ring", tokens.ring);

  let link = document.getElementById("theme-fonts") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.id = "theme-fonts";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.href = tokens.googleFontsHref;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [presetId, setPresetIdState] = useState<ThemePresetId>(readPresetId);
  const [mode, setMode] = useState<ColorMode>(readMode);
  const preset = useMemo(() => getPreset(presetId), [presetId]);

  useEffect(() => {
    const tokens = mode === "dark" ? preset.dark : preset.light;
    applyTokens(tokens, mode);
    try {
      localStorage.setItem(PRESET_KEY, presetId);
      localStorage.setItem(MODE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [preset, presetId, mode]);

  const setPresetId = useCallback((id: ThemePresetId) => {
    setPresetIdState(id);
  }, []);

  const toggleMode = useCallback(() => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ preset, presetId, setPresetId, mode, toggleMode }),
    [preset, presetId, setPresetId, mode, toggleMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
