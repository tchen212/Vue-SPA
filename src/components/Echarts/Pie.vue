<template>
  <div>
    <div class="echarts">
      <IEcharts :option="pie" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
    </div>
    <center><button @click="doRandom">Random</button></center>
  </div>
</template>

<script type="text/babel">
  import IEcharts from 'vue-echarts-v3/src/lite.vue'
  import 'echarts/lib/chart/pie'
  export default {
    name: 'Pie',
    components: {
      IEcharts
    },
    props: {
    },
    data: () => ({
      loading: false,
      pie: {
        title: {
          text: 'ECharts - Pie'
        },
        tooltip: {},
        xAxis: {
          data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'pie',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }),
    methods: {
      doRandom () {
        const that = this
        let data = []
        for (let i = 0, min = 5, max = 99; i < 6; i++) {
          data.push(Math.floor(Math.random() * (max + 1 - min) + min))
        }
        that.loading = true
        setTimeout(() => {
          that.loading = false
        }, 1000)
        that.bar.series[0].data = data
      },
      onReady (instance) {
        console.log(instance)
      },
      onClick (event, instance, echarts) {
        console.log(arguments)
      }
    }
  }
</script>

<style scoped>
  .echarts {
    width: 400px;
    height: 400px;
  }
</style>
