import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@creativebulma/bulma-divider/dist/bulma-divider.css'

Vue.config.productionTip = false

Vue.use(Buefy);

export default new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')