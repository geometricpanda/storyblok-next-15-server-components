export const coerceQueryNumber = (
  param?: string | Array<string>,
): number | undefined => {
  if (!param) {
    return undefined;
  }

  if (Array.isArray(param)) {
    return +param[0];
  }

  return +param;
};
