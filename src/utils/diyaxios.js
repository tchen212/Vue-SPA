import axios from 'axios'
import route from './../router'

// 设置请求超时限制（毫秒）
axios.defaults.timeout = 5000

axios.interceptors.response.use(res => {
  return res
}, error => {
  switch (error.response.status) {
    case 401:
      window.alert('登录失败，用户名或密码不匹配！')
      break
    case 403:
      window.alert('请登录')
      localStorage.removeItem('currentUserId', {path: '/'})
      route.push({name: 'Login'})
      break
  }
  return Promise.reject(error)
})
export default axios
