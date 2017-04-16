<template>
  <table>
    <tr>
      <td><strong>{{ $t('auth.username') }}</strong></td>
      <td>{{ GET_CURRENT_USER && (GET_CURRENT_USER.fullname || GET_CURRENT_USER.username) }}</td>
    </tr>
    <tr>
      <td><strong>账户名</strong></td>
      <td>{{ GET_CURRENT_USER && GET_CURRENT_USER.account }}</td>
    </tr>
    <tr>
      <td><strong>费用中心</strong></td>
      <td>
        {{ GET_CURRENT_USER && GET_CURRENT_USER.costcenter && GET_CURRENT_USER.costcenter.name }}
      </td>
    </tr>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['GET_CURRENT_USER'])
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
  border: 1px solid #333;
}
</style>
