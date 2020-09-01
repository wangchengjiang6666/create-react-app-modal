import React, { Component } from "react"
import PropTypes from "prop-types"
import api from "../../api/req"
import styles from "./hpbutton.module.less"
export default class HpButton extends Component {
  // props检查
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(["primary", "ghost", "warning", " minor"]).isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    needValidate: PropTypes.bool,
    validateCallback: PropTypes.func,
    textButton: PropTypes.bool,
    block: PropTypes.bool,
  }
  // props默认值
  static defaultProps = {
    text: "",
    type: "primary",
    disabled: false,
    needValidate: false,
    onClick: () => {},
    validateCallback: () => {},
    textButton: false,
    block: false,
  }
  // 处理点击回调
  handleClick = () => {
    if (this.props.disabled) {
      return 0
    }
    // 如果需要极验证，传进来的onClick方法需要返回一个Promise对象，并且把参数传递过来
    const result = this.props.onClick()
    console.log("传递过来的信息", result)
    if (result && result.then) {
      /*  if (this.captchaObj) {
        this.submitData = result
        this.captchaObj.verify()
      } */

      const count = result.then((data) => {
        console.log("传递过来的信息", data)
        this.submitData = data
        if (!this.captchaObj) {
          /* Taro.showToast({
            title: this.props.local.greetIntFailure,
            icon: "none",
            duration: 2000,
          }) */
          console.log("调用极验证失败1")
          return 0
        }

        this.captchaObj.verify()
        return 1
      })
      return count
    } else {
      return 0
    }
  }

  // 极验证初始化
  init = () => {
    // 极验证初始化失败尝试重新请求次数
    this.limit++
    if (this.limit > 5) return
    // if (!this.props.needValidate) return
    if (this.captchaObj) return
    api
      .get(
        /* {
        url: "/geetest/startcaptcha",
        params: {
          isGt: true,
        },
      } */ "/geetest/startcaptcha",
        {
          params: {
            isGt: true,
            cache: "reload",
            header: {},
            auth: true,
          },
        }
      )
      .then((res) => {
        /*  const {
          b: { data },
        } = res */
        // console.log('------')
        console.log("极验证初始化", res)
        let data = res
        window.initGeetest(
          {
            // 以下 4 个配置参数为必须，不能缺少
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
            product: "bind", // 产品形式，包括：float，popup
            width: "300px",
            // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
          },
          (captchaObj) => {
            captchaObj.onSuccess(() => {
              console.log("极验证成功回调", captchaObj)
              var result = this.captchaObj.getValidate()
              console.log("极验证成功回调", result)
              if (!result) {
                /*  Taro.showToast({
                  title: this.props.local.pleaseCompleteValidate,
                  icon: "none",
                  duration: 2000,
                }) */
                console.log("调用极验证2")
              }
              this.props.validateCallback({ ...this.submitData, ...result })
            })
            this.captchaObj = captchaObj
          }
        )
      })
      .catch((e) => {
        this.init()
        /*  e.h.msg &&
          Taro.showToast({
            title: this.props.local[e.h.msg] || "",
            icon: "none",
            duration: 2000,
          }) */
        console.log("调用极验证失败3", e)
      })
  }
  // life cycle hooks
  componentDidMount() {
    this.limit = 0
    this.init()
  }
  render() {
    return this.props.textButton ? (
      <Timer handleGetCode={this.handleClick} text={this.props.text}></Timer>
    ) : (
      <div
        className={[
          styles["c-button"],
          styles[`button-${this.props.type}`],
          styles[`button-${this.props.setbaground}`],
          this.props.block ? styles["button-block"] : "",
          this.props.disabled ? styles["button-disabled"] : "",
          this.props.textStyle ? styles[`text-${this.props.textStyle}`] : "",
        ].join(" ")}
        onClick={this.handleClick}
      >
        {this.props.text}
      </div>
    )
  }
}

class Timer extends Component {
  static defaultProps = {
    handleGetCode: () => {},
  }
  timer = 0
  state = {
    clicked: false,
    time: 0,
  }

  handleClick = () => {
    if (this.state.time > 0) {
      return
    }
    this.timing()
  }

  timing = () => {
    this.props.handleGetCode().then((v) => {
      if (!v) return
      this.setState({
        clicked: true,
        time: 60,
      })
      this.timer = setInterval(() => {
        if (this.state.time >= 1) {
          this.setState({
            time: this.state.time - 1,
          })
        } else {
          clearInterval(this.timer)
        }
      }, 1000)
    })
  }

  render() {
    const { sendAfterTime: timerHint, reSend } = this.props.local
    return (
      <div onClick={this.handleClick} className={styles["text-button"]}>
        {!this.state.clicked ? (
          <span style={{ color: "#FFD200" }}>{this.props.text}</span>
        ) : this.state.time == 0 ? (
          <span style={{ color: "#ced5e5" }}>{this.props.text}</span>
        ) : (
          <span style={{ color: "#ced5e5" }}>{this.state.time}s</span>
        )}
      </div>
    )
  }
}
