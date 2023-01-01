import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
// Composition API
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
