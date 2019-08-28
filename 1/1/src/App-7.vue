<template>
  <div id="app">
    <h1>#计算属性 computed</h1>
    <p>讲解：需要额外加工data中数据的时候使用。</p>
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
    <cart2 :cart="cart"></cart2>
    <h2>computed和watch的区别</h2>
    <p>watch观察某些变量发生变化，额外在做某些处理。</p>
  </div>
</template>

<script>
import Cart2 from './components/Cart2.vue'

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
    Cart2
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
      let ret = this.cart.find(v=>v.id===good.id)
      if(ret) {
        ret.count += 1
      }else {
        this.cart.push({
          ...good,
          count: 1
        })
      }
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
