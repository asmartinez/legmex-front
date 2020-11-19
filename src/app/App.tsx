import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from './@pages/layouts/Admin';
import Auth from './@pages/layouts/Auth/Auth';
import Public from './@pages/layouts/Public';

const App = () => {
  return (
      <BrowserRouter>
         <Switch>
            <Route path="/public" render={ props => <Public {...props} />} />
            <Route path="/admin" render={ props => <Admin {...props} />} />
            <Route path="/auth" render={ props => <Auth {...props} />} />
            <Redirect from="/" to="/admin/index" />
         </Switch>
      </BrowserRouter>
   );
}

export default App;
