import { ISbComponentType } from "storyblok-js-client";
import { BC, StoryblokEditable } from "@/lib/storyblok";
import { Text } from "@/lib/components/text";
import { BLOK } from "@/storyblok/bloks";
import {
  Color,
  FontFamily,
  FontWeight,
  TextAlign,
  TextSize,
} from "@/storyblok/interface";

export type TextBlokProps = ISbComponentType<BLOK.TEXT> & {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  text: string;
  align: TextAlign;
  family: FontFamily;
  size: TextSize;
  weight: FontWeight;
  color: Color;
  italic?: boolean;
  smoothing?: "antialiased" | "subpixel-antialiased";
  transform?: "uppercase" | "lowercase" | "capitalize" | "normal";
};

export const TextBlok: BC<TextBlokProps> = ({
  blok: {
    element,
    text,
    family,
    size,
    weight,
    italic,
    smoothing,
    transform,
    align,
    color,
    ...blok
  },
}) => {
  return (
    <StoryblokEditable blok={blok} as={"div"}>
      <Text
        as={element}
        family={family}
        size={size}
        weight={weight}
        variation={italic ? "italic" : "not-italic"}
        smoothing={smoothing}
        align={align}
        transform={transform}
        color={color}
      >
        {text}
      </Text>
    </StoryblokEditable>
  );
};
