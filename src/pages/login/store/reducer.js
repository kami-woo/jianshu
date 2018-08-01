import { fromJS } from 'immutable'
import { actionTypes } from './index'

const defaultValue = fromJS({
  login: false
})

export default (state = defaultValue, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_LOGIN_STATE:
      return state.set('login', !state.get('login'))
    default:
      return state
  }
}
