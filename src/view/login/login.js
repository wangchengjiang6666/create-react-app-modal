import React, { Component } from "react"
import { List, InputItem, Button, Tabs, WhiteSpace, Badge } from "antd-mobile"
import { createForm, formShape } from "rc-form"
import { setToken } from "@utils/cookies"
import { connect } from "react-redux"
import HpButton from "../../components/hp-button/hp-button"
//import '@assets/less/login/login.less'
import styles from "./login.module.less"

import { handleLogin } from "../../redux/login/action"
import req from "../../api/req"
const tabs = [{ title: <Badge>手机</Badge> }, { title: <Badge>邮箱</Badge> }]
/* @connect(
  ({ login }) => ({
    loginData: login.loginData,
  }),
  null
) */
class Login extends Component {
  componentDidMount() {
    /* 原 http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%2F
    输出  http://www.w3school.com.cn/My first/ */
    console.log(this.props, decodeURIComponent(this.props.match.params.url)) //对编码后的URI进行解码
  }
  componentDidUpdate() {
    console.log("1111111111", this.props.loginData)
  }
  state = {
    typeLogin: 1,
  }
  static propTypes = {
    form: formShape,
  }
  selectType = (type) => {
    this.setState({
      typeLogin: type,
    })
  }

  validateCallback = (values) => {
    req.post("/login", values).then((res) => {
      if (res.code == 1) {
        setToken(res.data[0].token)
        this.props.history.push("/")
      }
    })
  }
  onSubmit = () => {
    // e.preventDefault()
    let data = ""
    this.props.form.validateFields((error, values) => {
      // console.log(error);
      if (!error) {
        console.log("ok", values)

        console.log("传递过去的对象", values)
        //return Promise.resolve(values)
        data = values
        //this.props.handleLogin(values)
      }
    })
    return Promise.resolve(data)
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className={styles.loginContent}>
        <div className={styles.loginbox}>
          <div className={styles["loginTitle"]}>登录</div>
          <div className={styles["typeLogin"]}>
            <span
              className={styles[this.state.typeLogin == 1 ? "activePhone" : ""]}
              onClick={() => {
                this.selectType(1)
              }}
            >
              手机号
            </span>
            <span
              className={styles[this.state.typeLogin == 2 ? "activeEmail" : ""]}
              onClick={() => {
                this.selectType(2)
              }}
            >
              邮箱
            </span>
          </div>
          {this.state.typeLogin == 1 && (
            <div className={styles["phone"]}>
              <div className={styles["phoneLeft"]}>
                <span>+86</span>
                <i></i>
              </div>
              <InputItem
                className={styles["phonerRight"]}
                placeholder="请输入手机号码"
              />
            </div>
          )}
          {this.state.typeLogin == 2 && (
            <div className={styles["phone"]}>
              <InputItem
                className={styles["phonerRight"]}
                placeholder="请输入邮箱"
              />
            </div>
          )}
          <div className={styles["email"]}></div>
          <div className={styles["password"]}>
            <InputItem
              className={styles["passwordItem"]}
              placeholder="请输入密码"
            />
          </div>

          {/* <Tabs
            tabs={tabs}
            initialPage={0}
            tabBarUnderlineStyle={{
              background: "#2C5EE1",
              height: "3px",
              width: "30%",
              marginLeft: "9%",
              //marginRight: '10%',
              marginBottom: "-5px",
            }}
            tabBarTextStyle={{ fontSize: "16px" }}
            tabBarBackgroundColor="none"
            tabBarActiveTextColor="#2C5EE1"
            tabBarInactiveTextColor="#333333"
            onChange={(tab, index) => {
              console.log("onChange", index, tab)
            }}
            onTabClick={(tab, index) => {
              console.log("onTabClick", index, tab)
            }}
          >
            <div
              style={{
                width: "auto",
              }}
              className="loginform"
            >
              <List>
                <InputItem
                  {...getFieldProps("username")}
                  placeholder="请输入手机号码"
                >
                  <i className="fa fa-user-circle-o" />
                </InputItem>
                <InputItem
                  type="password"
                  {...getFieldProps("password")}
                  placeholder="请输入密码"
                >
                  <i className="fa fa-expeditedssl" />
                </InputItem>
              </List>
            </div>
            <div className="loginform">
              {" "}
              <List>
                <InputItem
                  {...getFieldProps("username")}
                  placeholder="请输入邮箱"
                >
                  <i className="fa fa-user-circle-o" />
                </InputItem>
                <InputItem
                  type="password"
                  {...getFieldProps("password")}
                  placeholder="请输入密码"
                >
                  <i className="fa fa-expeditedssl" />
                </InputItem>
              </List>
            </div>
          </Tabs> */}
          <div className={styles["login-button"]} key="3">
            <HpButton
              type="primary"
              onClick={this.onSubmit}
              validateCallback={this.validateCallback}
              setbaground="setbaground"
              text="登录"
            ></HpButton>
            {/* <Button type="primary" size="small" onClick={this.onSubmit}>
              登录
            </Button> */}
          </div>
        </div>
      </div>
    )
  }
}
//export default createForm()(Login)
export default connect(({ login }) => ({ loginData: login.loginData }), {
  handleLogin,
})(createForm()(Login))
