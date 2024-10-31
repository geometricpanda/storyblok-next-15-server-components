export interface StoryblokImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export type StoryblokImageLoaderType = (
  props: StoryblokImageLoaderProps,
) => string;

export const StoryblokImageLoader: StoryblokImageLoaderType = ({
  src,
  width,
  quality = 75,
}) => {
  return `${src}/m/${width}x0/filters:quality(${quality})`;
};

export default StoryblokImageLoader;
