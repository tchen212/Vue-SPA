<template>
  <div id="app">
    <BeerHeader></BeerHeader>
    <router-view></router-view>
    <BeerFooter></BeerFooter>
  </div>
</template>

<script>
import BeerHeader from '@/views/Head'
import BeerFooter from '@/views/Foot'
export default {
  name: 'app',
  components: {
    BeerHeader,
    BeerFooter
  }
}
</script>

<style>
#app {
  width: 500px;
  margin: 60px auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
