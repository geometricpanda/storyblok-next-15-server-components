export const coerceQueryParam = (
  release?: string | Array<string>,
): string | undefined => {
  if (!release) {
    return undefined;
  }

  if (Array.isArray(release)) {
    return release[0];
  }

  return release;
};
