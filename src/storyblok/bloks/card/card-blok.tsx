import { ISbComponentType } from "storyblok-js-client";
import { StoryblokEditable, BC } from "@/lib/storyblok";
import { BLOK } from "@/storyblok/bloks";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { Radius, Shadow } from "../../interface";
import { coerceRadius, coerceShadow } from "@/storyblok/utils";

export type CardBlokProps = ISbComponentType<BLOK.CARD> & {
  header: Array<ISbComponentType<BLOK>>;
  body: Array<ISbComponentType<BLOK>>;
  footer: Array<ISbComponentType<BLOK>>;
  shadow: Shadow;
  radius: Radius;
  full_width: boolean;
  with_dividers: boolean;
  is_hoverable: boolean;
  is_pressable: boolean;
  is_blurred: boolean;
  is_footer_blurred: boolean;
};

export const CardBlok: BC<CardBlokProps> = ({
  blok: {
    header,
    body,
    footer,
    with_dividers,
    shadow,
    radius,
    full_width,
    is_hoverable,
    is_pressable,
    is_blurred,
    is_footer_blurred,
    ...blok
  },
  StoryblokComponent,
}) => {
  return (
    <StoryblokEditable blok={blok}>
      <Card
        shadow={coerceShadow(shadow)}
        radius={coerceRadius(radius)}
        fullWidth={full_width}
        isHoverable={is_hoverable}
        isPressable={is_pressable}
        isBlurred={is_blurred}
        isFooterBlurred={is_footer_blurred}
      >
        {header?.length > 0 && (
          <CardHeader>
            {header.map((blok) => (
              <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
          </CardHeader>
        )}

        {header?.length > 0 && with_dividers && <Divider />}

        {body?.length > 0 && (
          <CardBody>
            {body?.map((blok) => (
              <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
          </CardBody>
        )}

        {footer?.length > 0 && with_dividers && <Divider />}

        {footer?.length > 0 && (
          <CardFooter>
            {footer.map((blok) => (
              <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
          </CardFooter>
        )}
      </Card>
    </StoryblokEditable>
  );
};
