import { BEARCH_FOCUS, BEARCH_BLUR } from './actionTypes'

const defaultState = {
	focused: false
}

export default (prevState = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(prevState))
	if(action.type === BEARCH_FOCUS) {
		newState.focused = true
	} else if(action.type === BEARCH_BLUR) {
		newState.focused = false
	}
	return newState
}
