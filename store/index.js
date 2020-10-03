export const state = () => ({
  data: [],
  groupOne: [],
  groupTwo: [],
  groupThree: [],
  groupFour: []
});

export const actions = {
  // 1. Get list from server
  // 2. Store data
  // 3. Remove objects with name as null or "" and sort by name
  // 4. Group data by listId
  async nuxtServerInit({ commit }) {
    try {
      const tempData = await this.$axios.get("api/hiring.json");
      commit("SET_DATA", tempData);
      commit("CLEAN_DATA");
      commit("GROUP_DATA");
    } catch (err) {
      console.log(err);
    }
  }
};

export const mutations = {
  // Save data to the apps state
  SET_DATA(state, temp) {
    state.data = temp.data;
  },
  // Remove if name is null or "" then sort by name
  CLEAN_DATA(state) {
    const filtered = state.data
      .filter(item => {
        if (item.name === null || item.name === "") {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        return -1;
      });
    state.data = filtered;
  },
  // Make groups based on listId
  GROUP_DATA(state) {
    state.groupOne = state.data.filter(item => item.listId === 1);
    state.groupTwo = state.data.filter(item => item.listId === 2);
    state.groupThree = state.data.filter(item => item.listId === 3);
    state.groupFour = state.data.filter(item => item.listId === 4);
  }
};

// For accessing data in components
export const getters = {
  getGroupOne(state) {
    return state.groupOne;
  },
  getGroupTwo(state) {
    return state.groupTwo;
  },
  getGroupThree(state) {
    return state.groupThree;
  },
  getGroupFour(state) {
    return state.groupFour;
  }
};
