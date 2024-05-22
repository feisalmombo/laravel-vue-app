/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue').default;

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// const app = new Vue({
//     el: '#app',
// });

// import { createApp } from "vue";

// import App from "./App.vue";

// createApp(App).mount("#app");

// require("./bootstrap");


import { createApp } from 'vue';

import ExampleComponent from './components/ExampleComponent';

const app = createApp({})

app.component('example-component', ExampleComponent);

app.mount('#app');

require("./bootstrap");
