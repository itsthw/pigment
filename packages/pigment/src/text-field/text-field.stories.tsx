import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { TablerAlertCircleIcon, TablerAlertTriangleIcon } from "../icon";
import { TextField } from "./text-field";
import { TextFieldProps } from "./text-field.props";
import { I18nProvider } from "@kobalte/core";

type Story = StoryObj<TextFieldProps>;

export default {
  title: "TextField",
  argTypes: {
    size: {
      options: ["md"],
      control: { type: "select" },
    },
    invalid: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    multiline: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
  },
  render: props => <TextField class="w-full max-w-xs" {...props} />,
} as Meta<ComponentProps<typeof TextField>>;

export const Default: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    errorMessage: "Please enter a valid email address.",
  },
};

export const WithIcon: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    errorMessage: "Please enter a valid email address.",
    leadingIcon: () => <TablerAlertCircleIcon />,
    trailingIcon: () => <TablerAlertTriangleIcon />,
  },
};
