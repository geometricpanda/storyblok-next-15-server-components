import { FC } from "react";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";

import {
  coerceQueryNumber,
  coerceQueryString,
  StoryblokRender,
} from "@/lib/storyblok";

import { Storyblok } from "@/storyblok";
import { renderAction } from "./render.action";

export const revalidate = 0;

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
  const revalidate = draft.isEnabled ? 0 : 60;

  const page = await Storyblok.getStory(
    slug,
    { cv, from_release, version },
    { next: { revalidate } },
  ).catch(() => null);

  if (!page) {
    return notFound();
  }

  return (
    <StoryblokRender
      renderAction={renderAction}
      story={page.data.story}
      params={params}
      searchParams={searchParams}
      cv={cv}
      from_release={from_release}
      version={version}
    />
  );
};

export default Page;
