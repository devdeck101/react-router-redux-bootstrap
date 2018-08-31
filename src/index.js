import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { itemsList, items }from './reducer';

const initialState = {
    items: [
        {
            id: 1,
            name: 'Macbook',
            price: 9.99
        },
        {
            id: 2,
            name: 'Surface',
            price: 7.99
        },
        {
            id: 3,
            name: 'Chromebook',
            price: 5.99
        }
    ],
    itemsList: []
}

const combined = combineReducers({
    items,
    itemsList
})
const store = createStore(combined, initialState)

const subscribe = store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
