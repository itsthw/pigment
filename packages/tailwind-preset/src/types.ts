export type FlattenObjectKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const themeTokensShapeValue = {
  colors: {
    content: {
      DEFAULT: "",
      subtle: "",
      subtler: "",
      subtlest: "",
      disabled: "",
      link: {
        DEFAULT: "",
        hover: "",
        active: "",
      },

      primary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
      discovery: "",

      onPrimary: "",
      onSuccess: "",
      onInfo: "",
      onWarning: "",
      onDanger: "",
      onDiscovery: "",

      onPrimarySubtle: "",
      onSuccessSubtle: "",
      onInfoSubtle: "",
      onWarningSubtle: "",
      onDangerSubtle: "",
      onDiscoverySubtle: "",
    },

    icon: {
      DEFAULT: "",
      subtle: "",
      subtler: "",
      subtlest: "",
      disabled: "",

      primary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
      discovery: "",

      onPrimary: "",
      onSuccess: "",
      onInfo: "",
      onWarning: "",
      onDanger: "",
      onDiscovery: "",

      onPrimarySubtle: "",
      onSuccessSubtle: "",
      onInfoSubtle: "",
      onWarningSubtle: "",
      onDangerSubtle: "",
      onDiscoverySubtle: "",
    },

    surface: {
      DEFAULT: "",
      body: "",
      raised: "",
      overlay: "",
      sunken: "",
      disabled: "",
      tooltip: "",

      neutral: {
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },

      primary: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      success: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      info: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      warning: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      danger: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
      discovery: {
        DEFAULT: "",
        hover: "",
        active: "",
        subtle: {
          DEFAULT: "",
          hover: "",
          active: "",
        },
      },
    },

    line: {
      DEFAULT: "",
      subtle: "",
      disabled: "",
      primary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
      discovery: "",
    },

    ring: "",
  },
};

export type ColorSchemeTokens = Pick<typeof themeTokensShapeValue, "colors">;

export interface ThemeTokens {
  /** Light mode specific tokens. */
  light: ColorSchemeTokens;

  /** Dark mode specific tokens. */
  dark: DeepPartial<ColorSchemeTokens>;
}

export type TokenKey = FlattenObjectKeys<ColorSchemeTokens>;

/** A function to get the css variable of a token. */
export type VarsFn = (token: TokenKey) => string;

export interface Theme {
  /** The name of the theme. */
  name: string;

  /** The design tokens of the theme. */
  tokens: ThemeTokens;
}

export interface PigmentOptions {
  /** The prefix to use in the generated css variables. */
  cssVarPrefix?: string;

  /** The themes available in the application. */
  themes?: Array<Theme>;
}
