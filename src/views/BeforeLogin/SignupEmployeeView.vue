<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <h3> SIGN UP </h3>
  <form>
    <div class="form">
      <label>NAME</label>
      <input type="text" class="form-control" id="InputName" placeholder="Enter your name" v-model="newEmployee.name" />
    </div>
    <div class="form">
      <label>DNI</label>
      <input type="text" class="form-control" id="InputDNI" placeholder="Enter your DNI" v-model="newEmployee.dni" />
    </div>
    <div class="form">
      <label>EMAIL</label>
      <input type="text" class="form-control" id="InputEmail" placeholder="Enter your EMAIL" v-model="newEmployee.email" />
    </div>
    <div class="form">
      <label>PASSWORD</label>
      <input type="password" class="form-control" id="InputPassword" placeholder="Enter your PASSWORD"
        v-model="newEmployee.password" />
    </div>
    <div class="form">
      <label>PHONE NUMBER</label>
      <input type="text" class="form-control" id="InputPhoneNumber" placeholder="Enter your PHONE NUMBER"
        v-model="newEmployee.phone" />
    </div>
    <div class="form">
      <label>ACCES CODE</label>
      <input type="text" class="form-control" id="InputPhoneNumber" placeholder="Enter your PHONE NUMBER"
        v-model="newEmployee.phone" />
    </div>
    <div>
      <button type="submit" class="btn btn-primary" @click.prevent="signupUser">Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newEmployee: {
        rol: 'technical',
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
      this.newEmployee.name = this.newEmployee.name.trim();
      this.newEmployee.dni = this.newEmployee.dni.trim();
      this.newEmployee.email = this.newEmployee.email.trim();
      this.newEmployee.password = this.newEmployee.password.trim();
      this.newEmployee.phone = this.newEmployee.phone.trim();
      const response = await API.signup(this.newEmployee)
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


