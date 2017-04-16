<template>
  <div class="hello">
    <h3>{{ $t('user.detail') }}</h3>
    <router-link :to="{name:'List'}">{{ $t('back') }}</router-link>
    <div class="detail">
      <strong>{{ $t('user.no') }}</strong> &nbsp;&nbsp;{{ detail.no }} </br>
      <strong>{{ $t('user.name') }}</strong> &nbsp;&nbsp;{{ detail.name }} </br>
      <strong>{{ $t('user.email') }}</strong> &nbsp;&nbsp;{{ detail.email }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      items: {
        1: {no: 1, name: 'Tom', email: 'tom@gmail.com'},
        2: {no: 2, name: 'Jim', email: 'Jim@gmail.com'},
        3: {no: 3, name: 'Scott', email: 'Scott@gmail.com'}
      },
      detail: {}
    }
  },
  created () {
    this.detail = this.items[this.$route.params.id]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.detail{
  width:300px;
  margin: 10px auto;
  text-align: left;
}
</style>
