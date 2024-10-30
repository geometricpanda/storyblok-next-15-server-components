import { routerGet } from "./router";
import { StoryblokConfig } from "../init-storyblok";

export const routeHandler = (context: StoryblokConfig) => ({
  GET: routerGet(context),
});

export * from "./interface";
