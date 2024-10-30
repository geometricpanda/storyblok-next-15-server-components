"use server";

import React from "react";
import { components } from "@/storyblok/bloks";
import { RenderAction, StoryblokRoot } from "@/lib/storyblok";

export const renderAction: RenderAction = async ({ story, ...context }) => (
  <StoryblokRoot story={story} components={components} {...context} />
);
