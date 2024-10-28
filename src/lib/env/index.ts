import "server-only";

const { STORYBLOK_ACCESS_TOKEN } = process.env;

if (!STORYBLOK_ACCESS_TOKEN) {
  throw new Error("STORYBLOK_ACCESS_TOKEN is missing");
}

export const ENV = {
  STORYBLOK_ACCESS_TOKEN: STORYBLOK_ACCESS_TOKEN,
};
