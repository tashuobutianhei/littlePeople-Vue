<template>
  <el-container class="movie" style="padding:2px;background-color: white;margin-bottom: 15px" >
    <el-main>
      <video id="video1" width="100%" ref="video" @click="up">
        <source src=" http://www.runoob.com/try/demo_source/mov_bbb.mp4" type="video/mp4">
        <source src=" http://www.runoob.com/try/demo_source/mov_bbb.ogg" type="video/ogg">
      </video>
      <span v-show="false">{{message}}</span>
    </el-main>
    <el-footer style="line-height: 50px;height: 50px;font-size: 15px;display: flex;align-items: center;justify-content: space-between">
          <div>
            <img :src="obj.img" width="30%" style="vertical-align: bottom;margin-right: 15px">
            <span >{{obj.name}}</span>
          </div>
          <div>
            <div v-if="obj.like.num==0">
              <img :src="obj.like.imgO" width="20%" style="vertical-align: middle">
              <span>快来成为第一个赞的人</span>
            </div>
            <div v-else>
              <img :src="obj.like.imgI" width="20%" style="vertical-align: middle">
              <span>{{obj.like.num}}人点赞</span>
            </div>
          </div>
          <i class="el-icon-more"></i>
    </el-footer>

    <el-dialog
      title="小众视频"
      :visible.sync="VideoVis"
      width="90%"
      center>
      <video  width="100%" controls autoplay>
        <source src=" http://www.runoob.com/try/demo_source/mov_bbb.mp4" type="video/mp4">
        <source src=" http://www.runoob.com/try/demo_source/mov_bbb.ogg" type="video/ogg">
      </video>
    </el-dialog>
  </el-container>


</template>

<script>
    export default {
        name: "MovieDiv",
        props:['message'],
        mounted(){
          if(this.message){
            this.$refs.video.play();
          }else {
            this.$refs.video.pause();
          }
        },
        updated(){
          if(this.message){
            this.$refs.video.play();
          }else {
            this.$refs.video.pause();
          }
        },
        data(){
          return{
            VideoVis:false,
            play:false,
            obj:{
              name:'用户001',
              img:'../../static/img/head.png',
              like:{
                num:5,
                imgO:"../../static/img/likeO.png",
                imgI:"../../static/img/likeI.png"
              }
            }
          }
        },
        methods:{
          up(){
            this.VideoVis = true
          }
        }
    }
</script>

<style scoped>

</style>
