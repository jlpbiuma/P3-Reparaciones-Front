<script setup>
</script>

<template>
    <div class="centered_text" style="max-width:80vw;">
    <h2>CONTACT US</h2>
    
    <div class="row" >
        <div class="row w-100">
  <div class="col-lg-6 my-4">
    <iframe 
      src="https://www.google.com/maps/place/Bridge+to+Nowhere/@34.2833567,-117.7471725,20z/data=!4m5!3m4!1s0x80c322cfd9f1704f:0xd04401dc1101aa9c!8m2!3d34.283249!4d-117.7470737"
      class="w-100" height="400" allowfullscreen="" loading="lazy"></iframe>
  </div>
  <div class="col-lg-6 my-4 d-flex align-items-end">
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
<div class="card w-100" >
    
    <p class="card-text"><h4>&nbsp;Contact the Team on Github</h4></p>
    <div class="card-group" >

        <div class="card" id="team-profile" style="display:flex">
        <a href="https://github.com/jlpbiuma">
            <img src="../../../images/Jose Luis.jpg"  style=" width:10vw; border-radius: 10px;">
            <p class="name"><strong> José Luis</strong></p>
        </a></div>
        <div class="card" id="team-profile" style="display:flex">
        <a href="https://github.com/itsJosephV">
            <img src="../../../images/Joseph.jpg"  style=" width:10vw; border-radius: 10px;">
            <p class="name"><strong> Joseph</strong></p>
        </a></div>

        <div class="card" id="team-profile" style="display:flex"> 
        <a href="https://github.com/VanesaMRP">
            <img src="../../../images/Vanesa.jpg"  style=" width:10vw; border-radius: 10px;">
            <p class="name"><strong> Vanesa</strong></p>
        </a></div>
        
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

<style scoped lang="scss">
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
