import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gerenciador from './gerenciador';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  // <React.StrictMode>
  <Gerenciador />,
  // </React.StrictMode>,
  document.getElementById('root')
);

