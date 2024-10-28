import { ENV } from "@/lib/env";
import crypto from "node:crypto";
import { coerceQueryString } from "@/lib/storyblok/coerce-query-string";

export const validateStoryblokSession = (
  searchParams: Record<string, string | Array<string>>,
) => {
  const spaceId = coerceQueryString(searchParams["_storyblok_tk[space_id]"]);
  const timestamp = coerceQueryString(searchParams["_storyblok_tk[timestamp]"]);
  const token = coerceQueryString(searchParams["_storyblok_tk[token]"]);

  const validationString = [
    spaceId,
    ENV.STORYBLOK_ACCESS_TOKEN,
    timestamp,
  ].join(":");

  const validationToken = crypto
    .createHash("sha1")
    .update(validationString)
    .digest("hex");

  return token == validationToken;
};
