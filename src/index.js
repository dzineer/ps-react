import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/highlight.js/styles/ocean.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import Docs from './docs/Docs';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Docs />, document.getElementById('root'));
//registerServiceWorker();
