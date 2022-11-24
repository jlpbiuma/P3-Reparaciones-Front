<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="row" >
  <div class="w-100" >
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
  <div class="row" style="margin-bottom:200px; height:80vw;">
  <div class="col-sm-6" >
    <div class="card w-100" id="news" style="height:80vw">
      <div class="card-body d-flex flex-column" >
        <p class="card-text"><h3>News</h3></p>
        <p class="card-text"><h5>Apple and Google face gaming and mobile browser probe</h5></p>
        <img  class="img" style="width: auto; "  src="../../../images/gaming.jpg">
        <br>
     
        <p>
        Apple and Google's dominance over cloud gaming and mobile browsers will be investigated by the UK's competition regulator, it has announced.

        Last year, a "market study" by the Competition and Markets Authority (CMA) concluded they had a "stranglehold" over operating systems, app stores and web browsers on mobile devices.

        If the 18-month investigation finds an adverse effect on competition, the CMA can impose changes.

        Both companies deny the accusations.
        <br>
        CMA interim chief executive Sarah Cardell said it wanted to ensure UK:
        <br>
          <ul><em>Consumers received the best new mobile data services.</em></ul>
          <ul><em>Developers could invest in innovative new apps.</em></ul>
      </p> 
  
  
      </div>
    </div>
  </div>
  
  <div class="col-sm-6" style="height:80vw">
    <div class="card w-100" id="content" style="height:40vw" >
      <div class="card-body d-flex flex-column" >
        <p class="card-text"><h4>Easy and simple</h4></p>
        <div class="row-sm ">
          <img src="../../../images/happy-customer.jpg" style="width: 100%">
          
          <p style="text-align:justify; margin-top:10px ">If you have any electronic devices in need of repair,  
            we can provide an optimal solution.</p>
            <RouterLink to="/about"> <button>Learn More</button></RouterLink>     
          </div>
      </div>
  </div>
    <div class="card w-100" style="height:38vw">
      <div class="card-body d-flex flex-column" id="app" >
        <p class="card-text"><h3>Download our APP</h3></p>
        <div class="row-sm img-right">
        <img  class="img" style="width: 20vw; float: right"  src="../../../images/app.png">
        <div class=" align-self-center">
        <button id="appbutton"><img  style="width:10vw" src="../../../images/apple.png"></button>
        <button id="appbutton"><img  style="width:10vw" src="../../../images/android.png" ></button>
      </div>
      </div>
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
    margin:20px;
}
#app{
  margin-top:20px;
 
}
button{
  background-color:  rgb(41, 41, 41);
  border: 1px  rgb(29, 29, 29);
  border-radius: 5px;
  color: white;
}
button:hover{
  color: rgb(255, 145, 0) ;
  background-color: rgb(82, 82, 82);
      border: 1px  rgb(82, 82, 82);
}

#news{
  overflow: scroll;
  text-align: justify;
 
}
#news::-webkit-scrollbar{
  padding: 1rem;
  max-height: 220px;
  overflow-y: auto;
}
#content{
  background-color: rgb(245, 245, 245);
  border-color:  rgb(245, 245, 245);
  overflow:scroll;
  text-align: justify;
  height: 40vw;
  margin-bottom:0px;
  border-color: white;
}
#content::-webkit-scrollbar{
 
  max-height: 220px;
  overflow-y: auto;
}
.card{
    border-color:  rgb(255, 255, 255);
}
.btn{
 background-color: rgb(41, 41, 41);
 border: 1px  rgb(29, 29, 29);
}

.btn:hover {
      background-color: rgb(82, 82, 82);
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
