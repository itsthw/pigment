import { Button as KButton, COMMON_INTL_MESSAGES, createMessageFormatter } from "@kobalte/core";
import { createMemo, JSX, splitProps } from "solid-js";

import { TablerX } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { CloseButtonProps, CloseButtonSlots } from "./close-button.props";
import { closeButtonStyles } from "./close-button.styles";

const closeButtonStaticClass = makeStaticClass<CloseButtonSlots>("close-button");

export function CloseButton(props: CloseButtonProps) {
  props = mergeThemeProps(
    "CloseButton",
    {
      size: "md",
      inheritTextColor: false,
      onSubtleBackground: false,
      children: (() => <TablerX />) as unknown as JSX.Element,
    },
    props
  );

  const themeClasses = useThemeClasses<CloseButtonSlots>("CloseButton", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "slotClasses", "aria-label"],
    ["size", "inheritTextColor", "onSubtleBackground"]
  );

  const styles = createMemo(() => {
    return closeButtonStyles({
      ...variantProps,
      class: [
        closeButtonStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class,
      ],
    });
  });

  const messageFormatter = createMessageFormatter(() => COMMON_INTL_MESSAGES);

  return (
    <KButton.Root
      class={styles()}
      aria-label={local["aria-label"] || messageFormatter().format("dismiss")}
      {...others}
    />
  );
}
