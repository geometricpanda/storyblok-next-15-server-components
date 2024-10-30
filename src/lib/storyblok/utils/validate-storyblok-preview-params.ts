import sha1 from "sha1";
import { coerceQueryString } from "./coerce-query-string";
import { debug } from "../debug";
import { STORYBLOK_PARAM } from "../route-handler";

export const validateStoryblokPreviewParams = (
  accessToken: string,
  searchParams: URLSearchParams,
) => {
  const log = debug.extend("validate-preview-params");

  const _spaceId = searchParams.get(STORYBLOK_PARAM.STORYBLOK_SPACE_ID);
  const _timestamp = searchParams.get(STORYBLOK_PARAM.STORYBLOK_TIMESTAMP);
  const _token = searchParams.get(STORYBLOK_PARAM.STORYBLOK_TOKEN);

  const spaceId = coerceQueryString(_spaceId);
  const timestamp = coerceQueryString(_timestamp);
  const token = coerceQueryString(_token);

  const validationString = [spaceId, accessToken, timestamp].join(":");
  const validationToken = sha1(validationString);

  const valid = token === validationToken;

  if (!valid) {
    log(
      "validation result: mismatch. Expected %s, matched %s",
      token,
      validationToken,
    );
    return false;
  }

  log("validation result: match");
  return true;
};
