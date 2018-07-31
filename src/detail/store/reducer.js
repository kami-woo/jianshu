import { fromJS } from 'immutable'
import { actionTypes } from './index'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAIL_DATA:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    default:
      return state
  }
}
