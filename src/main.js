import { createDevTools } from 'redux-devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'

import * as reducers from './reducers'
import { App, Home, IssuePage } from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk)
)
const history = syncHistoryWithStore(browserHistory, store)

// ReactDOM.render(<h1>hello</h1>, document.getElementById('app'))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="issues" component={IssuePage}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
)