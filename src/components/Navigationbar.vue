<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
</script>

<template>
  <!-- COMMON MENU NAVITEMS -->
  <!-- LOGOUT NAVITEMS -->
  <!--  <div v-if="!authStore.isLoggedIn"> -->
  <!-- LOGGED IN NAVITEMS -->
  <!--   <div v-else> -->
 
  <nav class="navbar fixed-top navbar-expand bg-dark" style="width:100%;">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">
        <RouterLink to="/"><img src="../../images/JVJ_REPAIRS.png" style="width:20vw; max-width: 200px"></RouterLink>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink to="/contact">Contact</RouterLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <RouterLink to="/about">About</RouterLink>
            </a>
          </li>
          <li class="nav-item" v-if="!authStore.isLoggedIn">
            <a class="nav-link active" href="#" role="button">
              <RouterLink to="/signup"><button id="btn">Sign Up</button></RouterLink>
            </a>
          </li>
          <li class="nav-item" v-if="!authStore.isLoggedIn" >
            <a class="nav-link active" href="#" role="button">
              <RouterLink to="/login"><button id="btn">Login</button></RouterLink>
            </a>
          </li>
          <div v-else class="d-flex">
            <li class="nav-item ">
              <a class="nav-link" href="#" role="button" aria-expanded="false">
               <RouterLink to="/unasignedRepairs">My repairs</RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <RouterLink to="/profile">
                  <button id="profile"></button>
                  {{ authStore.userEmail }}
                </RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"> <button id="btn" @click="logout">Logout</button></a>
            </li>
          </div>
          </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
export default {
  data() {
    return {
      authStore: useAuthStore()
    }
  },
  methods: {
    logout() {
      this.authStore.logout()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
#btn{
  background-color: rgb(255, 136, 0);
  border-color:  rgb(255, 136, 0);
  color:white;
}
#btn:hover{
  background-color: rgb(255, 196, 0);
  border-color:  rgb(255, 174, 0);
  color: black;

}

#log{
  justify-content: flex-end;
}

nav {
  display: flex;
  flex-wrap: wrap;
}

a {
  color: white;
  text-decoration-line: none;
}

a:hover {
  color: rgb(255, 145, 0);
}

button {
  border-radius: 7px;
  height: 30px;
}

#profile {
  border-radius: 50px;
  height: 20px;
  width: 20px;
  background-color: greenyellow;
}
</style>