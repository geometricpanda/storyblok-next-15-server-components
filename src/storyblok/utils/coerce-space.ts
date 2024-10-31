import { Size, Space } from "../interface";

export const coerceSpace = (size: Size): Space => {
  return +size as Space;
};
