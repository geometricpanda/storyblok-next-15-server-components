import { storyblokMiddleware } from "@/lib/storyblok/middleware";
import { ENV } from "@/lib/env";

export const middleware = storyblokMiddleware({
  accessToken: ENV.STORYBLOK_ACCESS_TOKEN,
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
