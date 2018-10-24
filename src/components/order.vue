<template>
  <el-container style="width: 100%">
    <el-header class="head" style="height: 100px">
      <el-row>
        <el-col :span="1"><i class="el-icon-arrow-left" @click="$router.push('/index')"></i></el-col>
        <el-col :span="23"><i class="el-icon-location"></i><span>西安邮电大学</span></el-col>
      </el-row>

      <el-row :gutter="15"  type="flex"  justify="center" style="margin-top: 15px">
        <el-col :span="22">
          <el-input
            placeholder="请输入菜品和商户名"
            suffix-icon="el-icon-search"
            v-model='input'>
          </el-input>
        </el-col>
      </el-row>

      <el-row :gutter="15"  type="flex"  justify="center" style="margin-top: 15px">
        <el-col :span="6">综合排序</el-col>
        <el-col :span="6">销量最高</el-col>
        <el-col :span="6">距离最近</el-col>
        <el-col :span="6">筛选<i class="el-icon-view"></i></el-col>
      </el-row>
    </el-header>

    <el-main style="margin: 100px auto;width:99%">
      <order-adiv
        v-for="(item,index) in StoresData"
        :key="index"
        :message="item"
      ></order-adiv>
    </el-main>

    <el-footer >
      <order-foot></order-foot>
    </el-footer>
  </el-container>
</template>

<script>
  import aDiv from './aDiv'
  import AppFoot from "./AppFoot";
  import OrderAdiv from "./orderAdiv";
  import OrderFoot from "./orderFoot";

  export default {
    name: "order",
    components:{OrderFoot, OrderAdiv, AppFoot, aDiv},
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
      //像后台请求20个外卖商家的简单数据
      //假设数据请求完成
      var OrderData = [
        {
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },{
          storeId:1,
          storeName:'麦当劳（gogo街区店）',
          storeImg:'../../static/img/KFC.jpg',
          storeWhich:'西式快餐',
          storeValue:4.5, //评分
          storeSome:'1324',  //月售
          storeQisong:'0',   //起送费
          storepeisong:'9',  //配送费
          storerenjun:'38',   //人均
        },
      ]
      this.StoresData = OrderData;
    },
    data(){
      return{
        StoresData:[],
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
    height: 200px;
    z-index: 100;
    top:0;
    overflow: hidden;
  }
</style>
