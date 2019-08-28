<template>
  <div id="app">
    <h1>#组件传值</h1>
    <p>前提：任意两个组件之间的传值问题。</p>
    <h2>总线模式</h2>
    <h2>录入商品信息</h2>
    <p>name:<input type="text" v-model="name"></p>
    <p>price:<input type="text" v-model="price"></p>
    <button @click="addGoods">添加</button>
    <h2 v-if="goods.length>0">商品列表</h2>
    <ul v-if="goods.length>0">
      <li :key="index" v-for="(data,index) in goods">
        <p>goods name:{{data.name}}</p>
        <p>goods price:{{data.price}}</p>
        <button @click="addCarts(index)">添加购物车</button>
      </li>
    </ul>
    <cart3></cart3>
    
  </div>
</template>

<script>
import Cart3 from './components/Cart3.vue'

export default {
  name: 'app',
  data() {
    return {
      name: '',
      price: '',
      id: 0,
      cart:[],
      goods: []
    }
  },
  components: {
    Cart3
  },
  methods: {
    addGoods: function() {
      let obj = {}
      obj.name = this.name
      obj.price = this.price
      obj.id = this.id
      obj.active= false
      this.id++
      this.goods.push(obj)
    },
    addCarts: function(index) {
      let good = this.goods[index]
      this.$emit('addCart', good)
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
