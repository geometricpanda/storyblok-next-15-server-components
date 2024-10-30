import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/storyblok/bloks";
import { BC, StoryblokEditable } from "@/lib/storyblok";

import styles from "./grid-blok.module.css";

export type GridBlokProps = ISbComponentType<BLOK.GRID> & {
  columns: Array<ISbComponentType<BLOK>>;
};

export const GridBlok: BC<GridBlokProps> = ({
  blok: { columns, ...blok },
  StoryblokComponent,
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <div className={styles["grid"]}>
        {columns.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </StoryblokEditable>
  );
};
