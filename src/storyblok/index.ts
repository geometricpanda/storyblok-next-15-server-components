import { initStoryblok } from "@/lib/storyblok";
import { ENV } from "@/env";
import StoryblokClient from "storyblok-js-client";

export const Storyblok = new StoryblokClient({
  accessToken: ENV.STORYBLOK_ACCESS_TOKEN,
});

export const { routeHandler, middleware } = initStoryblok({
  client: Storyblok,
});
