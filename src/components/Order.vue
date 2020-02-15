<template>
    <div class="order-product">
        <!-- Component danh sach san pham -->
        <h2>Order sản phẩm</h2>
        <ProductList />

        <!-- Component gio hang -->
        <Cart />
    </div>
</template>

<script>
import ProductList from "./ProductList";
import Cart from "./Cart";
    export default {
        data(){
            return {
                
            }
        },
        components: {
            ProductList,
            Cart
        }
    }
</script>

<style scoped>
h2 {
    text-align: center;
    text-transform: uppercase;
}
</style>