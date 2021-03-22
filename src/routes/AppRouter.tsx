import React, { lazy, Suspense, useContext } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';
import { AuthContext } from 'shared/context/AuthContext';
import Loader from '../components/ui/common/Loader';
import { AuthRoute } from './AuthRoute';
import { PrivateRoute } from './PrivateRoute';
const PublicRoutes = lazy(() => import('./PublicRoutes'));

const AppRouter = () => {
   const { authData } = useContext(AuthContext);
   
   return (
      <Suspense fallback={<Loader />}>
         <Router>
            <Switch>
               <Route path="/public" component={ PublicRoutes } />
               <PrivateRoute path="/admin" isAuthenticated={ authData.logged } />
               <AuthRoute path="/auth" isAuthenticated={ authData.logged } />
               <Redirect from="/" to="/public" />
            </Switch>
         </Router>
      </Suspense>
   );
}

export default AppRouter;