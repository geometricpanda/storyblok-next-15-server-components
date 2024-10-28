import { FC } from "react";
import { draftMode } from "next/headers";
import { BlokContext, RenderAction } from "./interface";
import { StoryblokDraftMode } from "./storyblok-draft-mode";
import { StoryblokPreview } from "./storyblok-preview";

export interface StoryblokRenderProps extends BlokContext {
  renderAction: RenderAction;
}

export const StoryblokRender: FC<StoryblokRenderProps> = async ({
  renderAction,
  ...context
}) => {
  const { isEnabled } = await draftMode();

  const render = renderAction(context);

  if (context.version === "draft" && isEnabled) {
    return (
      <StoryblokPreview
        renderAction={renderAction}
        defaultRender={render}
        {...context}
      />
    );
  }

  return (
    <>
      {context.version === "draft" && !isEnabled && (
        <StoryblokDraftMode searchParams={context.searchParams} />
      )}
      {render}
    </>
  );
};
