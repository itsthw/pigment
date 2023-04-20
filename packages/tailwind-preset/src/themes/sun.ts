import twDefaultTheme from "tailwindcss/defaultTheme";

import { PIGMENT_COLORS } from "../colors";
import { ThemeTokens, VarsFn } from "../types";

export function getSunThemeTokens(vars: VarsFn): ThemeTokens {
  return {
    common: {
      typography: {
        fontFamily: {
          fallback: twDefaultTheme.fontFamily.sans.join(", "),
          body: vars("typography.fontFamily.fallback"),
          display: vars("typography.fontFamily.body"),
          code: twDefaultTheme.fontFamily.mono.join(", "),
        },
      },
    },
    light: {
      colors: {
        neutral: {
          ...PIGMENT_COLORS.sand,
        },
        primary: {
          ...PIGMENT_COLORS.orange,
        },
        success: {
          ...PIGMENT_COLORS.green,
        },
        info: {
          ...PIGMENT_COLORS.blue,
        },
        warning: {
          ...PIGMENT_COLORS.yellow,
        },
        danger: {
          ...PIGMENT_COLORS.red,
        },

        ring: vars("colors.primary.500"),
        line: vars("colors.neutral.300"),
        tooltip: vars("colors.neutral.900"),
        backdrop: vars("colors.neutral.950"),

        content: {
          DEFAULT: vars("colors.neutral.900"),
          subtle: vars("colors.neutral.700"),
          subtler: vars("colors.neutral.600"),
          subtlest: vars("colors.neutral.500"),
          inverse: PIGMENT_COLORS.white,
          warningInverse: PIGMENT_COLORS.sand["900"],
          primary: vars("colors.primary.600"),
          success: vars("colors.success.600"),
          info: vars("colors.info.600"),
          warning: vars("colors.warning.800"),
          danger: vars("colors.danger.600"),
        },

        surface: {
          DEFAULT: PIGMENT_COLORS.white,
          body: PIGMENT_COLORS.white,
          raised: PIGMENT_COLORS.white,
          overlay: PIGMENT_COLORS.white,
        },

        solid: {
          neutral: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.neutral.800"),
            surfaceHover: vars("colors.neutral.900"),
            surfaceActive: vars("colors.neutral.900"),
          },
          primary: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.primary.600"),
            surfaceHover: vars("colors.primary.700"),
            surfaceActive: vars("colors.primary.700"),
          },
          success: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.success.600"),
            surfaceHover: vars("colors.success.700"),
            surfaceActive: vars("colors.success.700"),
          },
          info: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.info.600"),
            surfaceHover: vars("colors.info.700"),
            surfaceActive: vars("colors.info.700"),
          },
          warning: {
            content: vars("colors.content.warningInverse"),
            surface: vars("colors.warning.400"),
            surfaceHover: vars("colors.warning.500"),
            surfaceActive: vars("colors.warning.500"),
          },
          danger: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.danger.600"),
            surfaceHover: vars("colors.danger.700"),
            surfaceActive: vars("colors.danger.700"),
          },
        },

        soft: {
          neutral: {
            content: vars("colors.neutral.900"),
            surface: vars("colors.neutral.100"),
            surfaceHover: vars("colors.neutral.200"),
            surfaceActive: vars("colors.neutral.200"),
          },
          primary: {
            content: vars("colors.primary.900"),
            surface: vars("colors.primary.100"),
            surfaceHover: vars("colors.primary.200"),
            surfaceActive: vars("colors.primary.200"),
          },
          success: {
            content: vars("colors.success.900"),
            surface: vars("colors.success.100"),
            surfaceHover: vars("colors.success.200"),
            surfaceActive: vars("colors.success.200"),
          },
          info: {
            content: vars("colors.info.900"),
            surface: vars("colors.info.100"),
            surfaceHover: vars("colors.info.200"),
            surfaceActive: vars("colors.info.200"),
          },
          warning: {
            content: vars("colors.warning.900"),
            surface: vars("colors.warning.100"),
            surfaceHover: vars("colors.warning.200"),
            surfaceActive: vars("colors.warning.200"),
          },
          danger: {
            content: vars("colors.danger.900"),
            surface: vars("colors.danger.100"),
            surfaceHover: vars("colors.danger.200"),
            surfaceActive: vars("colors.danger.200"),
          },
        },

        outlined: {
          neutral: {
            content: vars("colors.neutral.900"),
            line: vars("colors.neutral.600"),
            surfaceHover: vars("colors.neutral.50"),
            lineHover: vars("colors.neutral.600"),
            surfaceActive: vars("colors.neutral.50"),
            lineActive: vars("colors.neutral.600"),
          },
          primary: {
            content: vars("colors.primary.700"),
            line: vars("colors.primary.600"),
            surfaceHover: vars("colors.primary.50"),
            lineHover: vars("colors.primary.600"),
            surfaceActive: vars("colors.primary.50"),
            lineActive: vars("colors.primary.600"),
          },
          success: {
            content: vars("colors.success.700"),
            line: vars("colors.success.600"),
            surfaceHover: vars("colors.success.50"),
            lineHover: vars("colors.success.600"),
            surfaceActive: vars("colors.success.50"),
            lineActive: vars("colors.success.600"),
          },
          info: {
            content: vars("colors.info.700"),
            line: vars("colors.info.600"),
            surfaceHover: vars("colors.info.50"),
            lineHover: vars("colors.info.600"),
            surfaceActive: vars("colors.info.50"),
            lineActive: vars("colors.info.600"),
          },
          warning: {
            content: vars("colors.warning.700"),
            line: vars("colors.warning.600"),
            surfaceHover: vars("colors.warning.50"),
            lineHover: vars("colors.warning.600"),
            surfaceActive: vars("colors.warning.50"),
            lineActive: vars("colors.warning.600"),
          },
          danger: {
            content: vars("colors.danger.700"),
            line: vars("colors.danger.600"),
            surfaceHover: vars("colors.danger.50"),
            lineHover: vars("colors.danger.600"),
            surfaceActive: vars("colors.danger.50"),
            lineActive: vars("colors.danger.600"),
          },
        },

        ghost: {
          neutral: {
            content: vars("colors.neutral.900"),
            surfaceHover: vars("colors.neutral.50"),
            surfaceActive: vars("colors.neutral.50"),
          },
          primary: {
            content: vars("colors.primary.700"),
            surfaceHover: vars("colors.primary.50"),
            surfaceActive: vars("colors.primary.50"),
          },
          success: {
            content: vars("colors.success.700"),
            surfaceHover: vars("colors.success.50"),
            surfaceActive: vars("colors.success.50"),
          },
          info: {
            content: vars("colors.info.700"),
            surfaceHover: vars("colors.info.50"),
            surfaceActive: vars("colors.info.50"),
          },
          warning: {
            content: vars("colors.warning.700"),
            surfaceHover: vars("colors.warning.50"),
            surfaceActive: vars("colors.warning.50"),
          },
          danger: {
            content: vars("colors.danger.700"),
            surfaceHover: vars("colors.danger.50"),
            surfaceActive: vars("colors.danger.50"),
          },
        },

        input: {
          filled: {
            content: vars("colors.neutral.900"),
            surface: vars("colors.neutral.200"),
            line: vars("colors.neutral.200"),
            surfaceHover: vars("colors.neutral.200"),
            lineHover: vars("colors.neutral.200"),
            surfaceActive: vars("colors.neutral.200"),
            lineActive: vars("colors.neutral.200"),
          },
          outlined: {
            content: vars("colors.neutral.900"),
            line: vars("colors.neutral.300"),
            lineHover: vars("colors.neutral.300"),
            lineActive: vars("colors.neutral.300"),
          },
        },
      },
      shadows: {
        raised: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        overlay: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
    },
    dark: {
      colors: {},
      shadows: {
        raised:
          "0px 0px 0px rgba(0, 0, 0, 0),0px 1px 1px rgba(3, 4, 4, 0.5),0px 0px 1px rgba(3, 4, 4, 0.5)",
        overlay:
          "0px 0px 0px rgba(188, 214, 240, 0.04),0px 8px 12px rgba(3, 4, 4, 0.36),0px 0px 1px rgba(3, 4, 4, 0.5)",
      },
    },
  };
}
