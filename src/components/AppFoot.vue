<template>
  <el-row  :gutter="15"  type="flex"  justify="space-around " style="position:fixed;bottom:0px;left: 0;right: 0;background-color: white;" >
    <el-col :span="4" style="cursor: pointer" >
      <div @click="route('index')">
        <img src="../assets/logo.png" :width=width >
        <div>首页</div>
      </div>
    </el-col >
    <el-col v-for="(item,index) in guide" :span="4" style="cursor: pointer"  :key="item.img">
      <div @click="route(index)">
        <img :src="item.img" :width=width :ref="item.index">
        <div>{{item.index}}</div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
      name: "AppFoot",
      mounted(){
        if(/\/index/.test(window.location.pathname)){

        }else if(/\/video/.test(window.location.pathname)){
            this.guide[0].img= this.guide2[0].imgi
        }else if(/\/about/.test(window.location.pathname)){
          this.guide[2].img= this.guide2[2].imgi
        }else if(/\/my/.test(window.location.pathname)){
          this.guide[3].img= this.guide2[3].imgi
        }

        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          this.width='60%';
        } else {
          this.width='10%';
        }
        window.onresize=()=>{
          if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.width='60%';
          } else {
            this.width='10%';
          }
        }},
        data(){
            return{
              guide:[
                {
                  img:'../../static/img/movieO.png',
                  index:'视频',
                  flag:'video'
                },
                {
                  img:'../../static/img/add.png',
                  index:''
                },
                {
                  img:'../../static/img/guanO.png',
                  index:'关注',
                  flag:'about'
                },
                {
                  img:'../../static/img/myO.png',
                  index:'我的',
                  flag:'my'
                },
              ],
              guide2:[
                {
                  imgi:'../../static/img/movieI.png',
                  imgo:'../../static/img/movieO.png',
                },
                {
                  img:'../../static/img/add.png',
                  index:''
                },
                {
                  imgi:'../../static/img/guanI.png',
                  imgo:'../../static/img/guanO.png',
                },
                {
                  imgi:'../../static/img/myI.png',
                  imgo:'../../static/img/myO.png',
                },
              ],
              width:'',
            }
        },
        methods:{
          route(it){
            switch (it){
              case 'index':{
                this.$router.push('/index');
              };break;
              case 0:{
                this.$router.push('/video');
              };break;
              case 2:{
                this.$router.push('/about');
              };break;
              case 3:{
                this.$router.push('/my');
              };break;
            }
          }
        }
    }
</script>

<style scoped>

</style>
