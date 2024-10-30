import type { NextRequest, NextResponse } from "next/server";
import type { StoryblokConfig } from "../interface";

export interface RouteHandlerParams {
  params: Promise<{
    storyblok: Array<string>;
  }>;
}

export type StoryblokRouteHandler = (
  config: StoryblokConfig,
) => (req: NextRequest, params: RouteHandlerParams) => Promise<NextResponse>;

export enum STORYBLOK_PARAM {
  STORYBLOK = "_storyblok",
  STORYBLOK_C = "_storyblok_c",
  STORYBLOK_VERSION = "_storyblok_version",
  STORYBLOK_RELEASE = "_storyblok_release",
  STORYBLOK_LANG = "_storyblok_lang",
  STORYBLOK_CV = "_storyblok_rl",
  STORYBLOK_SPACE_ID = "_storyblok_tk[space_id]",
  STORYBLOK_TIMESTAMP = "_storyblok_tk[timestamp]",
  STORYBLOK_TOKEN = "_storyblok_tk[token]",
}

export enum ROUTES {
  DRAFT_MODE_ENABLE = "draft-mode/enable",
  DRAFT_MODE_DISABLE = "draft-mode/disable",
}
