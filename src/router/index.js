import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import config from "./config"
import InterCeptor from "@utils/router.interceptor"

/**
 * '/' 根组件
 */
export function Routers() {
  return (
    <div>
      <Router>
        <RouteView config={config} />
      </Router>
    </div>
  )
}
/**
 * 引用方法  类似 <view-router>
 */
export function RouteView(data) {
  const { config } = data
  return (
    <Switch>
      {config.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          render={(props) => (
            // pass the sub-routes down to keep nesting
            <Route>
              {/*  <item.component {...props} routes={item.routes} /> */}
              <InterCeptor
                config={config}
                routes={item}
                {...props}
              ></InterCeptor>
            </Route>
          )}
        />
      ))}
    </Switch>
  )
}
