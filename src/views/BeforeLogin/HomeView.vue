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
        <p class="card-text"><h5>Apple and Google face gaming and mobile browser probe</h5></p>
        <img  class="img" style="width: auto; "  src="../../../images/gaming.jpg">
        <br>
        <p class="card-text">Apple and Google's dominance over cloud gaming and mobile browsers will be investigated by the UK's competition regulator, it has announced.

Last year, a "market study" by the Competition and Markets Authority (CMA) concluded they had a "stranglehold" over operating systems, app stores and web browsers on mobile devices.

If the 18-month investigation finds an adverse effect on competition, the CMA can impose changes.

Both companies deny the accusations.

CMA interim chief executive Sarah Cardell said it wanted to ensure UK:

<li>consumers received the best new mobile data services</li>
<li>developers could invest in innovative new apps</li></p>

        <div class="row-sm img-right">
        <img  class="img" style="width: fit-content; float: right" >
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
