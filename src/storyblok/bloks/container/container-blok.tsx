import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/storyblok/bloks";
import { BC, StoryblokEditable } from "@/lib/storyblok";

import styles from "./container-blok.module.css";
import clsx from "clsx";

export type ContainerBlokProps = ISbComponentType<BLOK.CONTAINER> & {
  body: Array<ISbComponentType<string>>;
  layout: "standard" | "narrow" | "wide";
};

export const ContainerBlok: BC<ContainerBlokProps> = ({
  blok: { body, layout, ...blok },
  StoryblokComponent,
}) => {
  return (
    <div
      className={clsx(
        {
          [styles["container"]]: true,
          [styles["container--narrow"]]: layout === "narrow",
          [styles["container--standard"]]: layout === "standard",
          [styles["container--wide"]]: layout === "wide",
        },
        "lg:px-4",
      )}
    >
      <div className={styles["container__grid"]}>
        <StoryblokEditable blok={blok}>
          <div className={styles["container__columns"]}>
            {body.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        </StoryblokEditable>
      </div>
    </div>
  );
};
