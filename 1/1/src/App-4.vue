<template>
  <div id="app">
    <h1>#事件处理</h1>
    <h2>##@ v-on</h2>
    <h3>###sample</h3>
    <p>购物清单</p>
    <ul v-if="lists.length>0">
      <li :key="index" v-for="(data,index) in lists">
        <p>goods name:{{data.name}}</p>
        <p>goods price:{{data.price}}</p>
      </li>
    </ul>
    <p>货物清单</p>
    <ul>
      <li :key="index" v-for="(data,index) in goods">
        <p>goods name:{{data.name}}</p>
        <p>goods price:{{data.price}}</p>
        <button @click="addGoods(data)">添加购物车</button>
      </li>
    </ul>
    <p>讲解：</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      lists: [],
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
  },
  methods: {
    addGoods: function(data) {
      this.lists.push(data)
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
