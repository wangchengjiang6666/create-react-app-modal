import * as T from './actionTypes'

const initState = {
  text: '风控移动端采集',
  color: '#333',
}

export default (state = initState, action) => {
  switch (action.type) {
    case T.CHANGE_BTN_TEXT:
      return {
        ...state,
        text: action.text,
      }
    // break;
    case T.STATE_COLOR:
      return {
        ...state,
        color: action.color,
      }
    // break;
    default:
      return state
    // break;
  }
}
