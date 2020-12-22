<template>
<div>
          <input v-model="userData.username" type="text" placeholder="Usuario">
          <button v-on:click="InfoUser">Buscar</button>

    <h1>Perfil Usuario</h1>
    
    <div v-if = NoSee >
    <p>
        username: <span>{{userData.username}}</span><br>
        document: <span>{{userData.document}}</span><br>
        tipoDocument: <span>{{userData.tipoDocument}}</span><br>
        email: <span>{{userData.email}}</span><br>
        firstname: <span>{{userData.firstname}}</span><br>
        lastName: <span>{{userData.lastName}}</span><br>
        phone: <span>{{userData.phone}}</span><br>
    </p>
    </div>
</div>
</template>

<script>

  import axios from 'axios'
  export default {
    name: "VistaUser",
    data(){
      return {
        userData: {
              username: "",
              document: "",
              tipoDocument: "",
              email: "",
              firstname: "",
              lastName: "",
              phone: "",
        },
        NoSee: false 
      };
    },
    methods: {
      InfoUser(){
        this.axios.get("https://ourhotel-api.herokuapp.com/user/perfil/" + this.userData.username)
        //this.axios.get("http://127.0.0.1:8000/user/perfil/" + this.userData.username)
        .then((result)=>{
        console.log(result.data)
        if (result.status == 200) {
                    this.userData.username = result.data.username
                    this.userData.document = result.data.document
                    this.userData.tipoDocument = result.data.tipoDocument
                    this.userData.email = result.data.email
                    this.userData.firstname = result.data.firstname
                    this.userData.lastName = result.data.lastName
                    this.userData.phone = result.data.phone
                    this.NoSee = true
                }
            })
                    .catch((error) => {
                    alert(error.response.data.detail);
                    //alert("ERROR Servidor");
            });
      }
    },
  };

</script>

<style>
  
</style>