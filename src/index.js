import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App-redux';
//import App from './App-context';
// import App from './App-pure';
import App from './App-context';
import * as serviceWorker from './serviceWorker';

//https://daveceddia.com/context-api-vs-redux/
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
