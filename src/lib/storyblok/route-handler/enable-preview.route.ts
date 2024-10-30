import { NextResponse } from "next/server";
import { StoryblokRouteHandler } from "./interface";
import {
  hasStoryblokPreviewParams,
  validateStoryblokPreviewParams,
  enableDraftMode,
} from "../utils";

export const enablePreviewRoute: StoryblokRouteHandler =
  (config) =>
  async ({ nextUrl: { origin, searchParams } }) => {
    const hasValidParams = hasStoryblokPreviewParams(searchParams);
    if (!hasValidParams) {
      return NextResponse.json(
        { error: "Missing preview query parameters" },
        { status: 401 },
      );
    }

    const validateParams = validateStoryblokPreviewParams(
      config.accessToken,
      searchParams,
    );

    if (!validateParams) {
      return NextResponse.json(
        { error: "Invalid preview query parameters" },
        { status: 403 },
      );
    }

    const redirectToParam = searchParams.get("redirectTo") || "/";

    await enableDraftMode();

    const redirectTo = new URL(redirectToParam, origin);
    for (const [key, value] of searchParams.entries()) {
      redirectTo.searchParams.set(key, value);
    }

    redirectTo.searchParams.delete("redirectTo");
    return NextResponse.redirect(redirectTo);
  };
