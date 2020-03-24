import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import { BasePage } from './components/BasePage';

const App: React.FunctionComponent = () => {
  return <BasePage />;
};

ReactDom.render(<App />, document.getElementById('app'));
