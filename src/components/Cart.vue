<template>
    <div class="cart-product">
        <h3>Giỏ hàng của bạn</h3>
        <table>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th></th>
            </tr>
            <tr v-show="products.length == 0">
                <td class="not-product">Bạn chưa có sản phẩm nào trong giỏ hàng.</td>
            </tr>
            <tr v-for="product in products" :key="product.id">
                <td>{{product.name}}</td>
                <td>{{product.price | currency}}</td>
                <td>
                    <input type="number" v-model="product.quantity">
                </td>
                <td>
                    <button @click="removeProduct(product)">Xóa sản phẩm</button>
                </td>
            </tr>
            <tr v-show="products.length > 0">
                <td>Tổng giá trị đơn hàng: {{totalOrder | currency}}</td>
            </tr>
            <tr v-show="products.length > 0 && discount > 0">
                <td>Giảm giá sản phẩm: {{discount}}%</td>
            </tr>
            <tr v-show="products.length > 0">
                <td>Tổng hóa đơn phải trả: {{totalCart | currency}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { bus } from "../main";
    export default {
        components: {

        },
        data(){
            return {
                products: [],
                totalOrder: 0,
                totalCart: 0,
                discount: 0
            }
        },
        mounted() {
            // lang nghe event 'addToCart' và dữ liệu 'product' được truyền tới
            bus.$on('addToCart', (product) => {
                if(this.products.indexOf(product) !== -1){
                    window.alert('Sản phẩm này đã tồn tại.')
                }else {
                    this.products.push(product);
                }
            })
        },
        methods: {
            removeProduct(product){
                var posProduct = this.products.indexOf(product);
                if(posProduct !== -1){
                    this.products.splice(posProduct,1);
                }
            },
            Cartcalculate(){
                let totalOrder = 0;
                this.products.forEach(product => {
                    totalOrder += (product.price * product.quantity);
                })
                this.totalOrder = totalOrder;

                if(this.totalOrder > 25000000){
                    this.discount = 5;
                }
                if(this.totalOrder > 40000000){
                    this.discount = 8;
                }
                
                this.totalCart = (100 - this.discount)* this.totalOrder/100;
            }
        },
        watch: {
            products: {
                handler(){
                    this.Cartcalculate();
                },
                deep: true,
                immediate: true
            }
        }
    }
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.not-product {
    color: #ff0202;
}
</style>