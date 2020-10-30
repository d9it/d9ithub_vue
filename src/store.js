import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      activeRoute: 'home'
    },
    getters: {},
    mutations: {
      CHANGE_STATE(state, value) {
          state[value[0]] = value[1]
      },
    },
    actions: {
      ACTION_CHANGE_STATE(context, value) {
          context.commit('CHANGE_STATE', value)
      }
    },
});
