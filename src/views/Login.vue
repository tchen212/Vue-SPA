<template>
  <table>
    <tr>
      <td><strong>{{ $t('auth.username') }}</strong></td>
      <td><input v-model="username" type="text" /></td>
    </tr>
    <tr>
      <td><strong>{{ $t('auth.password') }}</strong></td>
      <td><input v-model="password" type="password" /></td>
    </tr>
    <tr>
      <td colspan="2" align="center"><button @click="login">{{ $t('auth.login') }}</button></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('AUTH_LOGIN', {username: this.username, password: this.password})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



table{
  width: 50%;
  margin:20px auto;
  border-collapse: collapse;
}
th, td{
  padding-left: .5em;
  height: 30px;
  border: 1px solid #fff;
}
</style>
