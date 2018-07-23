import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const searchInfo = (data) => ({
	type: actionTypes.SEARCH_INFO,
	data: fromJS(data)
})

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
})

export const getInfo = () => {
	return (dispatch) => {
		axios.get('/api/searchInfo.json')
			.then((res) => {
				res = res.data
				if(res.data && res.success) {
					const data = res.data
					dispatch(searchInfo(data))
				}
			})
			.catch(() => {
				console.log('数据获取失败')
			})
	}
}

export const searchMouseEnter = () => ({
	type: actionTypes.SEARCH_MOUSE_ENTER
})

export const searchMouseLeave = () => ({
	type: actionTypes.SEARCH_MOUSE_LEAVE
})

export const searchToggle = () => ({
	type: actionTypes.SEARCH_TOGGLE
})
