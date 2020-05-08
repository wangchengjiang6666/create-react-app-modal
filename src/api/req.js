//请求拦截
import axios from 'axios'
import { Toast, Button } from 'antd-mobile'
import qs from 'qs'
const req = axios.create({
  baseUrl: 'http://119.8.127.28:9091/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
})

req.interceptors.request.use(
  (config) => {
    Toast.loading('', 0)
    let jwtData = window.sessionStorage.getItem('token')
    if (jwtData) {
      jwtData = JSON.parse(jwtData)
      config.headers.authorization = jwtData
    }
    if (config.data) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
req.interceptors.response.use(
  (response) => {
    Toast.hide()
    let result = response.data
    if (
      result.code == 200 ||
      result.code == 1 ||
      result.code == 0 ||
      result.code == 201
    ) {
      /*  message.success('请求成功'); */

      return response.data
    } else {
      /*   message.error('请求失败'); */
      return Promise.reject(result.message)
    }
  },
  (error) => {
    Toast.hide()
    Toast.fail('加载失败', 1)
    return Promise.reject(error)
  }
)
export default req
