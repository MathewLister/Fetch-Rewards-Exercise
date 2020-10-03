export const state = () => ({
  data: []
});

export const actions = {
  async loadData({ commit }) {
    try {
      const tempData = await this.$axios.get("api/hiring.json");
      commit("SET_DATA", tempData);
      commit("CLEAN_DATA");
    } catch (err) {
      console.log(err);
    }
  },
  cleanData({ commit }) {
    commit("CLEAN_DATA");
  }
};

export const mutations = {
  SET_DATA(state, temp) {
    state.data = temp.data;
  },
  CLEAN_DATA(state) {
    const filtered = state.data.filter(function(item) {
      if (item.name === null || item.name === "") {
        return false;
      }
      return true;
    });
    state.data = filtered;
    console.log("CLEAN");
    console.log(state.data);
  }
};

export const getters = {
  getData(state) {
    return state.data;
  }
};
