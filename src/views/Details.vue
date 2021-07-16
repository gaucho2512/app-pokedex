<template>
    
       <div class="modal-details">
           <div class="details">
            <img src="../assets/fondo-modal.png" alt="">
          
            <h3>Name:</h3>
             <hr>
            <h3>Height:</h3>
             <hr>
            <h3>Weight:</h3>
             <hr>
            <h3>Types:</h3>
             <hr>
            <div class="final">
                  <button >Share to my friends</button>
                  <a href=""><img class="star" src="../assets/star-Active.png" alt=""></a> 
            </div>
          
           </div>
            
       </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.modal-details {
    display: flex;
    background: #000000;
    opacity: 0.8;
    widows: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.details {
    width: 350px;
    height: 550px;
    background: #FFFFFF;
    border-radius: 12px;
}

img {
    width: 100%;
}

h3 {
    font-size: 18px;
    font-weight: 500;
    color: #5E5E5E;
    background: #FFFFFF;
    padding: 10px
}

hr {
    widows: 80%;
    margin: auto;
}

button {
    display: block;
    margin-left: 50px;
    margin-top: 35px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 22px;
    background: #F22539;
    color: #FFFFFF;
    border: none;
}

.star {
    width: 100%;
    background: none;
    position: relative;
    top: 8px;
    left: 40px;
}

.final {
    background: #FFFFFF;
    display: flex;
    align-items: flex-end;
}

</style>