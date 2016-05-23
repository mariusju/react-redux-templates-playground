import {createDevTools} from 'redux-devtools';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import ReduxThunk from 'redux-thunk';


import * as reducers from './reducers';
import {App, Home, IssuePage} from './components';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk)
);

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  React.createElement(
    Provider,
    {store: store},
    React.createElement(
      'div',
      null,
      React.createElement(
        Router,
        {history: history},
        React.createElement(
          Route,
          {path: '/', component: App},
          React.createElement(IndexRoute, {component: Home}),
          React.createElement(Route, {path: 'issues', component: IssuePage})
        )
      )
    )
  ),
  document.getElementById('app')
);
