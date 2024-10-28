import StoryblokClient from "storyblok-js-client";
import { ENV } from "@/lib/env";

export const Storyblok = new StoryblokClient({
  accessToken: ENV.STORYBLOK_ACCESS_TOKEN,
});
