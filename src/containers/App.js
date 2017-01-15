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
import initParticles from '../assets/lib/particles';


class App extends Component {

  componentDidMount() {
    console.log('App is mounted')
    initParticles()
  }

  login() {
    Auth.login()
  }

  render() {

    return <div className="app container-fluid">

      <div id="ui_particles" className="ui_particles"></div>

      {/* header */}
      <div className="header">

        <button 
          type="button" 
          onClick={this.login} 
          className="btn btn-sm btn-outline-secondary pointer"
        >Login</button>

        <br />
        <br />

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

