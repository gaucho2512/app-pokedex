<template>
       
     <div class="container">
        <h1>{{titulo}}</h1>
        <p>{{parrafo}}</p>
    </div>

</template>

<script>
export default {

  props: {
      titulo: String,
      parrafo: String
  }

}
</script>

<style>

  .container h1 {
      font-size: 26px;
      font-weight: 700;
      line-height: 31px;
      color: #353535;
      text-align: center;
      padding-bottom: 20px;
  }

  .container p {
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
      color: #5E5E5E;
      text-align: center;
  }

</style>