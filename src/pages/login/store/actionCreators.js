import axios from 'axios'
import { actionTypes } from './index'

const actionLoginState = () => ({
  type: actionTypes.CHANGE_LOGIN_STATE
})

export const changeLoginState = () => {
  return (dispatch) => {
    dispatch(actionLoginState())
  }
}

export const userLogin = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account +'&password=' + password)
      .then((res) => {
        res = res.data
        if(res.success && res.data) dispatch(changeLoginState())
      })
      .catch(() => alert("登录失败"))
  }
}
