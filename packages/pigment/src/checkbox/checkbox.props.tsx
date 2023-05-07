import { Checkbox as KCheckbox } from "@kobalte/core";
import { JSX, Ref } from "solid-js";

import { SlotProp } from "../utils/slot";
import { CheckboxVariants } from "./checkbox.styles";

export type CheckboxSlots =
  | "root"
  | "control"
  | "indicator"
  | "labelWrapper"
  | "label"
  | "description"
  | "error"
  | "errorIndicator";

export interface CheckboxProps
  extends Omit<KCheckbox.CheckboxRootProps, "ref" | "validationState">,
    CheckboxVariants,
    SlotProp<CheckboxSlots> {
  /** A ref to the inner `<input>` element. */
  ref?: Ref<HTMLInputElement>;

  /** Additional props to be spread on the inner `<input>` element. */
  inputProps?: KCheckbox.CheckboxInputProps;

  /** Whether the checkbox is invalid regarding the validation rules. */
  invalid?: boolean;

  /** The label that gives the user information on the checkbox. */
  label?: JSX.Element | (() => JSX.Element);

  /** The description that gives the user more information on the checkbox. */
  description?: JSX.Element | (() => JSX.Element);

  /** The error message that gives the user information about how to fix a validation error on the checkbox. */
  error?: JSX.Element | (() => JSX.Element);

  /** The icon to show next to the error message. */
  errorIndicator?: JSX.Element | (() => JSX.Element);

  /** The icon to show when the checkbox is in a checked state. */
  checkedIndicator?: JSX.Element | (() => JSX.Element);

  /** The icon to show when the checkbox is in an indeterminate state. */
  indeterminateIndicator?: JSX.Element | (() => JSX.Element);
}
