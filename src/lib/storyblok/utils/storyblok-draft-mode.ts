import { cookies, draftMode } from "next/headers";

export const enableDraftMode = async () => {
  const draft = await draftMode();
  draft.enable();
  const cookieStore = await cookies();
  const cookie = cookieStore.get("__prerender_bypass")!;
  cookieStore.set({
    name: "__prerender_bypass",
    value: cookie?.value,
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "none",
  });
};

export const disableDraftMode = async () => {
  const draft = await draftMode();
  draft.disable();
  const cookieStore = await cookies();
  cookieStore.delete("__prerender_bypass");
};
