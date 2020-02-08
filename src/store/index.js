import Vue from "vue";
import Vuex from "vuex";
import "babel-polyfill";
import state from "./state";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity(ctx, city) {
  //     ctx.commit("changeCity", city);
  //   }
  // },
  mutations,
  modules: {},
  getters: {
    doubleCity(state) {
      return state.city + " " + state.city;
    }
  }
});
