import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../../css/app.css';


if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
