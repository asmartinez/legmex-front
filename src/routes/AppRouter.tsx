import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from "react-router-dom";
import DashboardRoutes from './DashboardRoutes';
import Auth from '../components/Auth/Auth';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
   return (
      <Router>
         <Switch>
            <Route path="/public" render={ props => <PublicRoutes {...props} />} />
            <Route path="/admin" render={ props => <DashboardRoutes {...props} />} />
            <Route path="/auth" render={ props => <Auth {...props} />} />
            <Redirect from="/" to="/admin/index" />
         </Switch>
      </Router>
   );
}

export default AppRouter;