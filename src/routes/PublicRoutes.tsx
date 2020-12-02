import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';
import { RouteCustom } from '../shared/utils/interfaces';

const PublicRoutes = (props: any) => {
   const getRoutes = (routes: Array<RouteCustom>) => {
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

   return (
      <>
         <div className="main-content">
            <Switch>
               {getRoutes(routes)}
               <Redirect from="*" to="/public/inicio"/>
            </Switch>
         </div>
      </>
   )
}

export default PublicRoutes;