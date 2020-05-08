import * as loginReturn from './actionTypes'
const initState = {
  loginData: '',
  color: '#333',
}
const login = (state = initState, action) => {
  switch (action.type) {
    case loginReturn.LOGIN_MESSAGE:
      return {
        ...state,
        loginData: action.loginData,
      }
    case loginReturn.STATE_COLOR:
      return {
        ...state,
        color: action.color,
      }
    default:
      return state
  }
}
export default login
