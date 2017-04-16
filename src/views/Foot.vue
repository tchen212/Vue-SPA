<template>
  <div class="footer">
      {{ $t('footer.copyright') }}
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background: #efefef;
  border-top: 1px solid #ccc;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
</style>
