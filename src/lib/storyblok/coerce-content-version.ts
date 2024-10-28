export const coerceContentVersion = (
  version?: string | Array<string>,
): number | undefined => {
  if (!version) {
    return undefined;
  }

  if (Array.isArray(version)) {
    return +version[0];
  }

  return +version;
};
