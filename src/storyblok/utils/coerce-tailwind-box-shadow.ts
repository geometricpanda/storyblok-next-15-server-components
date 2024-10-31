import clsx from "clsx";
import { BoxShadow, Color } from "../interface";

export const coerceTailwindBoxShadow = (shadow?: BoxShadow) => {
  if (!shadow) {
    return undefined;
  }

  return clsx({
    shadow: shadow === BoxShadow.DEFAULT,
    "shadow-sm": shadow === BoxShadow.SM,
    "shadow-md": shadow === BoxShadow.MD,
    "shadow-lg": shadow === BoxShadow.LG,
    "shadow-xl": shadow === BoxShadow.XL,
    "shadow-2xl": shadow === BoxShadow.XL2,
    "shadow-inner": shadow === BoxShadow.INNER,
    "shadow-none": shadow === BoxShadow.NONE,
  });
};

export const coerceTailwindBoxShadowColor = (
  color?: Color,
  fallback?: Color,
) => {
  if (!color && !fallback) {
    return undefined;
  }

  if (color === fallback) {
    return undefined;
  }

  const target = color || fallback;

  return clsx({
    "shadow-transparent": target === Color.TRANSPARENT,
    "shadow-background": target === Color.BACKGROUND,
    "shadow-foreground": target === Color.FOREGROUND,
    "shadow-divider": target === Color.DIVIDER,
    "shadow-focus": target === Color.FOCUS,
    "shadow-content1": target === Color.CONTENT1,
    "shadow-content2": target === Color.CONTENT2,
    "shadow-content3": target === Color.CONTENT3,
    "shadow-content4": target === Color.CONTENT4,
    "shadow-default": target === Color.DEFAULT,
    "shadow-primary": target === Color.DEFAULT_PRIMARY,
    "shadow-secondary": target === Color.DEFAULT_SECONDARY,
    "shadow-success": target === Color.DEFAULT_SUCCESS,
    "shadow-warning": target === Color.DEFAULT_WARNING,
    "shadow-danger": target === Color.DEFAULT_DANGER,
    "shadow-primary-50": target === Color.PRIMARY_50,
    "shadow-primary-100": target === Color.PRIMARY_100,
    "shadow-primary-200": target === Color.PRIMARY_200,
    "shadow-primary-300": target === Color.PRIMARY_300,
    "shadow-primary-400": target === Color.PRIMARY_400,
    "shadow-primary-500": target === Color.PRIMARY_500,
    "shadow-primary-600": target === Color.PRIMARY_600,
    "shadow-primary-700": target === Color.PRIMARY_700,
    "shadow-primary-800": target === Color.PRIMARY_800,
    "shadow-primary-900": target === Color.PRIMARY_900,
    "shadow-secondary-50": target === Color.SECONDARY_50,
    "shadow-secondary-100": target === Color.SECONDARY_100,
    "shadow-secondary-200": target === Color.SECONDARY_200,
    "shadow-secondary-300": target === Color.SECONDARY_300,
    "shadow-secondary-400": target === Color.SECONDARY_400,
    "shadow-secondary-500": target === Color.SECONDARY_500,
    "shadow-secondary-600": target === Color.SECONDARY_600,
    "shadow-secondary-700": target === Color.SECONDARY_700,
    "shadow-secondary-800": target === Color.SECONDARY_800,
    "shadow-secondary-900": target === Color.SECONDARY_900,
    "shadow-success-50": target === Color.SUCCESS_50,
    "shadow-success-100": target === Color.SUCCESS_100,
    "shadow-success-200": target === Color.SUCCESS_200,
    "shadow-success-300": target === Color.SUCCESS_300,
    "shadow-success-400": target === Color.SUCCESS_400,
    "shadow-success-500": target === Color.SUCCESS_500,
    "shadow-success-600": target === Color.SUCCESS_600,
    "shadow-success-700": target === Color.SUCCESS_700,
    "shadow-success-800": target === Color.SUCCESS_800,
    "shadow-success-900": target === Color.SUCCESS_900,
    "shadow-warning-50": target === Color.WARNING_50,
    "shadow-warning-100": target === Color.WARNING_100,
    "shadow-warning-200": target === Color.WARNING_200,
    "shadow-warning-300": target === Color.WARNING_300,
    "shadow-warning-400": target === Color.WARNING_400,
    "shadow-warning-500": target === Color.WARNING_500,
    "shadow-warning-600": target === Color.WARNING_600,
    "shadow-warning-700": target === Color.WARNING_700,
    "shadow-warning-800": target === Color.WARNING_800,
    "shadow-warning-900": target === Color.WARNING_900,
    "shadow-danger-50": target === Color.DANGER_50,
    "shadow-danger-100": target === Color.DANGER_100,
    "shadow-danger-200": target === Color.DANGER_200,
    "shadow-danger-300": target === Color.DANGER_300,
    "shadow-danger-400": target === Color.DANGER_400,
    "shadow-danger-500": target === Color.DANGER_500,
    "shadow-danger-600": target === Color.DANGER_600,
    "shadow-danger-700": target === Color.DANGER_700,
    "shadow-danger-800": target === Color.DANGER_800,
    "shadow-danger-900": target === Color.DANGER_900,
  });
};
