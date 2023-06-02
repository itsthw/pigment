import { tv, VariantProps } from "tailwind-variants";

export const checkboxStyles = tv({
  slots: {
    root: "group inline-flex flex-col items-start",
    input: "peer",
    control: [
      "inline-flex justify-center items-center grow-0 shrink-0 border border-solid transition-colors",
      "ui-not-disabled:text-content-on-primary",
      "bg-surface ui-not-invalid:border-line",
      "ui-not-disabled:group-hover/action:bg-surface-neutral-subtle",
      "ui-disabled:border-line-disabled ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
      "peer-focus-visible:outline peer-focus-visible:outline-ring peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2",

      // checked
      "ui-not-disabled:ui-checked:bg-surface-primary ui-not-disabled:group-hover/action:ui-checked:bg-surface-primary-hover ui-not-disabled:group-active/action:ui-checked:bg-surface-primary-active",
      "ui-not-disabled:ui-checked:border-surface-primary ui-not-disabled:group-hover/action:ui-checked:border-surface-primary-hover ui-not-disabled:group-active/action:ui-checked:border-surface-primary-active",
      "ui-disabled:ui-checked:bg-surface-disabled",
      // indeterminate
      "ui-not-disabled:ui-indeterminate:bg-surface-primary ui-not-disabled:group-hover/action:ui-indeterminate:bg-surface-primary-hover ui-not-disabled:group-active/action:ui-indeterminate:bg-surface-primary-active",
      "ui-not-disabled:ui-indeterminate:border-surface-primary ui-not-disabled:group-hover/action:ui-indeterminate:border-surface-primary-hover ui-not-disabled:group-active/action:ui-indeterminate:border-surface-primary-active",
      "ui-disabled:ui-indeterminate:bg-surface-disabled",

      // invalid
      "ui-not-disabled:ui-invalid:text-content-on-danger",
      "ui-not-disabled:ui-invalid:border-surface-danger",
      // invalid checked
      "ui-not-disabled:ui-invalid:ui-checked:bg-surface-danger ui-not-disabled:ui-invalid:group-hover/action:ui-checked:bg-surface-danger-hover ui-not-disabled:ui-invalid:group-active/action:ui-checked:bg-surface-danger-active",
      "ui-not-disabled:ui-invalid:ui-checked:border-surface-danger ui-not-disabled:ui-invalid:group-hover/action:ui-checked:border-surface-danger-hover ui-not-disabled:ui-invalid:group-active/action:ui-checked:border-surface-danger-active",
      // invalid indeterminate
      "ui-not-disabled:ui-invalid:ui-indeterminate:bg-surface-danger ui-not-disabled:ui-invalid:group-hover/action:ui-indeterminate:bg-surface-danger-hover ui-not-disabled:ui-invalid:group-active/action:ui-indeterminate:bg-surface-danger-active",
      "ui-not-disabled:ui-invalid:ui-indeterminate:border-surface-danger ui-not-disabled:ui-invalid:group-hover/action:ui-indeterminate:border-surface-danger-hover ui-not-disabled:ui-invalid:group-active/action:ui-indeterminate:border-surface-danger-active",
    ],
    icon: "inline-flex justify-center items-center",
    actionWrapper: "flex items-center group/action",
    label: [
      "text-content",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    ],
    supportTextWrapper: "flex flex-col items-start grow shrink",
    supportText:
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    errorIcon: [
      "flex items-center text-icon-danger",
      "ui-disabled:text-icon-disabled ui-disabled:opacity-50",
    ],
  },
  variants: {
    size: {
      md: {
        root: "gap-y-0.5",
        control: "h-4 w-4 text-base rounded",
        label: "ps-2 text-sm",
        supportTextWrapper: "ps-6 gap-y-0.5",
        supportText: "text-sm",
        errorIcon: "text-xl",
      },
      lg: {
        root: "gap-y-1",
        control: "h-5 w-5 text-xl rounded",
        label: "ps-3 text-base",
        supportTextWrapper: "ps-8 gap-y-1",
        supportText: "text-base",
        errorIcon: "text-2xl",
      },
    },
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxStyles>;
