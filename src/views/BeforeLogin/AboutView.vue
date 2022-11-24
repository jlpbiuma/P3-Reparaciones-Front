<script setup>
</script>

<template>
    <h3>ABOUT US</h3>
    <div class="row">
        <div class="col-sm-6" id="top">
            <div class="card w-100" style="display:flex" id="topcards">
                <img class="card-img-top" src="../../../images/profesional.png" style="width:20vw; align-self: center;">
                <div class="card-body" style="align-self: center">
                    <p style="text-align:center">The JVJ team is conformed by highly qualified technicians.</p>
                </div>
            </div>
        </div>
        <div class="col-sm-6" id="top">
            <div class="card w-100" style="display:flex" id="topcards">
                <img class="card-img-top" src="../../../images/Mantenimiento.png"
                    style="width:20vw; align-self: center; margin-left:2vw">
                <div class="card-body" style="align-self: center">
                    <p style="text-align:center">We are specialist in maintenance and repair services.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card w-100" style="display:flex">
        <div class="card-body" style="align-self: center">
            <p style="text-align:center">
            <h4>&nbsp;Contact us on Github</h4>
            </p>
        </div>
        <div class="card-group">
            <div class="card" id="team-profile">
                <a href="https://github.com/jlpbiuma">
                    <img src="../../../images/Jose Luis.jpg" style=" width:10vw; border-radius: 10px;">
                    <p style="text-align:center" class="name"><strong> José Luis</strong></p>
                </a>
            </div>
            <div class="card" id="team-profile" style="display:flex">
                <a href="https://github.com/itsJosephV">
                    <img src="../../../images/Joseph.jpg" style=" width:10vw; border-radius: 10px;">
                    <p style="text-align:center" class="name"><strong> Joseph</strong></p>
                </a>
            </div>
            <div class="card" id="team-profile" style="display:flex">
                <a href="https://github.com/VanesaMRP">
                    <img src="../../../images/Vanesa.jpg" style=" width:10vw; border-radius: 10px; align-self: center">
                    <p style="text-align:center" class="name"><strong> Vanesa</strong></p>
                </a>
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
#top {
    margin-top: 5vw;
    margin-bottom: 5vw;
    ;

}

#topcards {
    background-color: rgb(245, 245, 245);
    border-color: rgb(245, 245, 245);
}

a {
    color: black;
    text-decoration: none;
}

a:hover {
    color: rgb(255, 145, 0);
}

.name {
    font-size: larger;
}

#team-profile {
    border-color: rgb(255, 255, 255);
    justify-content: center;
    align-items: center;
}
</style>
