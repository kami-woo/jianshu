import { fromJS } from 'immutable'
import { actionTypes } from './index'

const defaultState = fromJS({
  imgList: [],
  artList: [],
  popList: [],
  authorList: [],
  show: false
})

export default (prevState = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_INFO:
      return  prevState.merge({
        imgList: action.data.get('imgList'),
        artList: action.data.get('artList'),
        popList: action.data.get('popList'),
        authorList: action.data.get('authorList')
      })
    case actionTypes.LOAD_MORE:
      return prevState.set('artList', prevState.get('artList').concat(action.data))
    case actionTypes.SCROLL_TOP:
      return prevState.set('show', action.data)
    default:
      return prevState
  }
}
