import Vue from 'vue'
import App from './App.vue'
import VueCurrencyFilter from 'vue-currency-filter'
Vue.config.productionTip = false
export const bus = new Vue();

if (VueCurrencyFilter) {
  Vue.use(VueCurrencyFilter, {
    symbol: 'đ',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: '.',
    symbolPosition: 'end',
    symbolSpacing: true
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app')
