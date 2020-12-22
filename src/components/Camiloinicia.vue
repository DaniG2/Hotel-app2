<template>
<body>
    <div  id="myForm" class="cajaFondo">
        <form @submit="postData" method="POST" class="form">
          <h3>Login</h3>
            <i class="fas fa-user"></i>
            <input v-model="datosLogin.username" type="text" class="input-field" 
                placeholder="Username" required><br>
            <i class="fas fa-lock"></i>
            <input v-model="datosLogin.password" type="password" class="input-field" 
                placeholder="Password" required><br>

          <!-- <input type="submit" value="Login"> -->
            <button v-on:click ="traigaCami" type="submit" class="submit-btn" value="Login">Login</button> 

        </form>
      </div>
</body>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)

    var please = false;

    export default {
        name: "vistaPost",
        data(){
            return {
              datosLogin:{
                username: null,
                password: null,
                
              },
              is_auth: false
            };
        },
          components: {
        },

        methods: {
            postData(e){
                this.axios.post("https://ourhotel-api.herokuapp.com/user/login/", this.datosLogin)
                //this.axios.post("http://localhost:8000/user/login/", this.datosLogin)
                .then((result)=>{
                    console.log(result.data);
                    let is_auth = true
                    please = true
                    //this.$router.push({name: "VistaUser"})
                    
                })
                .catch(error=>{
                        console.log(error.response)
                        alert(error.response.data.detail);
                })
                e.preventDefault();
            },
            traigaCami(){
                if (please){
                this.$router.push({name:"VistaUser"})
            }
            },   
        },
    };
</script>

<style>

  .form{
    width: 280px;
    height: 270px;
    position: relative;
    margin: 6% auto;
    background: rgba(235, 245, 243, 0.65);
    padding: 5px;
  }
  .input-field{
    widows: 100%;
    padding: 10px 0;
    margin: 5px 0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;
  }
  .submit-btn{
     widows: 85%;
    padding: 1px 30px;
    cursor: pointer;
    display: block;
    margin: auto;
    background: linear-gradient(to right,   #4caf50, #4ca7af);
    border: 0;
    outline: none;
    border-radius: 30px;
  }
  .form h3{
    width: 20%;
    text-align: center;
    color: #283747;
    margin: 15px;
    font-size: 50px
  }
</style>