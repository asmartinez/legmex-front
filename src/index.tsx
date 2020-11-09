import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app/App';
import '../src/assets/plugins/nucleo/css/nucleo.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/assets/css/argon-dashboard-react.css';

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
  document.getElementById('root')
);