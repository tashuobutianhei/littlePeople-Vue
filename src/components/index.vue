<template>
  <el-container ref="body">
    <el-header style="height: 180px;">
      <el-row :gutter="15"  type="flex"  justify="space-between" class="head">
          <el-col :span="styleWidht.a">
            <el-button>西安<i class="el-icon-arrow-down"></i></el-button>
          </el-col>
          <el-col :span="styleWidht.b">
            <el-input
              placeholder="这一刻，搜索你先要的"
              suffix-icon="el-icon-search"
              v-model='input'>
            </el-input>
          </el-col>
          <el-col :span="styleWidht.c"><i class="el-icon-more"></i></el-col>
      </el-row>

      <el-row :gutter="20"  style="margin: 30px 0;" >
        <el-col :span="4" v-for="item in all" :key="item.img">
          <div @click="enter(item.path)">
            <img :src="item.img" :width=width height='90%' style="display: block;margin: 0 auto" >
            <span style="display:block;text-align: center;width: 100%">{{item.value}}</span>
          </div>
        </el-col>
      </el-row>

      <el-row  :gutter="15"  type="flex"  justify="space-between" :style="styleTitle">
        <el-col style="font-weight: bolder">推荐</el-col>
        <el-col v-for="item in tui" :key="item.name">{{item.name}}</el-col>
      </el-row>

    </el-header>

    <el-main style="">
      <aDiv></aDiv>
      <a-div></a-div>
      <a-div></a-div>
      <aDiv></aDiv>
      <a-div></a-div>
      <a-div></a-div>
      <aDiv></aDiv>
      <a-div></a-div>
      <a-div></a-div>
    </el-main>

    <el-footer >
      <app-foot></app-foot>
    </el-footer>
  </el-container>
</template>

<script>
    import aDiv from './aDiv'
    import AppFoot from "./AppFoot";

    export default {
        name: "index",
        components:{AppFoot, aDiv},
        mounted(){
          //debugger;
          if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.width='60%';
          } else {
            this.width='20%';
          }
          window.onresize=()=>{
            if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
              this.width='60%';
            } else {
              this.width='20%';
            }
          }
          document.onscroll=(e)=>{
            let top = document.documentElement.scrollTop
            if(top>0&&top<300){
              if(top>0&&top<70){
                this.styleWidht.a=3;
                this.styleWidht.b=18;
                this.styleWidht.c=3;
              } else if(top>70&&top<140){
                this.styleWidht.a=2;
                this.styleWidht.b=20;
                this.styleWidht.c=2;
              } else if(top>140&&top<210){
                this.styleWidht.a=1;
                this.styleWidht.b=22;
                this.styleWidht.c=1;
              }else{
                this.styleWidht.a=0;
                this.styleWidht.b=24;
                this.styleWidht.c=0;
              }
            }
            if(top>=120){
              this.styleTitle['position']='fixed';
            }
            if(top<120){
              this.styleTitle['position']='static';
            }
          }
        },
        data(){
          return{
            styleWidht:{
              a:4,
              b:16,
              c:4
            },
            styleTitle:{
             'background-color':'white',
             'position':'static',
              'top':'24px',
              'width':'100%',
              'z-index':'100'
            },
            input:'',
            width:'',
            all:[
              {
                img:'../../static/img/food.png',
                value:'美食',
                path:'/order'
              },{
                img:'../../static/img/movie.png',
                value:'电影',
                path:'/order'
              },{
                img:'../../static/img/hotel.png',
                value:'酒店',path:'/order/index'
              },{
                img:'../../static/img/KTV.png',
                value:'KTV',path:'/order'
              },{
                img:'../../static/img/shopping.png',
                value:'购物',path:'/order'
              },{
                img:'../../static/img/sport.png',
                value:'运动',path:'/order'
              },{
                img:'../../static/img/waimai.png',
                value:'外卖',
                path:'/order'
              },{
                img:'../../static/img/home.png',
                value:'家居',path:'/order'
              },{
                img:'../../static/img/daily.png',
                value:'生活',path:'/order'
              }, {
                img:'../../static/img/photo.png',
                value:'摄影',path:'/order'
              },{
                img:'../../static/img/study.png',
                value:'教育',path:'/order'
              },{
                img:'../../static/img/more.png',
                value:'全部',path:'/order'
              }
            ],
            tui:[
              {
                name:'美食',
                index:'',
              },
              {
                name:'外卖',
                index:'',
              },
              {
                name:'酒店',
                index:'',
              },
              {
                name:'电影',
                index:'',
              }
            ]
          }
        },
        methods:{
          enter(it){
            alert(it);
            this.$router.push(it)
          }
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .head{
    background-color:white;
    position:fixed;
    width: 100%;
    height: 25px;
    line-height: 25px;
    z-index: 100;
    top:0;
  }

</style>
