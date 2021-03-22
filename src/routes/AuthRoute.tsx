import React, { lazy } from 'react';
import { Redirect, Route } from 'react-router';

interface IAuthRoute {
   isAuthenticated: boolean;
   path: string;
}

const AuthComponent = lazy(() => import('components/Auth/Auth'));

export const AuthRoute = ({ isAuthenticated, path }: IAuthRoute) => {
   return (
      <Route path={ path } component={ () => (
         ( !isAuthenticated )
            ? <AuthComponent />
            : <Redirect to='/admin' />
      )} />
   );
}