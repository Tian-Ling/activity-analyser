import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const App: React.FunctionComponent = () => {
    return <h1>Test</h1>;
};

ReactDom.render(<App />, document.getElementById('app'));
