import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import './index.less'

class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <div className="homeHeader">
          <img src={require('@assets/images/muniLogi.png')} alt="" />
        </div>
        <div className="myMoney"></div>
      </div>
    )
  }
}
export default Home
