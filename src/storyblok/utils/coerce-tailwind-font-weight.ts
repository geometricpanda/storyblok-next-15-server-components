import clsx from "clsx";
import { FontWeight } from "@/storyblok/interface";

export const coerceTailwindFontWeight = (weight: FontWeight) => {
  return clsx({
    "font-thin": weight === FontWeight.THIN,
    "font-extralight": weight === FontWeight.EXTRALIGHT,
    "font-light": weight === FontWeight.LIGHT,
    "font-normal": weight === FontWeight.NORMAL,
    "font-medium": weight === FontWeight.MEDIUM,
    "font-semibold": weight === FontWeight.SEMIBOLD,
    "font-bold": weight === FontWeight.BOLD,
    "font-extrabold": weight === FontWeight.EXTRABOLD,
    "font-black": weight === FontWeight.BLACK,
  });
};
