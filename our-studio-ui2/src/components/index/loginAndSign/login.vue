<template>
  <div class="login">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '../the-navigation'
  export default {
    name: "login",
    components: {Navigation},
    methods:{

    },
    mounted() {
      document.getElementsByClassName('login')[0].style.height = window.innerHeight-1 + "px";


    }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    margin: 0 auto;
    background-image: url("../../../assets/imgs/bg3.jpg");
    background-repeat: no-repeat;
  }
</style>
