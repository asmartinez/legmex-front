import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../../routes';
import { RouteCustom } from '../../../shared/interfaces';
import Sidebar from '../components/Sidebar';

const Admin = (props: any) => {
   const getRoutes = (routes: Array<RouteCustom>) => {
      return routes.map( (prop, key) => {
         if (prop.layout === '/admin') {
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
         <Sidebar {...routes}/>
         <div className="main-content">
            <Switch>
               {getRoutes(routes)}
               <Redirect from="*" to="/admin/dashboard" />
            </Switch>
         </div>
      </>
   )
}

export default Admin;