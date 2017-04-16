import Vue from 'vue'
import Vuex from 'vuex'
// import UserData from './modules/userData.js'
import AuthData from './modules/authData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthData
  }
})
