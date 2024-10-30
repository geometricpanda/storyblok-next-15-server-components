import { FC } from "react";
import { draftMode } from "next/headers";
import { StoryblokBridgeConfigV2 } from "@storyblok/js";

import { BlokContext, RenderAction } from "../interface";
import { StoryblokPreview } from "../preview";

export interface StoryblokRenderProps extends BlokContext {
  renderAction: RenderAction;
  bridgeConfig?: StoryblokBridgeConfigV2;
}

export const StoryblokRender: FC<StoryblokRenderProps> = async ({
  renderAction,
  bridgeConfig,
  ...context
}) => {
  const draft = await draftMode();
  const render = renderAction(context);

  if (draft.isEnabled) {
    return (
      <StoryblokPreview
        renderAction={renderAction}
        defaultRender={render}
        bridgeConfig={bridgeConfig}
        {...context}
      />
    );
  }

  return render;
};
