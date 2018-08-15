import React from 'react';
import ReactDOM from 'react-dom';
import {Push} from './Components/main';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Push />, document.getElementById('push'));
registerServiceWorker();
