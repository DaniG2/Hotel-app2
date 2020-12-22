<template>

 <div id="app" class="app">

    <div class="header">

      <h1>OurHotel</h1>
      <nav>
        <button v-on:click="init"> Inicio </button>
        <!-- <button v-if="is_auth"> Perfil </button> -->
        <button v-on:click="inventar"> Habitaciones </button>

      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>  
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>


  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: function(){
      return {
      };
    },
    methods: {
      init: function(){
        if(this.$route.name != "Inicio"){
          this.$router.push({name: "Inicio"})
        }
      },
      inventar: function(){
        if(this.$route.name != "Inventario"){
          this.$router.push({name: "Inventario"})
        }
      },
    }, 
      beforeCreate: function(){
       this.$router.push({name:"Inicio"})
    },
  };
</script>

<style>
  body{
    margin: 0 0 0 0;
  }

  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh; 
    min-height: 100px;

    background-color: #283747 ;
    color:rgb(253, 158, 4);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 40%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }

  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;

    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #e2470ad3;
    background: #E5E7E9;
    border: 1px solid #283747;
  }

  
  .main-component{
    height: 80vh;
    margin: 0%;
    padding: 1%;
    background-image: url('./assets/img.jpg');
    background-position: center;
    background-size: cover;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px; 

    background-color: #283747;
    color: #E5E7E9;

  }

  .footer h2{
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>