import clsx from "clsx";
import { TextSize } from "../interface";

export const coerceTailwindTextSize = (size: TextSize): string => {
  return clsx({
    "text-xs": size === TextSize.XS,
    "text-sm": size === TextSize.SM,
    "text-base": size === TextSize.MD,
    "text-lg": size === TextSize.LG,
    "text-xl": size === TextSize.XL,
    "text-2xl": size === TextSize.XL2,
    "text-3xl": size === TextSize.XL3,
    "text-4xl": size === TextSize.XL4,
    "text-5xl": size === TextSize.XL5,
    "text-6xl": size === TextSize.XL6,
    "text-7xl": size === TextSize.XL7,
    "text-8xl": size === TextSize.XL8,
    "text-9xl": size === TextSize.XL9,
  });
};
