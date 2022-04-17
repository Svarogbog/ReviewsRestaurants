import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import showRestaurants from "@/components/showRestaurants";
import showReviews from "@/components/showReviews";

import Vuelidate from 'vuelidate';
import store from './store';


import './assets/scss/main.scss';


Vue.config.productionTip = false;

const routes = [
    {
        path: '/',
        name: 'showRestaurants',
        component: showRestaurants,
    },
    {
        path: '/reviews/:id',
        name: 'showReviews',
        component: showReviews
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

// Vue.use(VueRouter);
// Vue.use(Vuelidate);
const arrayPlugins = [VueRouter, Vuelidate];
arrayPlugins.forEach((x) => Vue.use(x));


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
