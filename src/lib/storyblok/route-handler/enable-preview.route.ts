import { NextResponse } from "next/server";
import { StoryblokRouteHandler } from "./interface";
import {
  hasStoryblokPreviewParams,
  validateStoryblokPreviewParams,
  enableDraftMode,
} from "../utils";

export const enablePreviewRoute: StoryblokRouteHandler =
  ({ accessToken }) =>
  async ({ nextUrl }) => {
    const redirectToParam = nextUrl.searchParams.get("redirectTo");

    if (!redirectToParam) {
      return NextResponse.json(
        { error: "Missing redirectTo query parameter" },
        { status: 400 },
      );
    }

    const redirectTo = new URL(redirectToParam);

    const hasPreviewParams = hasStoryblokPreviewParams(redirectTo.searchParams);
    const hasValidPreviewParams = validateStoryblokPreviewParams(
      accessToken,
      redirectTo.searchParams,
    );

    if (!hasPreviewParams || !hasValidPreviewParams) {
      return NextResponse.json(
        { error: "Invalid preview query parameters" },
        { status: 401 },
      );
    }

    await enableDraftMode();
    return NextResponse.redirect(redirectTo);
  };
