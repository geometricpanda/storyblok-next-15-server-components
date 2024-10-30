import type { NextRequest, NextResponse } from "next/server";

export interface RouteHandlerConfig {
  accessToken: string;
}

export interface RouteHandlerParams {
  params: Promise<{
    storyblok: Array<string>;
  }>;
}

export enum ROUTES {
  DRAFT_MODE_ENABLE = "draft-mode/enable",
}

export type StoryblokRouteHandler = (
  config: RouteHandlerConfig,
) => (req: NextRequest, params: RouteHandlerParams) => Promise<NextResponse>;
