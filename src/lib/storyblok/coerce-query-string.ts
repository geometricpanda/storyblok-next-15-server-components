export const coerceQueryString = (
  param?: string | Array<string>,
): string | undefined => {
  if (!param) {
    return undefined;
  }

  if (Array.isArray(param)) {
    return param[0];
  }

  return param;
};
