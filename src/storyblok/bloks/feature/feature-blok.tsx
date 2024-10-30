import { ISbComponentType } from "storyblok-js-client";
import { StoryblokEditable, ISbAsset, BC } from "@/lib/storyblok";
import { BLOK } from "@/storyblok/bloks";
import { StoryblokImage } from "@/lib/storyblok/image";

import styles from "./feature-blok.module.css";
import clsx from "clsx";

export type FeatureBlokProps = ISbComponentType<BLOK.FEATURE> & {
  name: string;
  image?: ISbAsset;
  alt?: boolean;
};

export const FeatureBlok: BC<FeatureBlokProps> = ({
  blok: { name, alt, image, ...blok },
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <div
        className={clsx({
          [styles["feature"]]: true,
          [styles["feature--alt"]]: alt,
        })}
      >
        <div className={styles["feature__image"]}>
          <StoryblokImage className={styles["feature__img"]} src={image} />
        </div>
        <div className={styles["feature__body"]}>{name}</div>
      </div>
    </StoryblokEditable>
  );
};
