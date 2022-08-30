import { createStore } from "vuex";
import { clone, _typeof } from "../functions/helpers";

const store = createStore({
  state() {
    return {
      builders: [],
      selected: null,
    };
  },
  getters: {
    xBuilders: (state) => state.builders,
    getSelected: (state) => state.selected,
  },
  actions: {
    add: ({ commit }, item) => commit("add", item),
    update: ({ commit }, props) => commit("update", props),
    remove: ({ commit }, item) => commit("remove", item),
    set: ({ commit }, items) => commit("set", items),
    setSelect: ({ commit }, item) => commit("setSelect", item),
    removeSelected: ({ commit }) => commit("removeSelected"),
    settingOpen: ({ commit }, props) => commit("settingOpen", props),
  },
  mutations: {
    add: (state, item) => state.builders.push(item),
    update: (state, props) => {
      state.builders.forEach((h, i) => {
        if (h === props.item) {
          state.builders[i] = props.data;
          state.selected = props.data;
        }
      });
    },
    remove: (state, item) =>
      (state.builders = state.builders.filter((h) => h !== item)),
    set: (state, items) => (state.builders = items),
    setSelect: (state, item) => (state.selected = item),
    removeSelected: (state) => (state.selected = null),
    settingOpen: (state, item) => {
      state.selected = item;
    },
  },
});

export default store;
