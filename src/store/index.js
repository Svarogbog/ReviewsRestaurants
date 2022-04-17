import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import restaurants from './restaurants';
import reviews from "./reviews";
export default new Vuex.Store({
    modules: {restaurants, reviews}
});
