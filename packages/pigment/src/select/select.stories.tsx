import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button } from "../button";
import { InfoCircleIcon } from "../icons";
import { Select } from "./select";
import { SelectProps } from "./select.props";

type Story = StoryObj<SelectProps<any, any>>;

export default {
  title: "Select",
  argTypes: {
    variant: {
      options: ["soft", "outlined"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
    hasErrorIcon: {
      control: { type: "boolean" },
    },
    isInvalid: {
      control: { type: "boolean" },
    },
    isRequired: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    disallowEmptySelection: {
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
    error: {
      control: { type: "text" },
    },
  },
  render: props => <Select {...props} />,
} as Meta<ComponentProps<typeof Select>>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    allowEmptySelection: false,
    placeholder: "Select a fruit",
    label: "Fruit",
    description: "Choose wisely.",
    error: "Please select a fruit.",
    options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
  },
};

export const WithObject: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    allowEmptySelection: false,
    placeholder: "Select a fruit",
    label: "Fruit",
    description: "Choose wisely.",
    error: "Please select a fruit.",
    options: [
      { value: "apple", label: "Apple", disabled: false },
      { value: "banana", label: "Banana", disabled: false },
      { value: "blueberry", label: "Blueberry", disabled: false },
      { value: "grapes", label: "Grapes", disabled: true },
      { value: "pineapple", label: "Pineapple", disabled: false },
    ],
  },
};

export const WithOptionGroup: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    allowEmptySelection: false,
    placeholder: "Select a food",
    label: "Food",
    description: "Choose wisely.",
    error: "Please select a food.",
    options: [
      {
        label: "Fruits",
        options: [
          { value: "apple", label: "Apple", disabled: false },
          { value: "banana", label: "Banana", disabled: false },
          { value: "blueberry", label: "Blueberry", disabled: false },
          { value: "grapes", label: "Grapes", disabled: true },
          { value: "pineapple", label: "Pineapple", disabled: false },
        ],
      },
      {
        label: "Meat",
        options: [
          { value: "beef", label: "Beef", disabled: false },
          { value: "chicken", label: "Chicken", disabled: false },
          { value: "lamb", label: "Lamb", disabled: false },
          { value: "pork", label: "Pork", disabled: false },
        ],
      },
    ],
  },
};

export const WithDecorator: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    allowEmptySelection: false,
    placeholder: "Select a fruit",
    label: "Fruit",
    description: "Choose wisely.",
    error: "Please select a fruit.",
    options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
    startDecorator: () => <span class="mx-2">http://</span>,
    endDecorator: () => (
      <Button size="sm" variant="solid" color="neutral" class="rounded-l-none z-10 ml-2">
        Search
      </Button>
    ),
  },
};

export const WithIconAndDecorator: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    allowEmptySelection: false,
    placeholder: "Select a fruit",
    label: "Fruit",
    description: "Choose wisely.",
    error: "Please select a fruit.",
    options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
    startIcon: () => <InfoCircleIcon />,
    endIcon: () => <InfoCircleIcon />,
    startDecorator: () => <span class="ml-2">http://</span>,
    endDecorator: () => (
      <Button size="sm" variant="solid" color="neutral" class="rounded-l-none z-10">
        Search
      </Button>
    ),
  },
};
