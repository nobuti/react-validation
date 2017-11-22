import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from './components/Modal';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Modal />, document.getElementById('root'));
registerServiceWorker();
