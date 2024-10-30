import { ISbAsset } from "@/lib/storyblok";

const regex = /\/(\d+)x(\d+)\/[^/]+\/[^/]+\.(\w+)$/;

export interface CoercedImage {
  alt: string;
  src: string;
  unoptimized: boolean;
  height: number;
  width: number;
  title?: string;
}

export const coerceImage = (image?: ISbAsset): CoercedImage | undefined => {
  if (!image || !image.filename) {
    return undefined;
  }

  const match = image.filename.match(regex)!;

  if (!match) {
    return undefined;
  }

  const width = +match[1];
  const height = +match[2];
  const unoptimized = match[3] === "svg";

  return {
    alt: image.alt || "",
    src: image.filename,
    title: image.title ? image.title : undefined,
    width,
    height,
    unoptimized,
  };
};
