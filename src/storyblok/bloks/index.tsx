import { BlokComponents } from "@/lib/storyblok";
import PageBlok from "./page";
import TeaserBlok from "./teaser";
import GridBlok from "./grid";
import FeatureBlok from "./feature";
import ContainerBlok from "./container";

export enum BLOK {
  PAGE = "page",
  TEASER = "teaser",
  GRID = "grid",
  FEATURE = "feature",
  CONTAINER = "container",
}

export const components: BlokComponents = {
  [BLOK.PAGE]: PageBlok,
  [BLOK.TEASER]: TeaserBlok,
  [BLOK.GRID]: GridBlok,
  [BLOK.FEATURE]: FeatureBlok,
  [BLOK.CONTAINER]: ContainerBlok,
};
