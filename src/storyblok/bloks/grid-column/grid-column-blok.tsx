import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/storyblok/bloks";
import { BC, StoryblokEditable } from "@/lib/storyblok";

export type GridColumnBlokProps = ISbComponentType<BLOK.GRID> & {
  body: Array<ISbComponentType<BLOK>>;
};

export const GridColumnBlok: BC<GridColumnBlokProps> = ({
  blok: { body, ...blok },
  StoryblokComponent,
}) => {
  return (
    <StoryblokEditable blok={blok} as={"div"}>
      {body.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </StoryblokEditable>
  );
};
