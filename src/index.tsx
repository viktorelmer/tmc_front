import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import store from "./redux/store";

import App from './App';

import './index.css';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);