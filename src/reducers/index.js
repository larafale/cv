import { combineReducers } from 'redux';

import * as MainReducer from './main'
/*import * as OtherReducer from './other'*/

export default combineReducers(Object.assign(
  MainReducer,
  /*OtherReducer,*/
));

