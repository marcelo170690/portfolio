import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import bootstrap to projects
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import components from './components'

//import css global
import './assets/style.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
