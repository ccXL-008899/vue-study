<template>
  <div id="app">
    <p>name:<input type="text" v-model="text"></p>
    <p>price:<input type="text" v-model="price"></p>
    <button @click="addGoods">添加</button>
    <ul v-if="goods.length>0">
      <li :key="index" v-for="(data,index) in goods">
        <p>goods name:{{data.name}}</p>
        <p>goods price:{{data.price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      text: '',
      price: '',
      goods: []
    }
  },
  methods: {
    addGoods: function() {
      let obj = {}
      obj.name = this.text
      obj.price = this.price
      this.goods.push(obj)
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
  width: 800px;
  margin: 0 auto;
}
</style>
