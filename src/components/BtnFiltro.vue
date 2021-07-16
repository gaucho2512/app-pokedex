<template>

     <div class="btnFiltro">
         <button class="btn all"><img src="../assets/vector-btn-responsive.png" alt="">All</button> 
         <button class="btn favorites"><img src="../assets/Vectobtn-star.png" alt="">Favorites</button>
     </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>

   .all , .favorites {
       font-size: 18px;
       font-weight: 700;
       border-radius: 22px;
       padding: 10px 120px;
   }

   .all {
        background: #F22539;
        color: #FFFFFF;
        margin-right: 20px;
   }

   .favorites {
        background: #F22539;
        color: #FFFFFF;
   }

   img {
       background: none;
       padding-right: 15px;
       position: relative;
       top: -2px;
       
   }

   .btnFiltro {
       display: flex;
       justify-content: center;
       align-items: center;
       padding-bottom: 40px;
       background: #FFFFFF;
       height: 100px;
       padding-top: 40px;
       margin-top: 30px;
   }

</style>