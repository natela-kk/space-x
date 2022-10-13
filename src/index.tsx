import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import './styles/styles.scss';
import { testCompanies } from './test-data.js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App companiesData={testCompanies} />
    </Provider>
  </React.StrictMode>,
);
