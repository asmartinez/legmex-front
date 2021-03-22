import React, { useEffect, useReducer } from 'react';
import { AuthContext } from 'shared/context/AuthContext';
import { authReducer, AuthResponse } from 'shared/reducer/authReducer';
import AppRouter from './routes/AppRouter';

const init = (): AuthResponse => {
   const item = localStorage.getItem('authentication');
   return item ? JSON.parse(item) : { logged: false };
}

const App = () => {
   const [authData, dispatch] = useReducer(authReducer, {}, init);

   useEffect(() => {
      localStorage.setItem('authentication', JSON.stringify(authData))
   }, [authData])

   return (
      <AuthContext.Provider value={{ authData, dispatch }}>
         <AppRouter />
      </AuthContext.Provider>
   );
}

export default App;
