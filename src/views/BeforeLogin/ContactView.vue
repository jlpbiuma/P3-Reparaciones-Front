<script setup>
</script>

<template>
    <div class="centered_text" style="max-width:80vw;">
    <h2>CONTACT US</h2>
    
    <div class="row" >
        <div class="row w-100">
  <div class="col-lg-6 my-4">
    <img src="../../../images/nowhere.jpg" class="w-100" id="map" style="max-width:30vw;">
  </div>
  <div class="col-lg-6 my-4 d-flex align-items-end" >
    <div>
      <h6>Find Us At</h6>
      <p>Nowhere St, LP 35400</p>
      <p>We will be pleased to assit you at the following telephone number: <strong>+34 123 45 67 89</strong>.</p>
    </div>
  </div>
</div>
</div>

<br>
<div class="container w-100" >
<form id="contactForm">
    <h5>Tell us what you need</h5>
  <div class="mb-3">
    <label class="form-label" for="name">Name</label>
    <input class="form-control" id="name" type="text" placeholder="Name" />
  </div>
  <div class="mb-3">
    <label class="form-label" for="emailAddress">Email Address</label>
    <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
  </div>
  <div class="mb-3">
    <label class="form-label" for="message">Message</label>
    <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
  </div>
  <div class="d-grid">
    <button id="submitbtn" class="btn btn-primary btn-lg" type="submit">Submit</button>
  </div>
</form>

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

<style scoped lang="scss">
#map{

}
.centered_text {
    margin-left:auto;
    margin-right:auto;
    }

a{
    color:black;
    text-decoration: none; 
}
a:hover{
    color:rgb(255, 145, 0);
}
.name{
 font-size: larger;

}
#team-profile{
    border-color: rgb(255, 255, 255);
    justify-content: center;
    align-items: center;
}

#submitbtn{
    background-color:rgb(41, 41, 41);
    border: 1px  rgb(82, 82, 82);
    margin-bottom: 50px;
}
#submitbtn:hover{
    background-color: rgb(82, 82, 82);
    color:rgb(255, 145, 0);
}
</style>
