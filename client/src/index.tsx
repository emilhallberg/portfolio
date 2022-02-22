import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './app/app';
import Loader from './components/loading';
import Global from './resources/stylesheets/global';

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Global />
    <App />
  </Suspense>,
  document.getElementById('root')
);
