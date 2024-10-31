import { FC, ReactNode } from "react";
import { ISbComponentType } from "storyblok-js-client";
import { Slot } from "@radix-ui/react-slot";

export interface StoryblokEditableProps {
  children: ReactNode;
  blok: ISbComponentType<string>;
  as?: string;
}

export const StoryblokEditable: FC<StoryblokEditableProps> = ({
  children,
  blok,
  as,
}) => {
  const Element = as || Slot;

  if (typeof blok !== "object" || typeof blok._editable === "undefined") {
    return children;
  }

  const options = JSON.parse(
    blok._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""),
  );

  return (
    <Element
      data-blok-c={JSON.stringify(options)}
      data-blok-uid={options.id + "-" + options.uid}
    >
      {children}
    </Element>
  );
};
