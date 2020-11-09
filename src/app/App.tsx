import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Admin from '../app/components/Admin/Admin';
import Auth from '../app/components/Auth/Auth';

function App() {
  return (
      <BrowserRouter>
         <Switch>
            <Route path="/admin" render={props => <Admin/>} />
            <Route path="/auth" render={props => <Auth/>} />
            <Redirect from="/" to="/admin/index" />
         </Switch>
      </BrowserRouter>
  );
}

export default App;
