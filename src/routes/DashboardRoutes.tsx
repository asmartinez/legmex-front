import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';
import { RouteCustom } from '../shared/utils/interfaces';
import Header from '../components/ui/Header';
import Sidebar from '../components/ui/Sidebar';

const DashboardRoutes = (props: any) => {

   const routesAdmin =  routes.filter( route => route.layout === '/admin' );

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
      <div className='body'>
         <Header/>
         <Sidebar layoutOption='mini' items={routesAdmin}/>
         <div className="main-content">
            <Switch>
               { getRoutes(routesAdmin) }
               <Redirect from="*" to="/admin/dashboard" />
            </Switch>
         </div>
      </div>
   )
}

export default DashboardRoutes;