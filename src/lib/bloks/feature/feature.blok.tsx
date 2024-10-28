import { FC } from "react";
import { BlokProps, StoryblokEditable } from "@/lib/storyblok";
import { BLOK } from "@/lib/bloks/components";
import { ISbComponentType } from "storyblok-js-client";

export interface FeatureBlokProps extends ISbComponentType<BLOK.FEATURE> {
  name: string;
}

export const FeatureBlok: FC<BlokProps<FeatureBlokProps>> = ({
  blok: { name, ...blok },
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <div>
        <h1>{name}</h1>
      </div>
    </StoryblokEditable>
  );
};
