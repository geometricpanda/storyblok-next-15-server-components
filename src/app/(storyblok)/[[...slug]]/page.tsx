import { FC } from "react";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";

import {
  coerceQueryNumber,
  coerceQueryString,
  StoryblokRender,
} from "@/lib/storyblok";

import { renderAction } from "./render.action";
import { Storyblok } from "./storyblok";

interface PageProps {
  params: Promise<{ slug: Array<string> }>;
  searchParams: Promise<Record<string, string | Array<string>>>;
}

const Page: FC<PageProps> = async (req) => {
  const params = await req.params;
  const searchParams = await req.searchParams;
  const draft = await draftMode();

  const slug = params.slug ? params.slug.join("/") : "home";

  const cv = coerceQueryNumber(searchParams._storyblok_rl);
  const from_release = coerceQueryString(searchParams._storyblok_release);
  const version = draft.isEnabled ? "draft" : "published";

  const page = await Storyblok.getStory(
    slug,
    { cv, from_release, version },
    { next: { revalidate: 60 } },
  ).catch(() => null);

  if (!page) {
    return notFound();
  }

  const story = page.data.story;

  return (
    <StoryblokRender
      renderAction={renderAction}
      story={story}
      params={params}
      searchParams={searchParams}
      cv={cv}
      from_release={from_release}
      version={version}
    />
  );
};

export default Page;
