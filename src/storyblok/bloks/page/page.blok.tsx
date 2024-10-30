import { BC, StoryblokEditable } from "@/lib/storyblok";
import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/storyblok/bloks";

export type PageBlokProps = ISbComponentType<BLOK.PAGE> & {
  body: Array<ISbComponentType<BLOK>>;
};

export const PageBlok: BC<PageBlokProps> = ({
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
