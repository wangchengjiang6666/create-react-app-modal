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
          <NavLink to="/home" activeClassName="z-act" className="footerItem">
            <i className="iconimg1"></i>
            <span>首页</span>
          </NavLink>
          <NavLink to="/price" activeClassName="z-act" className="footerItem">
            <i className="iconimg2"></i>
            <span>行情</span>
          </NavLink>
          <NavLink to="/market" activeClassName="z-act" className="footerItem">
            <i className="iconimg3"></i>
            <span>市场</span>
          </NavLink>
          <NavLink to="/found" activeClassName="z-act" className="footerItem">
            <i className="iconimg4"></i>
            <span>发现</span>
          </NavLink>
          <NavLink to="/mine" activeClassName="z-act" className="footerItem">
            <i className="iconimg5"></i>
            <span>我的</span>
          </NavLink>
        </div>
      </div>
    )
  }
}
export default Index
