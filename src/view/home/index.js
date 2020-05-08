import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import './index.less'

class Home extends Component {
  render() {
    return (
      <div className="mainContent">
        {/*  <div className="mainBody">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/list" component={List}></Route>
            <AuthRoute path="/about" component={About}></AuthRoute>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div> */}
        首页
      </div>
    )
  }
}
export default Home
