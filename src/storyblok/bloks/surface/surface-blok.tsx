import { ISbComponentType } from "storyblok-js-client";
import { BLOK } from "@/storyblok/bloks";
import {
  BoxShadow,
  Breakpoint,
  Color,
  GradientDirection,
  Radius,
  Size,
} from "../../interface";
import { BC, StoryblokEditable } from "@/lib/storyblok";
import clsx from "clsx";
import {
  coerceTailwindBackground,
  coerceTailwindBackgroundGradient,
  coerceTailwindPadding,
  coerceTailwindRadius,
  coerceTailwindBoxShadow,
  coerceTailwindBoxShadowColor,
} from "@/storyblok/utils";

export type SurfaceBlokProps = ISbComponentType<BLOK> & {
  body: Array<ISbComponentType<BLOK>>;
  background_color?: Color;
  background_gradient?: Array<Color>;
  background_gradient_direction?: GradientDirection;
  shadow?: BoxShadow;
  shadow_color?: Color;
  radius: Radius;
  radius_md: Radius;
  padding: Size;
  padding_md: Size;
};

export const SurfaceBlok: BC<SurfaceBlokProps> = ({
  blok: {
    body,
    background_color,
    background_gradient,
    background_gradient_direction,
    radius,
    radius_md,
    padding,
    padding_md,
    shadow,
    shadow_color,
    ...blok
  },
  StoryblokComponent,
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <div
        className={clsx(
          coerceTailwindPadding(padding),
          coerceTailwindPadding(padding_md, Breakpoint.MD),
          coerceTailwindRadius(radius),
          coerceTailwindRadius(radius_md, Breakpoint.MD),
          coerceTailwindBackground(background_color),
          coerceTailwindBackgroundGradient(
            background_gradient_direction,
            background_gradient,
          ),
          coerceTailwindBoxShadow(shadow),
          coerceTailwindBoxShadowColor(shadow_color, background_color),
          shadow && "relative",
        )}
      >
        {body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </StoryblokEditable>
  );
};
