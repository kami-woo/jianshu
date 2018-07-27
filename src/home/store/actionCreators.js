import axios from 'axios'
import { actionTypes } from './index'
import { fromJS } from 'immutable'

const actionHomeInfo = (data) => {
  const action = {
    type: actionTypes.GET_INFO,
    data: fromJS(data)
  }
  return action
}

const actionLoadMore = (data) => {
  const action = {
    type: actionTypes.LOAD_MORE,
    data: fromJS(data)
  }
  return action
}

const actionBackTop = (value) => {
  return {
    type: actionTypes.SCROLL_TOP,
    data: value
  }
}

export const getInfo = (dispatch) => {
  axios.get('/api/home.json')
    .then((res) => {
      res = res.data
      if(res.success && res.data) {
        const data = res.data
        dispatch(actionHomeInfo(data))
      }
    })
    .catch(() => { console.log("Network request failed") })
}

export const loadMore = (dispatch) => {
  axios.get('/api/homeList.json')
    .then((res) => {
      res = res.data
      if(res.success && res.data) {
        const data = res.data
        dispatch(actionLoadMore(data))
      }
    })
    .catch(() => { console.log("Network request failed") })
}

export const showBackTop = (value) => {
  return (dispatch) => {
    dispatch(actionBackTop(value))
  }
}
