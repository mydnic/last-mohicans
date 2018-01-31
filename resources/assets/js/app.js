require('./bootstrap');

// Imports
import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue Use
Vue.use(VueRouter);

// In App Imports
import router from './routes';

new Vue({
    el: '#app',
    router: new VueRouter(router)
});
