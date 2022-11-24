<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <h3> SIGN UP </h3>
  <form>
    <div class="form">
      <label>NAME</label>
      <input type="text" class="form-control" id="InputName" placeholder="Enter your name" v-model="newUser.name" />
    </div>
    <div class="form">
      <label>DNI</label>
      <input type="text" class="form-control" id="InputDNI" placeholder="Enter your DNI" v-model="newUser.dni" />
    </div>
    <div class="form">
      <label>EMAIL</label>
      <input type="text" class="form-control" id="InputEmail" placeholder="Enter your EMAIL" v-model="newUser.email" />
    </div>
    <div class="form">
      <label>PASSWORD</label>
      <input type="password" class="form-control" id="InputPassword" placeholder="Enter your PASSWORD"
        v-model="newUser.password" />
    </div>
    <div class="form">
      <label>PHONE NUMBER</label>
      <input type="text" class="form-control" id="InputPhoneNumber" placeholder="Enter your PHONE NUMBER"
        v-model="newUser.phone" />
      <div>
        <button type="submit" class="btn btn-primary" @click.prevent="signupUser">Sign Up</button>
      </div>
    </div>
  </form>
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
      this.newUser.name = this.newUser.name.trim();
      this.newUser.dni = this.newUser.dni.trim();
      this.newUser.email = this.newUser.email.trim();
      this.newUser.password = this.newUser.password.trim();
      this.newUser.phone = this.newUser.phone.trim();
      const response = await API.signup(this.newUser)
      if (response.error) {
        alert('Error creating account')
      } else {
        const { token, email, id, rol } = response
        this.authStore.login(token, email, id, rol)
        this.$router.push({ name: 'unasignedRepairs' })
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  padding: 15px;
  background-color: rgb(224, 233, 237);

  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}

.form-control {
  width: 300px;
}
</style>


