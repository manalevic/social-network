import App from './App';
import store from './redux/redux-store'
import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

