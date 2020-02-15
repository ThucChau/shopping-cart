<template>
  <div id="app">
    <!-- khi click vao button nay thi se vao trang Order và button se ẩn đi -->
    <button @click="screen = true" :class="{active: screen == true}">Mời bạn vào đặt hàng</button>
    <Order v-show="screen == true"></Order>
  </div>
</template>

<script>
import Order from "./components/Order";
export default {
  name: 'App',
  components: {
    Order
  },
  data(){
    return {
      screen: false
    }
  }
}
</script>

<style scope>
.active {
  display: none;
}
</style>
