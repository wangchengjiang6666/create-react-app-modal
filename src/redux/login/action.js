import * as loginReturn from './actionTypes'
import req from '../../api/req'
export const handleLogin = (text) => {
  return async (dispatch) => {
    let result = await req.post('/reset/login', text)
    dispatch({
      type: loginReturn.LOGIN_MESSAGE,
      loginData: result.data,
    })
  }

  /*  return {
    type: loginReturn.LOGIN_MESSAGE,
    text: text,
  } */
}
export const stateColor = (color) => {
  return {
    type: loginReturn.STATE_COLOR,
    color: color,
  }
}
