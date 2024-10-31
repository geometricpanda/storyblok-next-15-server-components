import { BlokComponents } from "@/lib/storyblok";
import PageBlok from "./page";
import TeaserBlok from "./teaser";
import GridBlok from "./grid";
import FeatureBlok from "./card";
import ContainerBlok from "./container";
import ImageBlok from "./image";
import TextBlok from "./text";
import SpacerBlok from "./spacer";
import GridColumnBlok from "./grid-column";
import SurfaceBlok from "@/storyblok/bloks/surface";

export enum BLOK {
  PAGE = "page", //
  TEASER = "teaser", //
  GRID = "grid",
  GRID_COLUMN = "grid-column",
  CARD = "card",
  CONTAINER = "container",
  IMAGE = "image",
  TEXT = "text",
  SPACER = "spacer",
  SURFACE = "surface",
}

export const components: BlokComponents = {
  [BLOK.PAGE]: PageBlok,
  [BLOK.TEASER]: TeaserBlok,
  [BLOK.GRID]: GridBlok,
  [BLOK.CARD]: FeatureBlok,
  [BLOK.CONTAINER]: ContainerBlok,
  [BLOK.IMAGE]: ImageBlok,
  [BLOK.TEXT]: TextBlok,
  [BLOK.SPACER]: SpacerBlok,
  [BLOK.GRID_COLUMN]: GridColumnBlok,
  [BLOK.SURFACE]: SurfaceBlok,
};
