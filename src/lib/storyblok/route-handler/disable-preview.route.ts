import { NextResponse } from "next/server";
import { StoryblokRouteHandler } from "./interface";
import { disableDraftMode } from "../utils";

export const disablePreviewRoute: StoryblokRouteHandler =
  () =>
  async ({ nextUrl }) => {
    const redirectToParam = nextUrl.searchParams.get("redirectTo") || "/";

    const redirectTo = new URL(redirectToParam);

    await disableDraftMode();
    return NextResponse.redirect(redirectTo);
  };
