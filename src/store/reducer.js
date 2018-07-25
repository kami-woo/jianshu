import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../home/store'

export default combineReducers({
	headerReducer,
  homeReducer
})
