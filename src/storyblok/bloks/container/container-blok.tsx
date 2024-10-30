import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/storyblok/bloks";
import { BC, StoryblokEditable } from "@/lib/storyblok";

import styles from "./container-blok.module.css";
import clsx from "clsx";

export type ContainerBlokProps = ISbComponentType<BLOK.CONTAINER> & {
  body: Array<ISbComponentType<string>>;
  layout: "standard" | "narrow";
  alt: boolean;
};

export const ContainerBlok: BC<ContainerBlokProps> = ({
  blok: { body, layout, alt, ...blok },
  StoryblokComponent,
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <div
        className={clsx({
          [styles["container"]]: true,
          [styles["container--narrow"]]: layout === "narrow",
          [styles["container--alt"]]: alt,
        })}
      >
        <div className={styles["container__grid"]}>
          <div className={styles["container__columns"]}>
            {body.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        </div>
      </div>
    </StoryblokEditable>
  );
};
