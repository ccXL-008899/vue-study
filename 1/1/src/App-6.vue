<template>
  <div id="app">
    <h1>购物车</h1>
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
    <cart :cart="cart"></cart>
    <p>讲解：组件使用的时候最好cart是小写，如果是驼峰式的话，使用的时候使用-连字符。</p>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'

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
    Cart
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
