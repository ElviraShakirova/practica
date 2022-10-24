import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {};

export const actions = {
  async getCountries() {
    const response = await axios.get('https://api.covid19api.com/countries');
    return response?.data || [];
  },
};

export const mutations = {
  update(state, data) {
    Object.keys(data).forEach((key) => {
      state[key] = data[key];
    });
  },
};

const initState = {
  state,
  namespaced: true,
  mutations,
  actions,
  getters: {},
};

const store = new Vuex.Store({
  ...initState,
});

export default store;
