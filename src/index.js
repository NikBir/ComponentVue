// JS
import './js/'

// SCSS
import './assets/scss/main.scss'
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
import store from './store'

// Vue components (for use html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
    store,
    el: '#app'
})