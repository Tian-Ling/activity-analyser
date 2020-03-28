import React, { FunctionComponent } from 'react';
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { BasePage } from './components/BasePage';
import { BrowserRouter } from 'react-router-dom';

const App: FunctionComponent = () => {
  return <BasePage />;
};

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
