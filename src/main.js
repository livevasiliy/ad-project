// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import * as Firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import store from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    Firebase.initializeApp({
      apiKey: 'AIzaSyBZrsPYvGIdIFM2Fb3680RL7Nn5UXvD0QA',
      authDomain: 'ad-vue.firebaseapp.com',
      databaseURL: 'https://ad-vue.firebaseio.com',
      projectId: 'ad-vue',
      storageBucket: 'ad-vue.appspot.com',
      messagingSenderId: '527122088432'
    })
  }
})
