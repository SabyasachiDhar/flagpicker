import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
//Reducer
import falgPickerMain from './store/flagPickerMain.reducer';

const rootReducer = combineReducers({
    falgPickerMain
})

const logAction = (store) => {
    return next => {
        return action => {
            const result = next(action);
            console.log("result 1: ", result);
            return result;
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logAction));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
