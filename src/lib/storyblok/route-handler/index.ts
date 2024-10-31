import { routerGet } from "./router";
import { StoryblokConfig } from "../interface";

export const routeHandler = (context: StoryblokConfig) => ({
  GET: routerGet(context),
});

export * from "./interface";
