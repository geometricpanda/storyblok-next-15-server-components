import { Breakpoint, Radius } from "../interface";
import clsx from "clsx";

export const coerceTailwindRadius = (
  radius: Radius,
  breakpoint?: Breakpoint,
) => {
  if (breakpoint === Breakpoint.MD) {
    return clsx({
      "md:rounded-none": radius === Radius.NONE,
      "md:rounded-sm": radius === Radius.SM,
      "md:rounded-md": radius === Radius.MD,
      "md:rounded-lg": radius === Radius.LG,
      "md:rounded": radius === Radius.DEFAULT,
    });
  }

  return clsx({
    "rounded-none": radius === Radius.NONE,
    "rounded-sm": radius === Radius.SM,
    "rounded-md": radius === Radius.MD,
    "rounded-lg": radius === Radius.LG,
    rounded: radius === Radius.DEFAULT,
  });
};
