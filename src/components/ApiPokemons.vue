<template>



        <form @submit.prevent='buscarPokemons'> 
           <div class="input-group mb-3">
            
                <span class="input-group-text" id="input1"><img src="../assets/search.png" alt=""></span>
                <input
                type="text"
                class="form-control"
                placeholder="Search" 
                aria-label="Search" 
                aria-describedby="input1"
                id="buscador"
                name="pokemon"
                v-model="search">
           </div>
      </form> 

     <div class="apipokemons">

              <section v-if="errored">
                    <p>Lo sentimos, no es posible obtener la información en este momento, por favor intente nuevamente mas tarde</p>
              </section>

               <div v-if="loading" class="loading">       
                   <button class="btn" type="button" disabled>
                       <img src="../assets/Loader.png" alt="">
                       <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                       Loading...
                   </button>
              </div>  

              <div
                 v-for="(item,index) in arrayPokemons" :key="index.id">
                 <ol><li> 
                   <router-link
                   class="enlace-details"
                    to="/details" > 
                   {{item.name}}
                   </router-link>
                     
                 <span></span> <button> <img src="../assets/estrella-item.png" alt=""></button> </li></ol> 
              </div>  
     </div>
  
</template>

<script>

import axios from "axios"

export default {

        props: [
        'apiUrl'
    ],
   
      data() {
          return {
              arrayPokemons: [],
              name: '',
              url: '',
              loading: true,
              errored: false,
              search: '',
              id: ''
               
          }
      },



       mounted () {
          setTimeout(() => {
          this.getDatos(); 
          }, 2000);
      },

      
      methods: {

           getDatos () {
           axios.get('https://pokeapi.co/api/v2/pokemon')
           .then(data => {
            
            console.log(data.data.results);
            this.arrayPokemons = data.data.results
         })
           .catch((error) => {
           console.log(error);
           this.errored = true
         })
           .finally(() => this.loading = false
          )
              
          },

  },

  computed: {
       
          buscarPokemons() {
                this.arrayPokemons.filter((item) => {
             
                 return console.log(item.name.match(this.search)); 
                 
          
                })
                       
        },
  }

  

     





        
}
</script>

<style>

 body {
     height: 100%;
 }

 .apipokemons {
     justify-content: center;
     align-items: center;
     flex-direction: column;
     height: 60px;
   
     width: 45%;
     margin: auto;
 }

  .enlace-details {
      text-decoration: none;
      display: contents;
      color: #353535;
      width: 44%;
      background: #FFFFFF;
      font-size: 22px;
      font-weight: 500;
      position: relative;
      left: -140px;
  }

  .enlace-details:hover {
      color: #F22539;
  }

  


  ol li button {
     outline: none;
     border: none;
     background: none;
  }

   ol li button img {
       width: 80%;
       background: #FFFFFF;
  }

  li {
    list-style: none;
    background: #FFFFFF;
    width: 630px;
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
  }

  .loading {
       margin-top: 30px;
  }
     
  .loading button {
    background: #F9F9F9;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loading img {
     width: 100%;
     margin-bottom: 20px;
  }

  .input-group-text {
    background: #FFFFFF;
} 

.input-group {
    width: 45%;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 50px;
}

 

  

</style>