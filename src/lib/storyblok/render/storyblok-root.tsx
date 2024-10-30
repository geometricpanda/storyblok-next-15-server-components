import { FC } from "react";
import {
  BlokComponents,
  BlokContext,
  StoryblokComponentProps,
} from "../interface";

export interface StoryblokRootProps extends BlokContext {
  components: BlokComponents;
}

export const StoryblokRoot: FC<StoryblokRootProps> = ({
  components,
  ...context
}) => {
  const StoryblokComponent: FC<StoryblokComponentProps> = ({ blok }) => {
    if (!blok.component) {
      return null;
    }

    const Component = components[blok.component];

    if (!Component) {
      return <p>Component &apos;{blok.component}&apos; not Found</p>;
    }

    return (
      <Component
        blok={blok}
        context={context}
        StoryblokComponent={StoryblokComponent}
      />
    );
  };

  return <StoryblokComponent blok={context.story.content} />;
};
