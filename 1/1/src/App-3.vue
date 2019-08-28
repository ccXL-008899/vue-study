<template>
  <div id="app">
    <h1>#循环语句</h1>
    <h2>##v-for</h2>
    <h3>###sample</h3>
    <ul>
      <li :key="index" v-for="(data,index) in goods">
        <p>goods name:{{data.name}}</p>
        <p>goods price:{{data.price}}</p>
      </li>
    </ul>
    <p>讲解：不要忘记加入key。</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      goods: [{
        name: 'name1',
        price: '100'
      },{
        name: 'name2',
        price: '200'
      },{
        name: 'name3',
        price: '300'
      }]
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  width: 300px;
  margin: 0 auto;
}
</style>
