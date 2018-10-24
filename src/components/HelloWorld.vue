<template>
  <div class="wrapper">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
  </div>
</template>


<style scoped>
  .wrapper div {
    height: 1rem;
  }
  .box1 {
    width: 2rem;
    background-color: coral;
  }
  .box2 {
    width: 4rem;
    background-color: skyblue;
  }
  .box3 {
    width: 6rem;
    background-color: palegreen;
  }
  .box4 {
    width: 8rem;
    background-color: wheat;
  }
  .box5 {
    width: 10rem;
    background-color: darkred;
  }
</style>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

