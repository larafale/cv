
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import MDSpinner from 'react-md-spinner'


function Movie( movie, channel ) {
  return (
    <div className='movie pointer'>
        <img
          alt=''
          className="w-100"
          src={ movie.image_small || 'http://www.cleanshop.co.id/images/product/no-image.jpg' }
        />
      <div className="card-block">
        <span className="card-title">{movie.titre}</span>
      </div>
      <div className="card-footer">
        <img
          alt=''
          style={{ maxWidth: 40 }}
          src={ 'http://static.programme-tv.net/var/p/chaines/'+channel.idChaine+'.gif' }
        />
        <small className="text-muted float-right">
          {movie.heure.split(':')[0] +':'+ movie.heure.split(':')[1]}
        </small>
      </div>
    </div>
  )
}


class Movies extends Component {

  constructor(props){
    super(props)

    this.state = { 
      loading: false
    }
  }

  componentDidMount() {
    this._onRefresh()
  }

  _onRefresh() {
    this.setState({ loading: true })
    this.props.actions.goToTab(this.props.tab, (function(){
      this.setState({ loading: false })
    }).bind(this))
  }

  render() {

    const output = this.state.loading
      ? <div className="spinner"><MDSpinner /></div>
      : <div className="card-group d-flex flex-row flex-wrap justify-content-center">
          { this.props.movies.map((movie) => {
            return (
              <div className="" key={movie.idChaine}>
                {Movie(movie.list[0], movie)}
              </div>
            )
          }) }
        </div>

    return output
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies)

