import { Radius } from "../interface";

export const coerceRadius = (radius: Radius) => {
  if (radius === Radius.DEFAULT) {
    return undefined;
  }

  return radius;
};
