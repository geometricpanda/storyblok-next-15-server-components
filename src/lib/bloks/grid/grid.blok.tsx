import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/lib/bloks/components";
import { BlokProps, StoryblokEditable } from "@/lib/storyblok";
import { FC } from "react";

export interface GridBlokProps extends ISbComponentType<BLOK.GRID> {
  columns: Array<ISbComponentType<BLOK>>;
}

export const GridBlok: FC<BlokProps<GridBlokProps>> = ({
  blok: { columns, ...blok },
  StoryblokComponent,
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <div>
        {columns.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </StoryblokEditable>
  );
};
