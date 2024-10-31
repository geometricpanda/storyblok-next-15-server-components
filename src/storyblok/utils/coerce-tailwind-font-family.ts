import clsx from "clsx";
import { FontFamily } from "@/storyblok/interface";

export const coerceTailwindFontFamily = (family: FontFamily) => {
  return clsx({
    "font-sans": family === FontFamily.SANS,
    "font-serif": family === FontFamily.SERIF,
    "font-mono": family === FontFamily.MONO,
  });
};
