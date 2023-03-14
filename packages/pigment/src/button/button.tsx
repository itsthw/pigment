import { Button as KButton, Link as KLink, useLocale } from "@kobalte/core";
import { mergeDefaultProps } from "@kobalte/utils";
import { Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import {
  ButtonBaseContentProps,
  ButtonBaseIconProps,
  ButtonBaseProps,
  ButtonProps,
  ButtonSlots,
  IconButtonProps,
  LinkButtonBaseProps,
  LinkButtonProps,
  LinkButtonSlots,
  LinkIconButtonProps,
} from "./button.props";
import { buttonIconVariants, buttonVariants, loadingContentVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * ButtonBase
 * -----------------------------------------------------------------------------------------------*/

function ButtonBase(props: ButtonBaseProps) {
  props = mergeThemeProps(
    "Button",
    {
      variant: "solid",
      color: "primary",
      size: "sm",
      isIconOnly: false,
      isFullWidth: false,
      isDisabled: false,
      loadingIconPlacement: "start",
    },
    props
  );

  const themeClasses = useThemeClasses<ButtonSlots>("Button", props);

  const [local, variantProps, contentProps, loadingIconProps, loadingContentProps, others] =
    splitProps(
      props,
      ["class", "isLoading", "loadingText", "loadingIcon", "loadingIconPlacement"],
      ["variant", "color", "size", "isIconOnly", "isFullWidth", "isLoading", "isDisabled"],
      ["variant", "color", "size", "isDisabled", "startIcon", "endIcon", "children"],
      ["variant", "color", "size", "isIconOnly", "isDisabled"],
      ["size"]
    );

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  const isLoadingIconLeft = () => {
    if (isRtl()) {
      return local.loadingIconPlacement === "end";
    } else {
      return local.loadingIconPlacement === "start";
    }
  };

  const content = () => {
    return <ButtonBaseContent isRtl={isRtl()} {...contentProps} />;
  };

  return (
    <KButton.Root
      class={cn(buttonVariants(variantProps), themeClasses.root, local.class)}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <Show when={local.isLoading} fallback={content()}>
        <Show
          when={local.loadingText}
          fallback={
            <>
              <ButtonBaseLoadingIcon class="absolute" {...loadingIconProps} />
              <Show when={!variantProps.isIconOnly}>
                <span class={loadingContentVariants(loadingContentProps)}>{content()}</span>
              </Show>
            </>
          }
        >
          <Show
            when={isLoadingIconLeft()}
            fallback={
              <>
                {local.loadingText}
                <ButtonBaseLoadingIcon {...loadingIconProps} />
              </>
            }
          >
            <ButtonBaseLoadingIcon {...loadingIconProps} />
            {local.loadingText}
          </Show>
        </Show>
      </Show>
    </KButton.Root>
  );
}

function ButtonBaseContent(props: ButtonBaseContentProps) {
  const [iconProps] = splitProps(props, ["variant", "color", "size", "isDisabled"]);

  const leftIcon = () => {
    return props.isRtl ? props.endIcon : props.startIcon;
  };

  const rightIcon = () => {
    return props.isRtl ? props.startIcon : props.endIcon;
  };

  return (
    <>
      <Show when={leftIcon()}>
        <ButtonBaseIcon isIconOnly={false} {...iconProps}>
          {leftIcon()}
        </ButtonBaseIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonBaseIcon isIconOnly={false} {...iconProps}>
          {rightIcon()}
        </ButtonBaseIcon>
      </Show>
    </>
  );
}

function ButtonBaseIcon(props: ButtonBaseIconProps) {
  const [local, variantProps, others] = splitProps(
    props,
    ["class"],
    ["variant", "color", "size", "isIconOnly", "isDisabled"]
  );

  return (
    <span
      aria-hidden="true"
      class={cn(buttonIconVariants(variantProps), local.class)}
      {...others}
    />
  );
}

function ButtonBaseLoadingIcon(props: ButtonBaseIconProps) {
  props = mergeDefaultProps(
    {
      children: () => <LoaderIcon class="animate-spin" />,
    },
    props
  );

  return <ButtonBaseIcon {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export function Button(props: ButtonProps) {
  return <ButtonBase isIconOnly={false} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * IconButton
 * -----------------------------------------------------------------------------------------------*/

export function IconButton(props: IconButtonProps) {
  return <ButtonBase isIconOnly {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonBase
 * -----------------------------------------------------------------------------------------------*/

function LinkButtonBase(props: LinkButtonBaseProps) {
  props = mergeThemeProps(
    "LinkButton",
    {
      variant: "solid",
      color: "primary",
      size: "sm",
      isIconOnly: false,
      isFullWidth: false,
      isDisabled: false,
    },
    props
  );

  const themeClasses = useThemeClasses<LinkButtonSlots>("LinkButton", props);

  const [local, variantProps, contentProps, others] = splitProps(
    props,
    ["class"],
    ["variant", "color", "size", "isIconOnly", "isFullWidth", "isDisabled"],
    ["variant", "color", "size", "isDisabled", "startIcon", "endIcon", "children"]
  );

  const { direction } = useLocale();

  return (
    <KLink.Root
      class={cn(buttonVariants(variantProps), themeClasses.root, local.class)}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <ButtonBaseContent isRtl={direction() === "rtl"} {...contentProps} />
    </KLink.Root>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

export function LinkButton(props: LinkButtonProps) {
  return <LinkButtonBase isIconOnly={false} {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * LinkIconButton
 * -----------------------------------------------------------------------------------------------*/

export function LinkIconButton(props: LinkIconButtonProps) {
  return <LinkButtonBase isIconOnly {...props} />;
}
