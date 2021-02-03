import { RouteCustom, TypeLayout } from "./interfaces"

export const filterRoute = (routes: RouteCustom[], type: TypeLayout) => {
   return routes.filter( route => route.layout === type )
}