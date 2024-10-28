"use client";

import { FC, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

import { enableDraftMode } from "./storyblok-draft-mode.action";

export interface StoryblokDraftModeProps {
  searchParams: Record<string, string | Array<string>>;
}

export const StoryblokDraftMode: FC<StoryblokDraftModeProps> = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    enableDraftMode().then(router.refresh);
  }, [router.refresh]);

  return null;
};
