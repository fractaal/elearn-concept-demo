import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'
import '@creativebulma/bulma-divider/dist/bulma-divider.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faComments, faBell, faSchool, faBookOpen, faSignOutAlt, faCog} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {ContentLoader} from 'vue-content-loader'

library.add(faComments, faBell, faSchool, faBookOpen, faSignOutAlt, faCog);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('content-loader', ContentLoader)

Vue.config.productionTip = false

Vue.use(Buefy);

export default new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')