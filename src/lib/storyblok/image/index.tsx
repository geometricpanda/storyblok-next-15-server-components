import Image, { ImageProps } from "next/image";
import { FC } from "react";
import clsx from "clsx";

import { ISbAsset } from "../interface";
import { FallbackImage } from "./fallback-image";
import { coerceImage } from "./coerce-image";

import styles from "./image.module.css";

export interface StoryblokImageProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  src?: ISbAsset;
}

export const StoryblokImage: FC<StoryblokImageProps> = ({
  src,
  className,
  ...props
}) => {
  const imgProps = coerceImage(src);

  if (!imgProps) {
    return <FallbackImage />;
  }
  return (
    <Image
      className={clsx(styles["image"], className)}
      {...imgProps}
      {...props}
    />
  );
};
