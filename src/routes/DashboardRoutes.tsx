import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import routes from '../routes';
import Header from '../components/ui/Header';
import Sidebar from '../components/ui/Sidebar';
import { filterRoute } from '../shared/utils/filter';
import { getRoutes } from './get-route';

const DashboardRoutes = () => {
   const privateRoutes = filterRoute(routes, '/admin');

   return (
      <div className='body'>
         <Header/>
         <Sidebar backgroundOption="white" items={privateRoutes}/>
         <div className="main-content">
            <Switch>
               { getRoutes(privateRoutes) }
               <Redirect from="*" to="/admin/dashboard" />
            </Switch>
         </div>
      </div>
   )
}

export default DashboardRoutes;