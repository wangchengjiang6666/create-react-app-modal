import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "lib-flexible"
import "font-awesome/less/font-awesome.less"
import "react-fontawesome" //icon图标
import Debugger from "vconsoleonline" //移动端调试神器
Debugger("localhost", ["left", "right", "click", "click"])
ReactDOM.render(
  /*  <React.StrictMode> */
  <App />,
  /*  </React.StrictMode> */ document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
