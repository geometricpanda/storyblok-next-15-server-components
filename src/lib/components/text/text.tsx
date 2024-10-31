import { FC, ReactNode } from "react";

import clsx from "clsx";
import {
  Color,
  FontFamily,
  FontWeight,
  TextAlign,
  TextSize,
} from "@/storyblok/interface";
import {
  coerceTailwindFontWeight,
  coerceTailwindTextColor,
  coerceTailwindTextAlign,
  coerceTailwindTextSize,
  coerceTailwindFontFamily,
} from "@/storyblok/utils";

export interface TextProps {
  as?: string;
  className?: string;
  children: ReactNode;
  color: Color;
  family?: FontFamily;
  variation?: "not-italic" | "italic";
  smoothing?: "antialiased" | "subpixel-antialiased";
  transform?: "uppercase" | "lowercase" | "capitalize" | "normal";
  align?: TextAlign;
  weight?: FontWeight;
  size?: TextSize;
}

export const Text: FC<TextProps> = ({
  as = "p",
  children,
  family = FontFamily.SANS,
  weight = FontWeight.NORMAL,
  align = TextAlign.Left,
  size = TextSize.MD,
  smoothing = "subpixel-antialiased",
  variation,
  transform,
  className,
  color,
  ...props
}) => {
  const Component = as as keyof JSX.IntrinsicElements;

  const textSizeClassName = coerceTailwindTextSize(size);
  const textAlignClassName = coerceTailwindTextAlign(align);
  const colorClassName = coerceTailwindTextColor(color);
  const fontWeightClassName = coerceTailwindFontWeight(weight);
  const fontFamilyClassName = coerceTailwindFontFamily(family);

  return (
    <Component
      className={clsx(
        colorClassName,
        textSizeClassName,
        textAlignClassName,
        fontWeightClassName,
        fontFamilyClassName,
        {
          italic: variation === "italic",
          "not-italic": variation === "not-italic",
          antialiased: smoothing === "antialiased",
          "subpixel-antialiased": smoothing === "subpixel-antialiased",
          "normal-case": transform === "normal",
          uppercase: transform === "uppercase",
          lowercase: transform === "lowercase",
          capitalize: transform === "capitalize",
          "text-pretty": true,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
