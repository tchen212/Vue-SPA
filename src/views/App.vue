<template>
  <div id="app">
    <BeerHeader></BeerHeader>
    <div class="content">
      <router-view></router-view>
    </div>
    <BeerFooter></BeerFooter>
    <div class="loading" v-show="GET_LOGING">{{ $t('loading') }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BeerHeader from '@/views/Head'
import BeerFooter from '@/views/Foot'
export default {
  name: 'app',
  components: {
    BeerHeader,
    BeerFooter
  },
  computed: {
    ...mapGetters(['GET_LOGING'])
  }
}
</script>

<style>
a {
  color: #42b983;
}
#app {
  position: relative;
  font-size: 12px;
  width: 40%;
  margin: 60px auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border: 1px solid #ccc;
}
.loading {
  position: absolute;
  width: 100%;
  padding-top: 15%;
  background-color: #333;
  opacity: .5;
  color: #fff;
  text-align: center;
  height: 100%;
  top: 0;
  font-size: 16px;
}
.content {
  padding: 10px;
}
</style>
