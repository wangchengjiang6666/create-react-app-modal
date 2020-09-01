import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { getToken } from "@utils/cookies"
import Loadings from "@components/loading/loading"
class InterCeptor extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      load: false,
    }
  }

  // render后调用
  componentDidMount() {
    console.log("组件创建后", this.props)
    const {
      location: { pathname },
      match: { path },
      history: { replace },
    } = this.props
    // 是否在登录界面
    if (path === "/login" || path === "/login/:url") {
      console.log("正在登录")
    } else if (!getToken()) {
      console.log(`/login/${encodeURIComponent(pathname)}`)
    }
    setTimeout(() => {
      this.setState({
        load: true,
      })
    }, 1000)
  }
  // 组件销毁
  componentWillUnmount() {
    console.log("组件销毁前")
  }

  render() {
    const { routes } = this.props
    // 页面加载拦截
    return this.state.load ? (
      <routes.component {...this.props} routes={routes.routes} />
    ) : (
      <Loadings />
    )
  }
}
export default withRouter(InterCeptor)
