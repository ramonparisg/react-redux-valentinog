import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store/Store"

import App from './components/App.jsx'


const container = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, container);