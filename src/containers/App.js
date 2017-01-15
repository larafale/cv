/* lib */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

/* components */
import Movies from '../containers/Movies'
import Tabs from '../containers/Tabs'

/* services */
import Auth from '../services/auth'

/* css */
import '../assets/css/index.css';
import '../assets/css/app.css';



class App extends Component {

  login() {
    Auth.login()
  }

  render() {

    return <div className="app container-fluid">

      {/* header */}
      <div className="header">
        <h1>What's on TV</h1>


        {/* menu */}
        <div className="tabs">
          <Tabs 
            tab={this.props.tab} 
            onClick={(tab) => { this.props.actions.goToTab(tab)}} 
          />
        </div>
      </div>

      {/* movies */}
      <div className="movies">
        <Movies />
      </div>

    </div>

  } 

}





function mapStateToProps(state, ownProps) {
  return {
    /*...state,*/
    tab: state.tab,
    movies: state.movies,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    /*dispatch: dispatch*/
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

