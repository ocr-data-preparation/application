import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ChooseImage from './components/chooseImage/chooseImage'

ReactDOM.render(<ChooseImage />, document.getElementById('root'));

serviceWorker.unregister();
