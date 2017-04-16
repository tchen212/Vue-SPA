<template>
  <div class="hello">
    <h3>{{ $t('user.list') }}</h3>
    <table>
      <thead>
        <tr>
          <th>{{ $t('user.no') }}</th>
          <th>{{ $t('user.name') }}</th>
          <th>{{ $t('user.email') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td style="text-align:center;width:40px;"><router-link :to="{name: 'Detail', params: {id: item.no}}">{{ item.no }}</router-link></td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      items: [
        {no: 1, name: 'Tom', email: 'tom@gmail.com'},
        {no: 2, name: 'Jim', email: 'Jim@gmail.com'},
        {no: 3, name: 'Scott', email: 'Scott@gmail.com'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

table{
  width: 100%;
  margin:20px auto;
  border-collapse: collapse;
}
th, td{
  padding-left: .5em;
  height: 30px;
  border: 1px solid #333;
}
</style>
