import { NextResponse } from "next/server";
import { StoryblokRouteHandler } from "./interface";
import {
  hasStoryblokPreviewParams,
  validateStoryblokPreviewParams,
  enableDraftMode,
  disableDraftMode,
} from "../utils";

export const enablePreviewRoute: StoryblokRouteHandler =
  ({ accessToken }) =>
  async ({ nextUrl }) => {
    const redirectToParam = nextUrl.searchParams.get("redirectTo") || "/";
    const redirectTo = new URL(redirectToParam);

    const hasPreviewParams = hasStoryblokPreviewParams(redirectTo.searchParams);
    const hasValidPreviewParams = validateStoryblokPreviewParams(
      accessToken,
      redirectTo.searchParams,
    );

    if (!hasPreviewParams || !hasValidPreviewParams) {
      await disableDraftMode();
      const strippedRedirectTo = new URL(
        redirectTo.pathname,
        redirectTo.origin,
      );

      return NextResponse.redirect(strippedRedirectTo);
    }

    await enableDraftMode();
    return NextResponse.redirect(redirectTo);
  };
