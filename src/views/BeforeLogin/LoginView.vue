<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
 
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="newUser.email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="newUser.password"/>
  </div>
  
  <button type="submit" class="btn btn-primary" @click.prevent="loginUser">LOGIN</button>
</form>

</template>

<script>
export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      },
      authStore: useAuthStore()
    }
  },
  methods: {
    async loginUser() {
      const response = await API.login(this.newUser)
      if (response.error) {
        alert('wrong username/password')
      } else {
        const {token, email, id, rol} = response
        this.authStore.login(token, email, id, rol)
        if( rol == "admin")
        {
          this.$router.push('unasignedRepairs');
        }
        else
        {
          this.$router.push('unasignedRepairs');
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  background-color: rgb(181, 229, 255);
  padding: 15px;
  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
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
