import { routeHandler } from "@/lib/storyblok";
import { ENV } from "@/lib/env";

export const { GET } = routeHandler({
  accessToken: ENV.STORYBLOK_ACCESS_TOKEN,
});
