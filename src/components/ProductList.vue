<template>
    <div class="product-list">
        <h2>Sản phẩm của cửa hàng</h2>
        <table>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th></th>
            </tr>
            <tr v-for="(product) in products" :key="product.id">
                <td>{{product.name}}</td>
                <td>{{product.price | currency}}</td>
                <td>
                    <button @click="addCart(product)">Thêm vào giỏ</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import {bus} from "../main";
    export default {
       data(){
           return {
               products: [
                   {id: 1, name: 'Iphone 4', price: 4000000, quantity: 1},
                   {id: 2, name: 'Iphone 5', price: 6000000, quantity: 1},
                   {id: 3, name: 'Iphone 6', price: 9000000, quantity: 1},
                   {id: 4, name: 'Iphone 7', price: 12000000, quantity: 1},
                   {id: 5, name: 'Iphone X', price: 18000000, quantity: 1},
               ],
           }
       },
       components: {
           
       },
       methods: {
           addCart(product){
               // muốn push các ptu từ Cpt này vào 1 array khác thì cần phải gửi ptu đó sang Cpt cần tiếp nhận
               bus.$emit('addToCart', product);
           }
        }
    }
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 30%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>