<template>
<div id="fondo">
  <div id="Principal">
  <div>
    
  </div>
  <div>
    
  </div>
  <div>
    
  </div>
    <div id="botonizquierdo">
   <img id="imagen8" src="@/assets/prev.png" v-on:click="getForg"> 
  </div>
  <div>
     <form name="secundario">
        <img id="imagen0" src="@/assets/semi_doble_1.jpg">
        <img id="imagen1"  src="@/assets/semi_doble_2.jpg">
        <img id="imagen2" src="@/assets/semi_doble_3.jpg">
        <img id="imagen3" src="@/assets/cama_queen.jpg">
        <img id="imagen4" src="@/assets/habitacion_doble_cama.png">
        <img id="imagen5" src="@/assets/semi_doble_4.jpg">
      </form>
  </div>
  <div id="botonderecho">
    <img id="imagen7" src="@/assets/next.png" v-on:click="getNext">
  </div>

      <div>
    
  </div>
  <div>
    <form name="textos">
     <div id="bajoCentro" v-if="count == 1">
       <label >Habitación Gourmet </label><br>
       <label >Vista al mar </label><br>
       <label >Disponible </label>
      </div>
      <div v-else-if="count == 2">
      <label >Habitación Atena</label> <br>
      <label >Vista al mar </label><br>
      <label >Disponible </label>
      </div>
      <div v-else-if="count == 3">
      <label >Habitación Vintage</label> <br>
      <label >Vista al mar </label><br>
      <label >Disponible </label>
      </div>
      <div v-else-if="count == 4">
      <label >Habitación Queen</label> <br>
      <label >Vista a la cuidad </label><br>
      <label >Disponible </label>
      </div>
      <div v-else-if="count == 5">
      <label >Habitación cama doble</label> <br>
      <label >Vista a la cuidad </label><br>
      <label >Disponible </label>
      </div>
      <div v-else-if="count == 6">
      <label >Habitación King</label> <br>
      <label >Vista a la cuidad </label><br>
      <label >Disponible </label>
      </div>
          <label>{{count}}</label>
      </form>
  </div>
  <div>
    
  </div>

</div>
</div>

  
</template>

<script>
export default {
  name: "Inventario",
data: function(){
    return{
      count: 1,
    }

  },
  methods:{
    getNext(){
      this.count++
      if(this.count == 1){
        document.getElementById("imagen0").style.visibility = "visible";
      } else{
      if(this.count == 2){
      
      document.getElementById("imagen1").style.visibility = "visible";
      }else {
        if(this.count == 3){
          document.getElementById("imagen1").style.visibility = "hidden";
            document.getElementById("imagen2").style.visibility = "visible";
        }else{
            if(this.count == 4){
              document.getElementById("imagen2").style.visibility = "hidden";
                document.getElementById("imagen3").style.visibility = "visible";
            }else{
                if(this.count == 5){
                  document.getElementById("imagen3").style.visibility = "hidden";
                    document.getElementById("imagen4").style.visibility = "visible";
                }else{
                    if(this.count == 6){
                      document.getElementById("imagen4").style.visibility = "hidden";
                        document.getElementById("imagen5").style.visibility = "visible";
                    }else{
                      document.getElementById("imagen0").style.visibility = "visible";
                       document.getElementById("imagen5").style.visibility = "hidden";
                        this.count=1;

                    }
                    
                }
            }

        }
    }
}
      
    },
    getForg(){
      this.count--
      if(this.count == 1){
        document.getElementById("imagen0").style.visibility = "visible";
        document.getElementById("imagen1").style.visibility = "hidden"; 
      } else{
      if(this.count == 2){
      document.getElementById("imagen2").style.visibility = "hidden";
      document.getElementById("imagen1").style.visibility = "visible";
      }else {
        if(this.count == 3){
          document.getElementById("imagen3").style.visibility = "hidden";
            document.getElementById("imagen2").style.visibility = "visible";
        }else{
            if(this.count == 4){
              document.getElementById("imagen4").style.visibility = "hidden";
                document.getElementById("imagen3").style.visibility = "visible";
            }else{
                if(this.count == 5){
                  document.getElementById("imagen5").style.visibility = "hidden";
                    document.getElementById("imagen4").style.visibility = "visible";
                }else{
                    if(this.count == 6){
                      
                        document.getElementById("imagen5").style.visibility = "visible";
                    }else{
                      document.getElementById("imagen5").style.visibility = "visible";
                      document.getElementById("imagen0").style.visibility = "hidden";
                        this.count=6;

                    }
                    
                }
            }

        }
    }
}


    }
  },

    beforeCreate(){
      document.getElementById("imagen0").style.visibility = "visible";
    },

}


</script>

<style>


form[name="secundario"]{
  width: 302px;
  height: 302px;
  padding: 0px 0px;
  border: 1px solid blue;
}
form[name="textos"]{
  width: 304px;
  height: 150px;
  
}

  form img{
    width: 300px;
    height: 300px;
    position: absolute;
    visibility: hidden;
  }

  form img[id="imagen0"]{
    visibility: visible;
  }
  form input[type="image"]{
    width: 30px;
    height: 30px;
    background-color: transparent;
  }
  img[id="imagen7"]{
    visibility: visible;
    width: 30px;
    height: 30px;
    
  }
    img[id="imagen8"]{
    visibility: visible;
    width: 25px;
    height: 25px;
  }
    img[id="imagen8"]:hover{
      cursor: pointer;
  }
     img[id="imagen7"]:hover{
      cursor: pointer;
  }

  div[id="general"]{
    margin: auto;
    width: 500px;
    height: 550px;
    background-color: rgb(128, 88, 51);
  }

  div[id="izq"]{
    float: left;
    width: 60px;
    height: 550px;
    background-color: rgb(212, 0, 255);
    padding: 50% 0%;
  }
  div[id="center"]{
    background-color: rgb(123, 255, 0);
    width: 400px;
    
  }
  div[id="der"]{
    float: right;
    margin-top: 0px;
    width: 60px;
    height: 550px;
    background-color: rgb(52, 59, 59);
  }

  

div[id="fondo"]{
  background-image: url('../assets/img.jpg');
}


div[id="Principal"]{
  margin: auto;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: 50px 300px 50px;
  grid-template-rows: 100px 300px 100px;
  gap: 5px; 
  background: transparent;
}
div div{
  background: transparent;
}
div[id="botonizquierdo"]{
  background: transparent;
  margin: auto;
}

div[id="botonderecho"]{
  margin: auto;
  background: transparent;
}
label{
  color: #ccc;
}

</style>