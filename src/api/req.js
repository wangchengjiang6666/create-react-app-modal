//请求拦截
import axios from "axios"
import { Toast, Button } from "antd-mobile"
import qs from "qs"
const req = axios.create({
  baseUrl: "",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
})

req.interceptors.request.use(
  (config) => {
    //Toast.loading("", 0)
    //添加请求头前缀
    config.url = `/api${config.url}`
    //鉴定token
    let jwtData = window.localStorage.getItem("tk")
    if (jwtData) {
      jwtData = JSON.parse(jwtData)
      config.headers.authorization = jwtData
    }
    //数据转为字符串模式传参
    /*  if (config.data) {
      config.data = qs.stringify(config.data)
    } */
    console.log("请求头信息", config)
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
req.interceptors.response.use(
  (response) => {
    // Toast.hide()
    let result = response.data
    console.log("接口返回信息", response)
    //正常请求
    if (result.code == 1 || result.code == 0) {
      /*  message.success('请求成功'); */

      return response.data
    }
    //极验证接口返回
    if (result.success) {
      return result
    } else {
      /*   message.error('请求失败'); */
      return Promise.reject(result.message)
    }
  },
  (error) => {
    //Toast.hide()
    Toast.fail("加载失败", 1)
    return Promise.reject(error)
  }
)
export default req
