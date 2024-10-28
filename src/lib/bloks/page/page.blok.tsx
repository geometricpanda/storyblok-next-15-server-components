import { FC } from "react";
import { BlokProps, StoryblokEditable } from "@/lib/storyblok";
import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/lib/bloks/components";

export interface PageBlokProps extends ISbComponentType<BLOK.PAGE> {
  body: Array<ISbComponentType<BLOK>>;
}

export const PageBlok: FC<BlokProps<PageBlokProps>> = ({
  blok: { body, ...blok },
  StoryblokComponent,
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <div>
        {body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </StoryblokEditable>
  );
};
