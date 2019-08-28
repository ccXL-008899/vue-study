<template>
    <div>
        <h1>Cart</h1>
        <table border="1">
            <tr>
                <th>#</th>
                <th>name</th>
                <th>price</th>
                <th>count</th>
                <th>total</th>
            </tr>
            <tr :key="index" v-for="(data,index) in cart" :class="{active:data.active}">
                <td><input type="checkbox" v-model="data.active"></td>
                <td>{{data.name}}</td>
                <td>{{data.price}}</td>
                <td><button @click="minus(index)">-</button>{{data.count}}<button @click="add(index)">+</button></td>
                <td>{{data.price * data.count}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="3">{{activeCount}} / {{count}}</td>
                <td>{{total}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'Cart4',
    data() {
        return {
            cart: []
        }
    },
    computed: {
        activeCount: function() {
            return this.cart.filter(v=>v.active).length
        },
        count: function() {
            return this.cart.length
        },
        total: function() {
            let num = 0
            this.cart.forEach(c=> {
                if(c.active) {
                    num += c.price * c.count
                }
            })
            return num
        }
    },
    created() {
        // 监听一下父组件添加商品事件
        this.$on('addCart', good=>{
            let ret = this.cart.find(v=>v.id===good.id)
            if(ret) {
                ret.count += 1
            }else {
                this.cart.push({
                ...good,
                count: 1
                })
            }
        })
    },
    methods: {
        minus: function(index) {
            let count = this.cart[index].count
            if(count > 1) {
                this.cart[index].count -= 1
            }else {
                this.remove(index)
            }
        },
        add: function(index) {
            this.cart[index].count += 1
        },
        remove: function(index) {
            if(window.confirm('delet this goood?')) {
                this.cart.splice(index,1)
            }
        }
    }
}
</script>
<style scoped>
    .active {
        color: red;
    }
</style>
