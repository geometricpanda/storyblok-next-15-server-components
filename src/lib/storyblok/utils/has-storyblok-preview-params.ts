import { debug } from "@/lib/storyblok/debug";

export const hasStoryblokPreviewParams = (
  searchParams: URLSearchParams,
): boolean => {
  const log = debug.extend("has-preview-params");

  const _spaceId = searchParams.get("_storyblok_tk[space_id]");
  const _timestamp = searchParams.get("_storyblok_tk[timestamp]");
  const _token = searchParams.get("_storyblok_tk[token]");

  const hasParams = Boolean(_spaceId && _timestamp && _token);
  log("minimum parameters: %s", hasParams ? "present" : "missing");
  return hasParams;
};
