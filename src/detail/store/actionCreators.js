import { actionTypes } from './index.js'
import axios from 'axios'

const actionGetData = (data) => {
  const action = {
    type: actionTypes.GET_DETAIL_DATA,
    data
  }
  return action
}

export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?' + id)
      .then((res) => {
        res = res.data
        if( res.success && res.data) {
          const data = res.data
          dispatch(actionGetData(data))
        }
      })
      .catch(() => console.log("详情页面数据请求失败"))
  }
}
