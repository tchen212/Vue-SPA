<template>
  <div class="header">
    <div class="header-logo">
      <router-link :to="{name: 'List'}"><img src="./../assets/logo.png" height="30"></router-link>
      <router-link :to="{name: 'List'}">{{ $t('user.list') }}</router-link>
      <router-link :to="{name: 'Bar'}">Echarts</router-link>
    </div>
    <div class="header-tool">
      <select v-model="locale" @change="$i18n.locale = locale">
        <option value="en" selected>english</option>
        <option value="zh">中文</option>
      </select>
      <router-link :to="{name: 'Profile'}">{{ GET_CURRENT_USER && (GET_CURRENT_USER.fullname || GET_CURRENT_USER.username)}}</router-link>
      <router-link v-show="!GET_CURRENT_USER" :to="{name: 'Login'}">{{ $t('auth.login') }}</router-link>
      <button v-show="GET_CURRENT_USER" @click="logout">{{ $t('auth.logout') }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      locale: 'zh'
    }
  },
  computed: {
    ...mapGetters(['GET_CURRENT_USER'])
  },
  created () {
    this.$store.dispatch('AUTH_CURRENT_USER')
  },
  methods: {
    logout () {
      this.$store.dispatch('AUTH_LOGOUT')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  background: #efefef;
}

.header .header-logo {
  float: left;
  margin-top: 10px;
  padding-left: 5px;
}

.header .header-tool {
  float: right;
  padding-right: 5px;
}
</style>
