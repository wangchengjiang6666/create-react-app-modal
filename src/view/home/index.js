import React, { Component } from "react"
import { Route, NavLink, Redirect, Switch } from "react-router-dom"
import styles from "./index.module.less"
//import "./index.less"
class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <div className="homeHeader">
          <img src={require("@assets/images/muniLogi.png")} alt="" />
        </div>
        <div className="myMoney">有没有变化</div>
        <div className={styles.myMoney}>aaaa</div>
      </div>
    )
  }
}
export default Home
