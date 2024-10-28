import { ISbComponentType } from "storyblok-js-client";
import { BlokProps, StoryblokEditable } from "@/lib/storyblok";
import { BLOK } from "@/lib/bloks/components";
import { FC } from "react";

export interface TeaserBlokProps extends ISbComponentType<BLOK.TEASER> {
  headline: string;
}

export const TeaserBlok: FC<BlokProps<TeaserBlokProps>> = ({
  blok: { headline, ...blok },
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <h1>{headline}</h1>
    </StoryblokEditable>
  );
};
