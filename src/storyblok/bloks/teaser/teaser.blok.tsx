import { ISbComponentType } from "storyblok-js-client";
import { BC, StoryblokEditable } from "@/lib/storyblok";
import { BLOK } from "@/storyblok/bloks";

export type TeaserBlokProps = ISbComponentType<BLOK.TEASER> & {
  headline: string;
};

export const TeaserBlok: BC<TeaserBlokProps> = ({
  blok: { headline, ...blok },
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <h1>{headline}</h1>
    </StoryblokEditable>
  );
};
