<template>

 <div class="btn-padre"> 
     <router-link
     class="btn btn-get-started"
     to="/listpokemons"> 
     get started
     </router-link>
 </div>
    
    
    

</template>

<script>


export default {

 

}
</script>

<style scoped >

   .btn-padre {
       display: flex;
       justify-content: center;
       align-items: center;
   }

   .btn-get-started {
       margin: auto;
       display: block;
       margin-top: 40px;
       font-size: 18px;
       font-weight: 700;
       border-radius: 22px;
       background: #F22539;
       color: #FFFFFF;
   }

   .btn-get-started:hover {
       background: #8d1616;
       color: #c4c4c4;
   }

</style>