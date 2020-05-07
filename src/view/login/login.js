import React, { Component } from 'react'
import { List, InputItem, Button, Tabs, WhiteSpace, Badge } from 'antd-mobile'
import { createForm, formShape } from 'rc-form'
import { setToken } from '@utils/cookies'
//import '@assets/less/login/login.less'
import './login.less'
const tabs = [{ title: <Badge>手机</Badge> }, { title: <Badge>邮箱</Badge> }]

class Login extends Component {
  componentDidMount() {
    /* 原 http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%2F
    输出  http://www.w3school.com.cn/My first/ */
    console.log(this.props, decodeURIComponent(this.props.match.params.url)) //对编码后的URI进行解码
  }
  state = {
    ani1: false,
    ani2: false,
    ani3: false,
    textSwitch: true,
    text: '认证中...',
    errorMsg: '',
  }
  static propTypes = {
    form: formShape,
  }
  startAnimation = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        ani1: true,
      })
      setTimeout(() => {
        this.setState({
          ani2: true,
        })
        setTimeout(() => {
          this.setState({
            ani3: true,
          })
          setTimeout(() => {
            return resolve()
          }, 300)
        }, 200)
      }, 100)
    })
  }
  endAnimation = (test) => {
    this.setState({
      ani3: false,
    })
    setTimeout(() => {
      this.setState({
        ani2: false,
      })
      setTimeout(() => {
        this.setState({
          ani1: false,
          textSwitch: !test ? false : true,
          errorMsg: test ? test : '',
        })
      }, 200)
    }, 300)
  }
  fnlogin({ userName, passwrod }) {
    return new Promise((resolve, reject) => {
      if (userName === 'ndyname' && passwrod === 'asd12345') {
        return resolve({
          msg: '认证成功',
          token:
            'eyJraWQiOiJzaW0wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiI3NTIsMSIsImF1ZCI6ImJpQWRtaW4iLCJpYXQiOjE1Njg4ODY2MjB9.oBzSs0tADcTt7mK89af9fHlfCvXhoffmPxfYQ9gTn9Y',
        })
      } else if (
        (userName === undefined && passwrod === undefined) ||
        (userName === '' && passwrod === '')
      ) {
        return reject('认证失败, 不能为空')
      } else {
        return reject('认证失败, 用户不存在')
      }
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((error, values) => {
      // console.log(error);
      if (!error) {
        console.log('ok', values)
        this.startAnimation().then((res) => {
          this.fnlogin(values)
            .then((res) => {
              setToken(res.token)
              setTimeout(() => {
                this.endAnimation()
                setTimeout(() => {
                  this.props.history.push(
                    this.props.match.params.url
                      ? decodeURIComponent(this.props.match.params.url)
                      : '/'
                  )
                }, 1000)
              }, 3000)
            })
            .catch((err) => {
              setTimeout(() => {
                this.endAnimation(err)
              }, 3000)
            })
        })
      } else {
        console.log('error', error, values)
      }
    })
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className="loginContent">
        {/*   <img src={require('@assets/images/logo.png')} alt="/" /> */}
        {/*  <div className={`login-box ${this.state.ani1 ? 'ani1' : ''}`}>
          {this.state.textSwitch ? (
            [
              <p key="1">账号登录</p>,
              <div className="login-textinput" key="2">
                <List>
                  <InputItem
                    {...getFieldProps('userName')}
                    placeholder="请输入账户"
                  >
                    <i className="fa fa-user-circle-o" />
                  </InputItem>
                  <InputItem
                    type="password"
                    {...getFieldProps('passwrod')}
                    placeholder="请输入密码"
                  >
                    <i className="fa fa-expeditedssl" />
                  </InputItem>
                </List>
              </div>,
              <div className="login-button" key="3">
                <Button type="primary" size="small" onClick={this.onSubmit}>
                  登录
                </Button>
              </div>,
              <span
                key="4"
                style={{
                  color: 'red',
                  display: 'block',
                  marginTop: '20px',
                  fontSize: '15px',
                }}
              >
                {this.state.errorMsg}
              </span>,
            ]
          ) : (
            <div className="login-state">
              <p>认证成功</p>
              <span>欢迎回来</span>
            </div>
          )}
        </div>
        {this.state.ani2 && (
          <div className={`login-authent ${this.state.ani3 ? 'active' : ''}`}>
            <img src={require('@assets/images/puff.svg')} />
            <p>{this.state.text}</p>
          </div>
        )} */}
        <div className="loginbox">
          <Tabs
            tabs={tabs}
            initialPage={0}
            tabBarUnderlineStyle={{
              background: '#2C5EE1',
              height: '3px',
              width: '30%',
              marginLeft: '9%',
              //marginRight: '10%',
              marginBottom: '-5px',
            }}
            tabBarTextStyle={{ fontSize: '16px' }}
            tabBarBackgroundColor="none"
            tabBarActiveTextColor="#2C5EE1"
            tabBarInactiveTextColor="#333333"
            onChange={(tab, index) => {
              console.log('onChange', index, tab)
            }}
            onTabClick={(tab, index) => {
              console.log('onTabClick', index, tab)
            }}
          >
            <div
              style={{
                width: 'auto',
              }}
              className="loginform"
            >
              <List>
                <InputItem
                  {...getFieldProps('userName')}
                  placeholder="请输入手机号码"
                >
                  <i className="fa fa-user-circle-o" />
                </InputItem>
                <InputItem
                  type="password"
                  {...getFieldProps('passwrod')}
                  placeholder="请输入密码"
                >
                  <i className="fa fa-expeditedssl" />
                </InputItem>
              </List>
            </div>
            <div className="loginform">
              {' '}
              <List>
                <InputItem
                  {...getFieldProps('userName')}
                  placeholder="请输入邮箱"
                >
                  <i className="fa fa-user-circle-o" />
                </InputItem>
                <InputItem
                  type="password"
                  {...getFieldProps('passwrod')}
                  placeholder="请输入密码"
                >
                  <i className="fa fa-expeditedssl" />
                </InputItem>
              </List>
            </div>
          </Tabs>
          <div className="login-button" key="3">
            <Button type="primary" size="small" onClick={this.onSubmit}>
              登录
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
export default createForm()(Login)
