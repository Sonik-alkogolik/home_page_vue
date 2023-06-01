import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "hello vuex",
  },
  mutation: {
    setMessage(state) {
      state.message = "hello again";
    },
  },
  actions: {
    setMessage({ commit }) {
      commit("setMessage");
    },
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
  },
});
