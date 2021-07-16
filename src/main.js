import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import Axios from 'axios';
import VueAxios from 'vue-axios';




import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App).use(store).use(router).use(VueAxios, Axios).mount('#app')

