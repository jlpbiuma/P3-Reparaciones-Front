<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <h3> SIGN UP </h3>
  <form>
    <div class="form">
    <label>NAME</label>
    <input type="text" class="form-control" id="InputName" placeholder="Enter your name" v-model="newUser.name"/>

  </div>
  <div class="form">
    <label>DNI</label>
    <input type="text" class="form-control" id="InputDNI" placeholder="Enter your DNI" v-model="newUser.dni"/>
  </div>
  <div class="form">
    <label>EMAIL</label>
    <input type="text" class="form-control" id="InputEmail" placeholder="Enter your EMAIL" v-model="newUser.email"/>
  </div>
  <div class="form">
    <label>PASSWORD</label>
    <input type="password" class="form-control" id="InputPassword" placeholder="Enter your PASSWORD" v-model="newUser.password"/>
  </div>
  <div class="form">
    <label>PHONE NUMBER</label>
    <input type="text" class="form-control" id="InputPhoneNumber" placeholder="Enter your PHONE NUMBER" v-model="newUser.phone"/>
  <div>
    <button type="submit" class="btn btn-primary" @click.prevent="signupUser">Sign Up</button>
  </div>
    
    
  </div>

  </form>
  <!-- <main>
    <h1>SIGNUP</h1>
    <form class="form">
      <label>
        NAME
        <input type="text" v-model="newUser.name" />
      </label>

      <label>
        DNI
        <input type="text" v-model="newUser.dni"/>
      </label>

      <label>
        EMAIL
        <input type="email" v-model="newUser.email"/>
      </label>

      <label>
        PASSWORD
        <input type="password" v-model="newUser.password"/>
      </label>

      <label>
        PHONE NUMBER
        <input type="text" v-model="newUser.phone" />
      </label>

      <button @click.prevent="signupUser">SIGNUP</button>
    </form>
  </main> -->
  
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        name: '',
        dni: '',
        email: '',
        password: '',
        phone: ''
      },
      authStore: useAuthStore()
    }
  },
  methods: {
    async signupUser() {
      const response = await API.signup(this.newUser)
      if (response.error) {
        alert('Error creating account')
      } else {
        const {token, email, id, rol} = response
        this.authStore.login(token, email, id, rol)        
        // DE ESTA FORMA CAMBIAMOS LA VISTA DE UN VIEW DESDE UN VIEW!!
        this.$router.push({name: 'unasignedRepairs'})
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  padding: 15px;
  background-color: rgb(218, 218, 218);
  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}
.form-control{
  width: 300px;
}

button{
  margin-top: 30px;
  background-color:  rgb(41, 41, 41);
  border: 1px  rgb(29, 29, 29);
  color: white;
}
button:hover{
  color: rgb(255, 145, 0) ;
  background-color: rgb(82, 82, 82);
      border: 1px  rgb(82, 82, 82);
}
</style>


