import * as types from './types'
import Api from '../lib/api'

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


export function goToTab(index, callback = () => {}) {
  return (dispatch, getState) => {
    
    dispatch({
      type: types.SET_TAB,
      tab: index
    })

    Api.getMovies(index).then(res => {

      dispatch({
        type: types.SET_MOVIES,
        movies: res.data
      })

      callback()

    }).catch( (ex) => {
      console.log(ex)
    })
  }
}
