import { tv, VariantProps } from "tailwind-variants";

export const alertStyles = tv({
  slots: {
    root: "flex items-center p-3 rounded-md border border-solid text-base",
    leadingSection: "display-inherit flex-none me-2.5",
    trailingSection: "display-inherit flex-none ms-auto",
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
    },
    status: {
      success: {},
      info: {},
      warning: {},
      danger: {},
      discovery: {},
    },
  },
  compoundVariants: [
    // variant solid + status
    {
      variant: "solid",
      status: "success",
      class: {
        root: "text-content-on-success bg-surface-success border-surface-success",
      },
    },
    {
      variant: "solid",
      status: "info",
      class: {
        root: "text-content-on-info bg-surface-info border-surface-info",
      },
    },
    {
      variant: "solid",
      status: "warning",
      class: {
        root: "text-content-on-warning bg-surface-warning border-surface-warning",
      },
    },
    {
      variant: "solid",
      status: "danger",
      class: {
        root: "text-content-on-danger bg-surface-danger border-surface-danger",
      },
    },
    {
      variant: "solid",
      status: "discovery",
      class: {
        root: "text-content-on-discovery bg-surface-discovery border-surface-discovery",
      },
    },

    // variant soft + status
    {
      variant: "soft",
      status: "success",
      class: {
        root: "text-content-on-success-subtle bg-surface-success-subtle border-surface-success-subtle",
      },
    },
    {
      variant: "soft",
      status: "info",
      class: {
        root: "text-content-on-info-subtle bg-surface-info-subtle border-surface-info-subtle",
      },
    },
    {
      variant: "soft",
      status: "warning",
      class: {
        root: "text-content-on-warning-subtle bg-surface-warning-subtle border-surface-warning-subtle",
      },
    },
    {
      variant: "soft",
      status: "danger",
      class: {
        root: "text-content-on-danger-subtle bg-surface-danger-subtle border-surface-danger-subtle",
      },
    },
    {
      variant: "soft",
      status: "discovery",
      class: {
        root: "text-content-on-discovery-subtle bg-surface-discovery-subtle border-surface-discovery-subtle",
      },
    },
  ],
});

export type AlertVariants = VariantProps<typeof alertStyles>;
