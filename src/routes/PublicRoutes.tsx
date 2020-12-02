import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from '../components/ui/Sidebar';
import routes from '../routes';
import { RouteCustom } from '../shared/utils/interfaces';

const publicRoutes =  routes.filter( route => route.layout === '/public' );

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
            <Sidebar backgroundOption='white' items={publicRoutes}/>
            <Switch>
               {getRoutes(routes)}
               <Redirect from="*" to="/public/inicio"/>
            </Switch>
         </div>
      </>
   )
}

export default PublicRoutes;