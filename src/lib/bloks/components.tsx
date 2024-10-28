import { BlokComponents } from "@/lib/storyblok";
import PageBlok from "./page";
import TeaserBlok from "./teaser";
import GridBlok from "./grid";
import FeatureBlok from "./feature";

export enum BLOK {
  PAGE = "page",
  TEASER = "teaser",
  GRID = "grid",
  FEATURE = "feature",
}

export const Components: BlokComponents = {
  [BLOK.PAGE]: PageBlok,
  [BLOK.TEASER]: TeaserBlok,
  [BLOK.GRID]: GridBlok,
  [BLOK.FEATURE]: FeatureBlok,
};
