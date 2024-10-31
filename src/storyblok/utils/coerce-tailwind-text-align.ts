import clsx from "clsx";
import { TextAlign } from "@/storyblok/interface";

export const coerceTailwindTextAlign = (align: TextAlign): string => {
  return clsx({
    "text-left": align === TextAlign.Left,
    "text-center": align === TextAlign.Center,
    "text-right": align === TextAlign.Right,
    "text-justify": align === TextAlign.Justify,
    "text-start": align === TextAlign.Start,
    "text-end": align === TextAlign.End,
  });
};
