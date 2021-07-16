<template>
  <div class="welcome">

       <img class="pikachu" src="../assets/pikachu.png" alt="imagen-pikachu">
  
      <Welcome 
      titulo="Welcome to Pokédex"
      parrafo="The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world." />

      <GetStarted />

 

    
  
  </div>
</template>

<script>

import GetStarted from '../components/GetStarted.vue'
import Welcome from '../components/Welcome.vue'



export default {

      data() {
        return {
          
              
        }
      },


  components: {
     GetStarted,
     Welcome,
   
    

    
  }
}
</script>


<style scoped>

  .welcome {
     height: 100vh;
  }

   img {
     width: 20%;
     margin: auto;
     display: block;
     padding-top: 80px;
     padding-bottom: 60px;
  }

</style>
