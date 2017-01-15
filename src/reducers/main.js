import createReducer from '../lib/createReducer'
import * as types from '../actions/types'



export const tab = createReducer('early', {

  [types.SET_TAB](state, action) {
    return action.tab || state
  }

})

export const movies = createReducer([], {

  [types.SET_MOVIES](state, action) {
    return action.movies
  }

})