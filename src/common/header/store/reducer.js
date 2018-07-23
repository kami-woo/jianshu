import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	focused: false,
	list: [],
	mouseIn: false,
	page: 0,
	totalPage: 0
})

export default (prevState = defaultState, action) => {
	switch(action.type) {
		case actionTypes.SEARCH_FOCUS:
			return prevState.set('focused', true)
		case actionTypes.SEARCH_BLUR:
			return prevState.set('focused', false)
		case actionTypes.SEARCH_INFO:
			return prevState.merge({
				list: action.data,
				totalPage: Math.ceil(action.data.size / 10)
			})
		case actionTypes.SEARCH_MOUSE_ENTER:
			return prevState.set('mouseIn', true)
		case actionTypes.SEARCH_MOUSE_LEAVE:
			return prevState.set('mouseIn', false)
		case actionTypes.SEARCH_TOGGLE:
			const newPage = (prevState.get('page')+1) % (prevState.get('totalPage'))
			return prevState.set('page', newPage)
		default:
			return prevState
	}
}
