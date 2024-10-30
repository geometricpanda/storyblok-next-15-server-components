import { FC } from "react";
import { BlokContext, RenderAction } from "../interface";
import { StoryblokPreview } from "../preview";
import { draftMode } from "next/headers";

export interface StoryblokRenderProps extends BlokContext {
  renderAction: RenderAction;
}

export const StoryblokRender: FC<StoryblokRenderProps> = async ({
  renderAction,
  ...context
}) => {
  const draft = await draftMode();
  const render = renderAction(context);

  if (draft.isEnabled) {
    return (
      <StoryblokPreview
        renderAction={renderAction}
        defaultRender={render}
        {...context}
      />
    );
  }

  return <>{render}</>;
};
