import React from 'react';
import ReactDOM from 'react-dom';
import {Push} from './Components/main';
import registerServiceWorker from './registerServiceWorker';

var memberlist = ["hoge"];

ReactDOM.render(<Push members={memberlist}/>, document.getElementById('push'));
registerServiceWorker();
