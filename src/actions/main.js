import * as types from './types'
import Api from '../lib/api'
import dateFormat from 'dateformat'

/*export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`,
      'p=1'
    ].join('&')
    return Api.get(`/api/?${params}`).then(res => {
      dispatch(setSearchedRecipes({recipes: res}))
    }).catch( (ex) => {
      console.log(ex)
    })
  }
}*/

export function _fetchMovies(type) {

  const today = dateFormat(new Date(), "yyyy-mm-dd")

  const types = {
    early: `/1326279455-10/getPrime/?date=${today}&periode=prime1&bouquetId=2`,
    late: `/1326279455-10/getPrime/?date=${today}&periode=prime2&bouquetId=2`,
    now: `/1326279455-10/getEnCeMoment/?bouquetId=2`
  }

  const uri = types[type || 'early']
  // const params = [''].join('&')  

  return Api.get(uri)
}

export function fetchMovies(type, callback) {
  return (dispatch, getState) => {
    
    _fetchMovies(type).then(res => {

      dispatch({
        type: types.SET_MOVIES,
        movies: res.data
      })

      callback && callback()

    }).catch( (ex) => {
      console.log(ex)
    })
  }
}

export function goToTab(index) {
  return (dispatch, getState) => {
    
    dispatch({
      type: types.SET_TAB,
      tab: index
    })

    _fetchMovies(index).then(res => {

      dispatch({
        type: types.SET_MOVIES,
        movies: res.data
      })

    }).catch( (ex) => {
      console.log(ex)
    })
  }
}
