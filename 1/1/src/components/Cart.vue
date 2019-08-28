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
        </table>
    </div>
</template>
<script>
export default {
    name: 'cart',
    props: ['cart'],
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
