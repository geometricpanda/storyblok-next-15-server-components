"use client";

import { FC, ReactNode, useState, useLayoutEffect, useCallback } from "react";
import { StoryblokBridgeConfigV2 } from "@storyblok/js";
import { ISbStoryData } from "storyblok-js-client";
import {
  useStoryblokBridge as withStoryblokBridge,
  storyblokInit,
} from "@storyblok/js";

import { BlokContext, RenderAction } from "../interface";

storyblokInit({ accessToken: "secret" });

export interface StoryblokPreviewProps extends BlokContext {
  renderAction: RenderAction;
  defaultRender: ReactNode;
  bridgeConfig?: StoryblokBridgeConfigV2;
}

export const StoryblokPreview: FC<StoryblokPreviewProps> = ({
  defaultRender,
  bridgeConfig,
  renderAction,
  ...context
}) => {
  const [render, setRender] = useState<ReactNode>(defaultRender);

  const updatePreview = useCallback(
    async (story: ISbStoryData) => {
      const preview = await renderAction({ ...context, story });
      setRender(preview);
    },
    [context, renderAction],
  );

  useLayoutEffect(() => {
    withStoryblokBridge(context.story.id, updatePreview, bridgeConfig);
  }, [bridgeConfig, context.story, updatePreview]);

  return render;
};
