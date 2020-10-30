import '@babel/polyfill'
import Vue from "vue";
import VueScrollTo from 'vue-scrollto'
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'animate.css'
import VueParticles from 'vue-particles'
import V_Session from 'v-session'
Vue.use(VueParticles)
Vue.config.productionTip = false;
Vue.use(VueScrollTo)
Vue.use(V_Session)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
