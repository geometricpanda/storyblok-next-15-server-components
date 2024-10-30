import { debug } from "./debug";
import { STORYBLOK_PARAM } from "../route-handler";

export const hasStoryblokPreviewParams = (
  searchParams: URLSearchParams,
): boolean => {
  const log = debug.extend("has-preview-params");

  const _spaceId = searchParams.get(STORYBLOK_PARAM.STORYBLOK_SPACE_ID);
  const _timestamp = searchParams.get(STORYBLOK_PARAM.STORYBLOK_TIMESTAMP);
  const _token = searchParams.get(STORYBLOK_PARAM.STORYBLOK_TOKEN);

  const hasParams = Boolean(_spaceId && _timestamp && _token);
  log("minimum parameters: %s", hasParams ? "present" : "missing");
  return hasParams;
};
