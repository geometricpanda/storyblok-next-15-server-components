import { routeHandler } from "./route-handler";
import { middleware } from "./middleware";
import StoryblokClient from "storyblok-js-client";

export interface StoryblokConfig {
  accessToken: string;
  basePath: string;
}

export interface StoryblokOptions {
  basePath?: string;
  client: StoryblokClient;
}

export type InitStoryblok = (options: StoryblokOptions) => {
  routeHandler: ReturnType<typeof routeHandler>;
  middleware: ReturnType<typeof middleware>;
};

export const initStoryblok: InitStoryblok = ({
  basePath = "/storyblok",
  client,
}) => {
  const config = {
    accessToken: client["accessToken"],
    basePath,
  } satisfies StoryblokConfig;

  return {
    routeHandler: routeHandler(config),
    middleware: middleware(config),
  };
};
