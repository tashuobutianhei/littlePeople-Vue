<template>
    <el-container style="background-color: white;margin-bottom: 15px">
      <el-header style="display: flex;">
        <img :src="obj.user.img" style="width: 18%">
        <div style="align-self: center;margin-left: 30px;line-height:20px">
          <h2>{{obj.user.name}}</h2>
          <span style="color:grey">{{obj.value.data}}</span>
        </div>
      </el-header>
      <el-main >
        <Div style="width: 100%;overflow: hidden">
          <img width="48%"
               style="float: left;margin: 2px"
               v-for="it in obj.value.img"
               :src="it"
               @click="upImg(it)">
        </Div>
        <p style="text-align: left;font-size: 15px">{{obj.value.value}}</p>
        <div style="text-align: left">
          <span style="font-weight: bolder">打分</span>
          <el-rate
            style="display: inline-block"
            v-model="obj.value.fen"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
        <div style="width:95%;margin:10px auto;background-color:lightgrey;padding:5px;overflow: hidden;border-radius: 10px">
          <img :src="obj.store.img" width="20%" style="vertical-align: top;float: left">
          <span style="font-weight: bolder">{{obj.store.name}}</span>
        </div>
      </el-main>

      <el-footer>
        <el-row style="line-height: 30px;height: 30px;font-size: 15px">
          <el-col :span="10">
            <div v-if="obj.value.like.num==0">
              <img :src="obj.value.like.imgO" width="15%" style="vertical-align: top">
              <span>快来成为第一个赞的人</span>
            </div>
            <div v-else>
              <img :src="obj.value.like.imgI" width="15%" style="vertical-align: top">
              <span>{{obj.value.like.num}}人点赞</span>
            </div>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-document"></i>
          </el-col>
          <el-col :span="6">
            <i class="el-icon-share"></i>
          </el-col>
        </el-row>
      </el-footer>


      <el-dialog
        title="提示"
        :visible.sync="imgVis"
        width="90%"
        center>
        <img :src="img" width="100%">
      </el-dialog>

    </el-container>
</template>

<script>
    export default {
        name: "AboutDiv",
        data(){
          return{
            imgVis:false,
            img:'',
            obj:{
              user:{
                img:'../../static/img/head.png',
                name:'用户001',
                id:'001'
              },
              value:{
                data:'2018年10月20日',
                img:['../../static/img/huoguo1.jpg',
                  '../../static/img/huoguo2.jpg',
                  '../../static/img/huoguo3.jpg'],
                value:'这是一段评论，好或者坏',
                fen:4.0,
                like:{
                  num:5,
                  imgO:"../../static/img/likeO.png",
                  imgI:"../../static/img/likeI.png"
                }
              },
              store:{
                name:'这是评论的店名',
                id:'1',
                img:'../../static/img/KFC.jpg'
              }
            }
          }
        },
        methods:{
          upImg(it){
            this.imgVis = true;
            this.img = it;
          }
        }
    }
</script>

<style scoped>

</style>
