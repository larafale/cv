import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import { configureStore } from './lib/store'
import App from './containers/App'


const store = configureStore()


const Wrapper = () => (
  <Provider store={store} >
    <App />
  </Provider>
)

// const NotFound = () => (
//   <span>404.. This page is not found!</span>)

// const Home = () => (
//   <span>Home</span>)

// const Movies = () => (
//   <span>Movies</span>)


ReactDOM.render(
  // <Router history={browserHistory}>
  //   <Route path="/" component={App} >
  //     <IndexRoute component={Home} />
  //     <Route path="movies" component={Movies} />
  //   </Route>
  //   <Route path='*' component={NotFound} />
  // </Router>,
  <Wrapper />,
  document.getElementById('root')
);
