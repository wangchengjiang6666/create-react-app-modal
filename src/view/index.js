import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import './index.less'
import Home from './home/index'
import Found from './found/index'
import Price from './price/index'
import Market from './market/index'
import Mine from './mine/index'
class Index extends Component {
  render() {
    return (
      <div className="mainContent">
        <div className="mainBody">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/found" component={Found}></Route>
            <Route path="/price" component={Price}></Route>
            <Route path="/market" component={Market}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
        <div className="mainFooter">
          <NavLink to="/home" activeClassName="z-act">
            首页
          </NavLink>
          <NavLink to="/price" activeClassName="z-act">
            行情
          </NavLink>
          <NavLink to="/market" activeClassName="z-act">
            市场
          </NavLink>
          <NavLink to="/found" activeClassName="z-act">
            发现
          </NavLink>
          <NavLink to="/mine" activeClassName="z-act">
            我的
          </NavLink>
        </div>
      </div>
    )
  }
}
export default Index
