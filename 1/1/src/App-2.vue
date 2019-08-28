<template>
  <div id="app">
    <h1>#条件语句</h1>
    <p>{{message}}</p>
    <h2>##v-if</h2>
    <h3>###sample</h3>
    <p @click="clickEvent1">请点击</p>
    <p v-if="flg1">{{message}}</p>
    <p>讲解：不会有DOM节点</p>
    <h2>##v-show</h2>
    <h3>###sample</h3>
    <p @click="clickEvent2">请点击</p>
    <p v-show="flg2">{{message}}</p>
    <p>讲解：相当于<code>display:none;</code></p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      message: 'Hello World!',
      flg1: true,
      flg2: true
    }
  },
  methods: {
    clickEvent1: function(){
      this.flg1 = !this.flg1
    },
    clickEvent2: function(){
      this.flg2 = !this.flg2
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
