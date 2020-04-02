import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, store, increment} from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './todoList/reducer'
store.dispatch(increment());
console.log(store.getState());
ReactDOM.render(
    <App />,
document.getElementById('root'));

/*
const store = createStore(() => {});
<Provider store = {store}>
</Provider>,
*/
