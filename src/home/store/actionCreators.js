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

export const getInfo = (dispatch) => {
  axios.get('/api/home.json')
    .then((res) => {
      res = res.data
      if(res.success && res.data) {
        const data = res.data
        dispatch(actionHomeInfo(data))
      }
    })
    .catch( () => { 
      console.log("Network request failed") })
}
