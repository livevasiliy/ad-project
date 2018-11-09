import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

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
    fb.initializeApp({
      apiKey: 'AIzaSyBZrsPYvGIdIFM2Fb3680RL7Nn5UXvD0QA',
      authDomain: 'ad-vue.firebaseapp.com',
      databaseURL: 'https://ad-vue.firebaseio.com',
      projectId: 'ad-vue',
      storageBucket: 'ad-vue.appspot.com',
      messagingSenderId: '527122088432'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
