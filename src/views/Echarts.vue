<template>
  <div style="text-align: right;">
    <router-link :to="{name: 'Bar'}">Bar</router-link>&nbsp;&nbsp;
    <router-link :to="{name: 'Pie'}">Pie</router-link>&nbsp;&nbsp;
    <router-link :to="{name: 'Line'}">Line</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Echarts'
  }
</script>

<style scoped>
</style>
