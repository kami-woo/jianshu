import { BEARCH_FOCUS, BEARCH_BLUR } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	focused: false
})

export default (prevState = defaultState, action) => {
	if(action.type === BEARCH_FOCUS) {
		return prevState.set('focused', true)
	} else if(action.type === BEARCH_BLUR) {
		return prevState.set('focused', false)
	}
	return prevState
}
