import { createStore } from 'vuex'

export default createStore({
  state: {
/* 
    pokemones: [],
    pokemon: {
      url: '',
      name: '',
    } , 

    showLoading: false,*/

  },

  mutations: {

   /*  consumirApi(state , payload) {
      state.pokemones = payload;
    }, 

    loadingSpinner(state , payload) {
      state.showLoading = payload;
     
    } */

  },

  actions: {

  
 /*    async consumirApi({ commit }) {


     try {
       const res = await fetch('https://pokeapi.co/api/v2/pokemon')
       const data = await res.json()
       const arrayPoke= []

        for (let id in data){
          arrayPoke.push(data[id])
        }
        commit('consumirApi', arrayPoke)

         const pokemones = data.results
        console.log(pokemones); 

     } catch (error) {
       console.log(error);
     } 
    } */

  },

  modules: {
  }
})
