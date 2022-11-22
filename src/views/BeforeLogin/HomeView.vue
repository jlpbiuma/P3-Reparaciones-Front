<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"> <h1>WELCOME TO JVJ-REPAIRS! </h1></h5>
        <p class="card-text"><h3>We solve problems</h3></p>
        <a href="#" class="btn btn-primary"><RouterLink to="/signup">GET STARTED!</RouterLink></a>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
};
</script>

<style scoped >
.card{
    border-color:  rgb(245, 245, 245);

}
.btn{
 background-color: rgb(41, 41, 41);
 border: 1px  rgb(29, 29, 29);

}
.btn:hover {
      background-color: rgb(40, 42, 68) !important;
      border: 1px  rgb(40, 42, 68);
    }
a{
text-decoration: none;
 color: white;
 cursor: pointer;

}
a:hover{
    color: rgb(0, 255, 98) ;
}

</style>
