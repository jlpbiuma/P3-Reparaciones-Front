<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="row">
  <div class="w-100">
    <div class="card">
      <div class="card-body d-flex flex-column">
        <h1 class="card-title ">WELCOME TO JVJ-REPAIRS!</h1>
        <p class="card-text"><h3 id="slogan">We solve problems</h3></p>
        <div class="row-sm img-right">
        <img  class="img" style="width: 45vw; float: right"  src="../../../images/devices.png">
        </div>
        <a href="#" class="btn align-self-center"><RouterLink to="/signup">GET STARTED!</RouterLink></a>
      </div>
    </div>
  </div>
  <div class="w-50">
    <div class="card">
      <div class="card-body d-flex flex-column">
        <p class="card-text"><h3>News</h3></p>
        <p class="card-text">No news for the moment</p>
        <div class="row-sm img-right">
        <img  class="img" style="width: 20vw; float: right" >
        </div>
      </div>
    </div>
  </div>
  <div class="w-50">
    <div class="card">
      <div class="card-body d-flex flex-column">
        <p class="card-text"><h3>Download our APP</h3></p>
        <div class="row-sm img-right">
        <img  class="img" style="width: 20vw; float: right"  src="../../../images/app.png">
        </div>
        <div class=" align-self-center">
        <button id="appbutton"><img  style="width:10vw" src="../../../images/apple.png"></button>
        <button id="appbutton"><img  style="width:10vw" src="../../../images/android.png" ></button>
      </div>
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
    border-color:  rgb(255, 255, 255);
    margin-bottom: 30px;
}
.btn{
 background-color: rgb(41, 41, 41);
 border: 1px  rgb(29, 29, 29);
}
.btn:hover {
      background-color: rgb(82, 82, 82) !important;
      border: 1px  rgb(82, 82, 82);
    }
 #appbutton{
  background-color: white;
  border:none;
  }
a{
text-decoration: none;
 color: white;
 cursor: pointer;
}
a:hover{
    color: rgb(255, 145, 0) ;
}
#slogan{
  color:rgb(87, 87, 87);
  font-style: italic;
}

</style>
