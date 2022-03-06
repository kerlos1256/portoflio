import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    palette: {
      lightCyan: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    palette?: {
      lightCyan?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
