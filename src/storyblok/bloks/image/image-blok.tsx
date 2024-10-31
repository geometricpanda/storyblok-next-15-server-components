import { ISbComponentType } from "storyblok-js-client";

import { BC, coerceImage, ISbAsset, StoryblokEditable } from "@/lib/storyblok";
import { Color, Radius, Shadow } from "../../interface";
import { coerceRadius, coerceShadow } from "@/storyblok/utils";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Text } from "@/lib/components/text";

export type ImageBlokProps = ISbComponentType<string> & {
  image?: ISbAsset;
  radius: Radius;
  shadow: Shadow;
  loading: "eager" | "lazy";
  is_zoomed: boolean;
  is_blurred: boolean;
  disable_skeleton: boolean;
};
export const ImageBlok: BC<ImageBlokProps> = ({
  blok: {
    image,
    radius,
    shadow,
    loading,
    is_blurred,
    is_zoomed,
    disable_skeleton,
    ...blok
  },
}) => {
  const img = coerceImage(image);

  if (!img) {
    return (
      <StoryblokEditable blok={blok}>
        <Text color={Color.DANGER_50}>Could not find</Text>
      </StoryblokEditable>
    );
  }

  const { src, alt, title, height, width, unoptimized } = img;

  return (
    <StoryblokEditable blok={blok}>
      <Image
        as={NextImage}
        src={src}
        alt={alt}
        title={title}
        width={width}
        height={height}
        radius={coerceRadius(radius)}
        shadow={coerceShadow(shadow)}
        unoptimized={unoptimized}
        loading={loading}
        isBlurred={is_blurred}
        isZoomed={is_zoomed}
        disableSkeleton={disable_skeleton}
        style={{ height: "auto" }}
      />
    </StoryblokEditable>
  );
};
