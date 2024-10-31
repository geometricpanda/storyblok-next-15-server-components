import { Spacer } from "@nextui-org/spacer";
import type { ISbComponentType } from "storyblok-js-client";
import { BC } from "@/lib/storyblok";
import { BLOK } from "../index";
import { Size } from "../../interface";
import { coerceSpace } from "../../utils";

export type SpacerBlokProps = ISbComponentType<BLOK> & {
  x: Size;
  y: Size;
};

export const SpacerBlok: BC<SpacerBlokProps> = ({ blok: { x, y } }) => {
  return <Spacer x={coerceSpace(x)} y={coerceSpace(y)} />;
};
