import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";
import {
  validateStoryblokPreviewParams,
  hasStoryblokPreviewParams,
} from "../utils";
import { MiddlewareConfig } from "./interface";
import { debug } from "../debug";
import { ROUTES } from "@/lib/storyblok/route-handler/interface";

export const storyblokMiddleware =
  ({ accessToken, ..._config }: MiddlewareConfig) =>
  async (req: NextRequest) => {
    const log = debug.extend("middleware");

    const config = {
      basePath: "/storyblok",
      ..._config,
    };

    log("initialised with config", config);

    const { nextUrl } = req;
    const { origin, pathname, searchParams } = nextUrl;

    const { isEnabled } = await draftMode();
    log("draft mode: %s", isEnabled ? "enabled" : "disabled");

    if (isEnabled) {
      log("draft mode is enabled, skipping middleware");
      return NextResponse.next();
    }

    const hasPreviewParams = hasStoryblokPreviewParams(searchParams);

    log("has preview params: %s", hasPreviewParams);

    if (!hasPreviewParams) {
      return NextResponse.next();
    }

    const isValid = validateStoryblokPreviewParams(accessToken, searchParams);

    if (!isValid) {
      log("storyblok session is invalid");

      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "Invalid Storyblok session",
        },
        { status: 401, statusText: "Unauthorized" },
      );
    }

    const isRouteHandler = pathname.startsWith(config.basePath);

    if (isRouteHandler) {
      log("request to storyblok route handler, skipping middleware");
      return NextResponse.next();
    }

    const redirectTo = new URL(
      `${config.basePath}/${ROUTES.DRAFT_MODE_ENABLE}`,
      origin,
    );

    redirectTo.searchParams.set("redirectTo", pathname);

    for (const [key, value] of searchParams.entries()) {
      redirectTo.searchParams.set(key, value);
    }

    log("redirecting to storyblok route handler", {
      origin: redirectTo.origin,
      pathname: redirectTo.pathname,
      searchParams: Object.fromEntries(redirectTo.searchParams.entries()),
    });

    return NextResponse.redirect(redirectTo);
  };
