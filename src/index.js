import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import { configureStore } from './lib/store'
import App from './containers/App'


const store = configureStore()

const NotFound = () => (
  <h2 style={{color: '#fff', padding: 50, textAlign: 'center'}}>404.. sorry brother</h2>)


const RouterInstance = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path='*' component={NotFound} />
  </Router>)

const Wrapper = () => (
  <Provider store={store} >
    <RouterInstance />
  </Provider>
)



ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
