import '@babel/polyfill'
import Vue from "vue";
import VueScrollTo from 'vue-scrollto'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import 'animate.css';
import V_Session from 'v-session';
// import VueParticles from 'vue-particles'
// import './plugins/vuetify'
// Vue.use(VueParticles)
Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(V_Session);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount("#app");
