import { Shadow } from "../interface";

export const coerceShadow = (shadow: Shadow) => {
  if (shadow === Shadow.DEFAULT) {
    return undefined;
  }

  return shadow;
};
