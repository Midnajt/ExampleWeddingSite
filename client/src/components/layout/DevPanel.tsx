import { useTranslation } from "react-i18next";
import { themePresets } from "@/config/theme";
import { useTheme } from "@/lib/theme-provider";
import { isDevPanelEnabled } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DevPanel() {
  const { t, i18n } = useTranslation();
  const { presetId, setPresetId } = useTheme();

  if (!isDevPanelEnabled()) return null;

  return (
    <div className="bg-primary text-primary-foreground border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2 sm:px-6">
        <span className="mr-2 text-xs font-medium tracking-wide uppercase">
          {t("theme.dev")}
        </span>
        {themePresets.map((preset) => (
          <Button
            key={preset.id}
            size="sm"
            variant={presetId === preset.id ? "secondary" : "outline"}
            className={
              presetId === preset.id
                ? ""
                : "border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            }
            onClick={() => setPresetId(preset.id)}
          >
            {i18n.language === "en" ? preset.nameEn : preset.namePl}
          </Button>
        ))}
      </div>
    </div>
  );
}
