import sha1 from "sha1";
import { coerceQueryString } from "./coerce-query-string";
import { debug } from "../debug";

export const validateStoryblokPreviewParams = (
  accessToken: string,
  searchParams: URLSearchParams,
) => {
  const log = debug.extend("validate-preview-params");

  const _spaceId = searchParams.get("_storyblok_tk[space_id]");
  const _timestamp = searchParams.get("_storyblok_tk[timestamp]");
  const _token = searchParams.get("_storyblok_tk[token]");

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
