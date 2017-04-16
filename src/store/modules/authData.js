import * as types from '../types.js'
import axios from '../../utils/diyaxios.js'
import route from './../../router'

const state = {
  loging: false,
  currentUser: null
}

const getters = {
  [types.GET_CURRENT_USER]: state => {
    return state.currentUser
  },
  [types.GET_LOGING]: state => {
    return state.loging
  }
}

const mutations = {
  [types.SET_CURRENT_USER] (state, all) {
    if (all) {
      localStorage.setItem('currentUserId', all.userid || all.id, {path: '/'})
    } else {
      localStorage.removeItem('currentUserId', {path: '/'})
    }
    state.loging = false
    state.currentUser = all
  }
}

const actions = {
  // 登录
  [types.AUTH_LOGIN] ({commit}, {username, password}) {
    state.loging = true
    return axios.post('/oaservice/api/security/login?username=' + username + '&password=' + password, {
      username: username,
      password: password
    }).then(res => {
      commit(types.SET_CURRENT_USER, res.data)
      if (route.app && route.app.$route && route.app.$route.query && route.app.$route.query.redirect) {
        route.push({path: route.app.$route.query.redirect})
      } else {
        route.push({name: 'Profile'})
      }
    }).catch(err => {
      console.log(err)
      state.loging = false
    })
  },

  // 退出
  [types.AUTH_LOGOUT] ({commit}) {
    axios.post('/oaservice/api/security/logout').then(res => {
      commit(types.SET_CURRENT_USER, null)
    }).catch(err => {
      console.log(err)
      state.loging = false
    })
  },

  // 获取当前登录用户
  [types.AUTH_CURRENT_USER] ({commit}) {
    if (!localStorage.getItem('currentUserId')) return
    state.loging = true
    return axios.get('/oaservice/api/org/users/' + localStorage.getItem('currentUserId')).then(res => {
      commit(types.SET_CURRENT_USER, res.data)
    }).catch(err => {
      console.log(err)
      state.loging = false
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
