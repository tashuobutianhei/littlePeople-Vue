<template>
  <Div>
    <log-reg></log-reg>
    <div class="wei" v-if="this.$store.state.Log==''">
        <div class="value">
           <img src="../../static/img/head.png" :width="width" style="margin: 0 auto">
            <el-button type="danger" round
                     @click="log"
                     style="width:150px;height: 40px;margin: 0 auto">点击登录</el-button>
           <p>登录更精彩</p>
        </div>
    </div>

    <div v-else class="yi">
      <div style="margin:30px 0;">
        <el-row >
          <el-col :span="6" :offset="2"><img :src="user.head" style="width:100%"></el-col>
          <el-col :span="10" style="line-height: 40px;height: 40px">
            <span style="font-size: 20px;font-weight: bolder">{{user.username}}</span>
            <span style=""><img src="../../static/img/V.png" style="width: 15px">{{' '+user.leavel}}</span>
            <h3 style="">{{user.address}}</h3>
          </el-col>
          <span style="position: absolute;right:5px;top: 30px;background-color: yellow;border-radius:15px">❤个人主页 ></span>
        </el-row>
      </div>
      <hr>
      <div style="display: flex;justify-content: space-between;margin-top: 10px">
        <div v-for="item in guide"
             style="display: flex;flex-direction: column;width:20%;align-items: center">
          <img :src="item.img" width="50%">
          <span style="color: white">{{item.label}}</span>
        </div>
      </div>

      <Div style="margin: 30px 0">
        <div class="item">
          <span>会员等级</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="item">
          <span>联系客服</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="item">
          <span>个人资料</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="item">
          <span>意见反馈</span>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="item">
          <span>账号安全</span>
          <span class="el-icon-arrow-right"></span>
        </div>

      </Div>
      <el-button style="width: 100%;height:50px;font-size: 18px" type="" >清除缓存</el-button>
      <el-button style="width: 100%;height:50px;font-size: 18px" type="danger" @click="out">退出登录</el-button>
    </div>



    <div>
      <app-foot></app-foot>
    </div>
  </Div>
</template>

<script>
    import AppFoot from "./AppFoot";
    import logReg from './logReg'
    export default {
        name: "my",
        components: {AppFoot,logReg},
        mounted(){
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
          //根据登录的信息的id加载信息
          if(this.$store.state.Log!=''){
            //axios获取
            this.user={
              username:'用户001',
              id:'1',
              head:'../../static/img/head.png',
              address:'西安',
              leavel:'LV1'
            }
          }
        },
        data(){
          return{
            width:'',
            user:'',
            guide:[
              {
                label:'收藏',
                img:'../../static/img/shoucang.png'
              },{
                label:'待评论',
                img:'../../static/img/pinglun.png'
              },{
                label:'浏览记录',
                img:'../../static/img/liulan.png'
              },{
                label:'已关注',
                img:'../../static/img/guanzhu.png'
              }
            ]
          }
        },
        methods:{
          log(){
            this.$store.commit('changelog')
          },out(){
            this.$store.commit('Log','')
          }
        }

    }
</script>

<style scoped>
  .wei,.yi{
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:  rgba(255,107,55,.7);
  }
  .value {
    width: 50%;
    height: 300px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
  }
  .item{
    cursor: pointer;
    margin: 0 auto;
    width:100%;
    background-color: white;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    align-items: center;
  }
</style>
