import React from "react";
import { Route } from "react-router-dom";
import { RouteCustom } from "../shared/utils/interfaces";

export const getRoutes = (routes: RouteCustom[]) => {
   return routes.map( (route, key) => {
      return (
         <Route
          path={route.layout + route.routerLink}
          component={route.component}
          key={key}
         />
      );
   });
};