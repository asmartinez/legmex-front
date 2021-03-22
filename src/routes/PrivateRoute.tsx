import React, { lazy } from 'react';
import { Redirect, Route } from 'react-router';

interface IPrivateRoute {
   isAuthenticated: boolean;
   path: string;
}

const DashboardRoutes = lazy(() => import('./DashboardRoutes'));

export const PrivateRoute = ({ isAuthenticated, path }: IPrivateRoute) => {
   return (
      <Route path={ path } component={ () => (
         ( isAuthenticated )
            ? <DashboardRoutes />
            : <Redirect to='/auth' />
      )} />
   );
}