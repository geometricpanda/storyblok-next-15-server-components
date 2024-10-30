import type { ISbComponentType, ISbStoryData } from "storyblok-js-client";
import React, { ComponentType } from "react";

export type RenderAction = (props: BlokContext) => Promise<React.JSX.Element>;

export interface StoryblokComponentProps {
  blok: ISbComponentType<string>;
}

export interface StoryblokConfig {
  accessToken: string;
  basePath: string;
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

export type BC<T extends ISbComponentType<string>> = ComponentType<
  BlokProps<T>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlokComponents = Record<string, ComponentType<BlokProps<any>>>;

export interface ISbAsset {
  id: number | null;
  alt: string | null;
  name: string;
  focus: unknown | null;
  title: string | null;
  source?: string;
  filename: string | null;
  copyright: string | null;
  fieldtype: "asset";
  meta_data: Record<string, string>;
  is_external_url: boolean;
}
