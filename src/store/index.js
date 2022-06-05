import { createStore } from "vuex";

export default createStore({
  state: {
    updateKey: 0,
  },
  getters: {
    forceUpdateKey(state) {
      return state.updateKey;
    },
  },
  mutations: {
    forceUpdate(state) {
      state.updateKey++;
    },
  },
  actions: {},
  modules: {},
});
