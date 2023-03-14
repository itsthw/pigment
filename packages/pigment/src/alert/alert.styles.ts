import { cva, VariantProps } from "class-variance-authority";

export const alertVariants = cva(["flex space-x-1.5 py-3 border border-solid rounded-md text-sm"], {
  variants: {
    variant: {
      solid: "",
      soft: "",
    },
    status: {
      success: "",
      info: "",
      warning: "",
      danger: "",
      help: "",
    },
    hasIcon: {
      true: "pl-2",
      false: "pl-4",
    },
    isDismissible: {
      true: "pr-2",
      false: "pr-4",
    },
    isSingleLine: {
      true: "items-center",
      false: "items-start",
    },
  },
  compoundVariants: [
    // solid + colors
    {
      variant: "solid",
      status: "success",
      class: "text-solid-success-text bg-solid-success-bg border-solid-success-border",
    },
    {
      variant: "solid",
      status: "info",
      class: "text-solid-info-text bg-solid-info-bg border-solid-info-border",
    },
    {
      variant: "solid",
      status: "warning",
      class: "text-solid-warning-text bg-solid-warning-bg border-solid-warning-border",
    },
    {
      variant: "solid",
      status: "danger",
      class: "text-solid-danger-text bg-solid-danger-bg border-solid-danger-border",
    },
    {
      variant: "solid",
      status: "help",
      class: ["text-solid-help-text bg-solid-help-bg border-solid-help-border"],
    },

    // soft + colors
    {
      variant: "soft",
      status: "success",
      class: "text-soft-success-text bg-soft-success-bg border-soft-success-border",
    },
    {
      variant: "soft",
      status: "info",
      class: "text-soft-info-text bg-soft-info-bg border-soft-info-border",
    },
    {
      variant: "soft",
      status: "warning",
      class: "text-soft-warning-text bg-soft-warning-bg border-soft-warning-border",
    },
    {
      variant: "soft",
      status: "danger",
      class: "text-soft-danger-text bg-soft-danger-bg border-soft-danger-border",
    },
    {
      variant: "soft",
      status: "help",
      class: "text-soft-help-text bg-soft-help-bg border-soft-help-border",
    },
  ],
  defaultVariants: {
    variant: "soft",
    status: "info",
    hasIcon: true,
    isDismissible: false,
    isSingleLine: false,
  },
});

export const alertContentVariants = cva("flex grow", {
  variants: {
    isSingleLine: {
      true: "items-center space-x-2",
      false: "flex-col space-y-1 py-1",
    },
  },
  defaultVariants: {
    isSingleLine: false,
  },
});

export const alertIconVariants = cva(
  "flex justify-center items-center shrink-0 reset-svg h-7 w-7 text-xl leading-none",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
      },
      status: {
        success: "",
        info: "",
        warning: "",
        danger: "",
        help: "",
      },
    },
    compoundVariants: [
      // solid + colors
      { variant: "solid", status: "success", class: "text-solid-success-icon" },
      { variant: "solid", status: "info", class: "text-solid-info-icon" },
      { variant: "solid", status: "warning", class: "text-solid-warning-icon" },
      { variant: "solid", status: "danger", class: "text-solid-danger-icon" },
      { variant: "solid", status: "help", class: ["text-solid-help-icon"] },

      // soft + colors
      { variant: "soft", status: "success", class: "text-soft-success-icon" },
      { variant: "soft", status: "info", class: "text-soft-info-icon" },
      { variant: "soft", status: "warning", class: "text-soft-warning-icon" },
      { variant: "soft", status: "danger", class: "text-soft-danger-icon" },
      { variant: "soft", status: "help", class: "text-soft-help-icon" },
    ],
    defaultVariants: {
      variant: "soft",
      status: "info",
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
