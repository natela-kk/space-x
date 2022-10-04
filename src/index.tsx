import React from 'react';
import ReactDOM from "react-dom/client";
import App from './components/app/app';
import './styles/styles.scss';
import {testCompanies} from './test-data.js';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App companiesData = {testCompanies}/>
  </React.StrictMode>,
);
