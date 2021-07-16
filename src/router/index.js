import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
   path: '/listPokemons',
   name: 'Listpokemons',
   
   component: () => import(/* webpackChunkName: "about" */ '../views/ListPokemons.vue')
  } ,

  {
    path: '/details',
    name: 'Details',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
   } ,


   {
    path: '/favList',
    name: 'Favlist',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/FavList.vue')
   } ,

 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
