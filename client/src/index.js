import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
// import { Router } from 'react-router'
// import { BrowserRouter, Match, Route, Link } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createBrowserHistory } from 'history'

import reducers from './reducers'
import { routes } from './routes'
import './index.css';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const history = createBrowserHistory();

console.log(routes);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history}>
            <div>
                {routes.map((route,index) => (
                    <Route key={index} pattern={route.pattern} component={route.component} exactly={route.exactly} />
                ))}
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);
