<template>
      <div style="margin-bottom: 50px;padding: 5px">
        <img :src='obj.img' width="160px" style="float: left">
        <div style="margin-left: 140px">
          <span style="display:block;font-weight: bolder;font-size: 15px;text-align: left;">{{obj.name}}</span>
          <el-rate
            style="text-align:left;line-height:30px;float: left"
            v-model="obj.value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
          <span class="renjun">￥{{obj.money}}/人</span>
          <p style="line-height: 50px;text-align: left">{{obj.value}}</p>
        </div>
      </div>

</template>

<script>
    export default {
        name: "aDiv",
        data() {
          return {
            obj:{
              value5: 3.7,
              name:'一家火锅店',
              money:'50',
              img:'../../static/img/huoguo1.jpg',
              value:'这是一段介绍'
            }
          }
        }
    }
</script>

<style scoped>

  .renjun{
    font-size: 15px;
    float: right;
  }
</style>
