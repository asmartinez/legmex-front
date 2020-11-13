import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../../routes';
import { RouteCustom } from '../../../shared/interfaces';

const Public = (props: any) => {
   const getRoutes = (routes: Array<RouteCustom>) => {
      return routes.map( (prop, key) => {
         if (prop.layout === 'public') {
            return (
               <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
               />
            );
         } else {
            return null;
         }
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

export default Public;