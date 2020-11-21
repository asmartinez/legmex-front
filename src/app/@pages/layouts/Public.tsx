import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../../routes';
import { RouteCustom } from '../../../shared/interfaces';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const routesAdmin =  routes.filter( route => route.layout === '/public' );

const Public = (props: any) => {
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
         <Header/> 
         <NavBar layoutOption='mini' items={routesAdmin} logout/>
            <Switch>
               {getRoutes(routes)}
               <Redirect from="*" to="/public/inicio"/>
            </Switch>
         </div>
      </>
   )
}

export default Public;