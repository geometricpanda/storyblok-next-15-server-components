import { routerGet } from "./router";
import { RouteHandlerConfig } from "./interface";

export const routeHandler = (context: RouteHandlerConfig) => ({
  GET: routerGet(context),
});
