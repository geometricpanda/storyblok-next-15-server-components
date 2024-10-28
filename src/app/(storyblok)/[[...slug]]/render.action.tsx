"use server";

import { RenderAction, StoryblokRoot } from "@/lib/storyblok";
import { Components } from "@/lib/bloks/components";

export const renderAction: RenderAction = async ({ story, ...context }) => (
  <StoryblokRoot story={story} components={Components} {...context} />
);
