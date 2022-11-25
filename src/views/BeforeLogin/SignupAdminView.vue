<script setup>
import API from '../../services/api.js'
import { useAuthStore } from '../../stores/authStore'
</script>

<template>
  <h3> SIGN UP </h3>
  <form>
    <div class="form">
      <label>NAME</label>
      <input type="text" class="form-control" id="InputName" placeholder="Enter your name" v-model="newAdmin.name" />
    </div>
    <div class="form">
      <label>DNI</label>
      <input type="text" class="form-control" id="InputDNI" placeholder="Enter your DNI" v-model="newAdmin.dni" />
    </div>
    <div class="form">
      <label>EMAIL</label>
      <input type="text" class="form-control" id="InputEmail" placeholder="Enter your EMAIL" v-model="newAdmin.email" />
    </div>
    <div class="form">
      <label>PASSWORD</label>
      <input type="password" class="form-control" id="InputPassword" placeholder="Enter your PASSWORD"
        v-model="newAdmin.password" />
    </div>
    <div class="form">
      <label>PHONE NUMBER</label>
      <input type="text" class="form-control" id="InputPhoneNumber" placeholder="Enter your PHONE NUMBER"
        v-model="newAdmin.phone" />
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
      newAdmin: {
        rol: 'admin',
        name: '',
        dni: '',
        email: '',
        password: '',
        phone: '',
        accesCode: ''
      },
      authStore: useAuthStore()
    }
  },
  methods: {
    async signupUser() {
      this.newAdmin.name = this.newAdmin.name.trim();
      this.newAdmin.dni = this.newAdmin.dni.trim();
      this.newAdmin.email = this.newAdmin.email.trim();
      this.newAdmin.password = this.newAdmin.password.trim();
      this.newAdmin.phone = this.newAdmin.phone.trim();
      const response = await API.signup(this.newEmployee)
      if (response.error) {
        alert('Error creating account')
      } else {
        const { token, email, id, rol } = response
        this.authStore.login(token, email, id, rol)
        // DE ESTA FORMA CAMBIAMOS LA VISTA DE UN VIEW DESDE UN VIEW!!
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


