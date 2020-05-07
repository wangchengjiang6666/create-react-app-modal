import * as T from './actionTypes'

export const changeBtnText = (text) => {
  return {
    type: T.CHANGE_BTN_TEXT,
    text: text,
  }
}
export const stateColor = (color) => {
  return {
    type: T.STATE_COLOR,
    color: color,
  }
}
