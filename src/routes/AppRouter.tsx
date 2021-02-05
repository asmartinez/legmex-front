import React, { lazy, Suspense } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';

const DashboardRoutes = lazy(() => import('./DashboardRoutes'));
const PublicRoutes = lazy(() => import('./PublicRoutes'));
const Auth = lazy(() => import('../components/Auth/Auth'));

const AppRouter = () => {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Router>
            <Switch>
               <Route path="/public" component={PublicRoutes} />
               <Route path="/admin" component={DashboardRoutes} />
               <Route path="/auth" component={Auth} />
               <Redirect from="/" to="/public" />
            </Switch>
         </Router>
      </Suspense>
   );
}

export default AppRouter;