import SearchScreen from 'components/ui/common/SearchScreen';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DispositionScreen from 'components/ui/common/DispositionScreen';
import Sidebar from 'components/ui/Sidebar';
import routes from 'routes';
import { filterRoute } from 'shared/utils/filter';
import { getRoutes } from './get-route';

const PublicRoutes = () => {
   const publicRoutes = filterRoute(routes, '/public');
   return (
      <>
         <div className="main-content">
            <Sidebar backgroundOption="white" items={publicRoutes} isFooterCard showTitle/>
            <Switch>
               {getRoutes(publicRoutes)}
               {/** Route Temporary */}
               <Route exact path="/public/search" component={ SearchScreen }/>
               <Route exact path="/public/document/:dispositionId" component={ DispositionScreen }/>
               <Redirect from="*" to="/public/inicio"/>
            </Switch>
         </div>
      </>
   )
}

export default PublicRoutes;