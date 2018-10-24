<template>
  <el-container>
    <el-header style="line-height: 150px;">欢迎使用</el-header>
    <el-main style="line-height: 120px;">
      <div>小众点评</div>
      <img src="../assets/logo.png" width="70px">
      <div>分享你的品质生活</div>
      <el-button type="danger" round
                 @click="enter"
                 style="width:150px;height: 40px ">点击进入</el-button>
    </el-main>

  </el-container>
</template>

<script>
    export default {
        name: "wecolme",
        data(){
          return{

          }
        },
        methods:{
          enter(){
            this.$router.push('/index')
          }
        }
    }
</script>

<style scoped>
  .el-container{
    background-color: rgb(255,107,55);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    font-size: 20px;
  }
</style>
