import type { ISbComponentType, ISbStoryData } from "storyblok-js-client";
import React, { ComponentType } from "react";

export type RenderAction = (props: BlokContext) => Promise<React.JSX.Element>;

export interface StoryblokComponentProps {
  blok: ISbComponentType<string>;
}

export interface BlokContext {
  story: ISbStoryData;
  params: Record<string, Array<string>>;
  searchParams: Record<string, string | Array<string>>;
  cv?: number;
  from_release?: string;
  version: "draft" | "published";
  [key: string]: unknown;
}

export type BlokProps<T extends ISbComponentType<string>> = {
  StoryblokComponent: ComponentType<StoryblokComponentProps>;
  blok: T;
  context: BlokContext;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlokComponents = Record<string, ComponentType<BlokProps<any>>>;
