import { FC, ReactNode } from "react";
import { ISbComponentType } from "storyblok-js-client";
import { Slot } from "@radix-ui/react-slot";

export interface StoryblokEditableProps {
  children: ReactNode;
  blok: ISbComponentType<string>;
}

export const StoryblokEditable: FC<StoryblokEditableProps> = ({
  children,
  blok,
}) => {
  if (typeof blok !== "object" || typeof blok._editable === "undefined") {
    return children;
  }

  const options = JSON.parse(
    blok._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""),
  );

  return (
    <Slot
      data-blok-c={JSON.stringify(options)}
      data-blok-uid={options.id + "-" + options.uid}
    >
      {children}
    </Slot>
  );
};
