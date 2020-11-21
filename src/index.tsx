import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app/App';
import '../src/assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/assets/css/argon-dashboard-react.css'; 

ReactDOM.render(
   <StrictMode>
      <App />
   </StrictMode>,
  document.getElementById('root')
);