<template>
  <div style="background-color:  rgba(255,107,55,.7);">

    <div v-if="this.$store.state.Log">
      <about-div></about-div>
      <about-div></about-div>
      <about-div></about-div>
      <about-div></about-div>
      <about-div></about-div>
    </div>

    <div v-else class="wei">
      <p @click="up">暂无信息，请先登录</p>
    </div>

    <div>
      <app-foot></app-foot>
    </div>
  </div>
</template>

<script>
    import AppFoot from "./AppFoot";
    import AboutDiv from "./AboutDiv";
    export default {
        name: "guanzhu",
        components: {AboutDiv, AppFoot},
        methods:{
          up(){
            this.$router.push('/my');
          }
        }
    }
</script>

<style scoped>
  .wei{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;bottom: 0;left: 0;right: 0;
    background-color:  rgba(255,107,55,.7);
  }
</style>
