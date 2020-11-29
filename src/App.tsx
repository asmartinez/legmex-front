import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from './routes/Admin';
import Auth from './components/Auth/Auth';
import Public from './routes/Public';

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
