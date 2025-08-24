// theme/helpers.ts
import type { DefaultTheme } from "styled-components";

// Pega todas as chaves de palette que tenham "main", "light", etc.
type PaletteKeys = {
  [K in keyof DefaultTheme["palette"]]: DefaultTheme["palette"][K] extends object
    ? keyof DefaultTheme["palette"][K]
    : never;
};

// Transforma em "primary.main" | "primary.light" | etc
type PaletteColorPaths = {
  [K in keyof PaletteKeys]: PaletteKeys[K] extends string
    ? `${K & string}.${PaletteKeys[K]}`
    : never;
}[keyof PaletteKeys];

// Junta customColors + palette
type ColorKeys = keyof DefaultTheme["customColors"] | PaletteColorPaths;

export const color = (key: ColorKeys) =>
  ({ theme }: { theme: DefaultTheme }) => {
    if (key.includes(".")) {
      // Ex: "primary.main"
      const [section, shade] = key.split(".") as [keyof DefaultTheme["palette"], string];
      const paletteSection = theme.palette[section];
      if (paletteSection && typeof paletteSection === "object" && shade in paletteSection) {
        return (paletteSection as any)[shade];
      }
    }
    return theme.customColors[key as keyof DefaultTheme["customColors"]];
  };
