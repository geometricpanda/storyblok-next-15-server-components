import { ROUTES, StoryblokRouteHandler } from "./interface";
import { enablePreviewRoute } from "./enable-preview.route";
import { notFound } from "next/navigation";
import { disablePreviewRoute } from "./disable-preview.route";

const routes = {
  [ROUTES.DRAFT_MODE_ENABLE]: enablePreviewRoute,
  [ROUTES.DRAFT_MODE_DISABLE]: disablePreviewRoute,
};

export const routerGet: StoryblokRouteHandler =
  (context) => async (req, props) => {
    const params = await props.params;
    const route = params.storyblok.join("/");

    const routeHandler = routes[route as ROUTES];

    if (!routeHandler) {
      return notFound();
    }

    return routeHandler(context)(req, props);
  };
