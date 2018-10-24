<template>
    <el-container>
      <el-header>
        <el-row class="head_input">
          <el-col :span="4"><i class="el-icon-arrow-left"></i></el-col>
          <el-col :span="16"><el-input></el-input></el-col>
          <el-col :span="4"><i class="el-icon-star-off"></i>
                            <i class="el-icon-share"></i>
          </el-col>
        </el-row>

        <div class="head">
            <div class="bg">
             <img :src="Store.storeData.storeImg" width="100%">
            </div>

            <div class="value">
              <img :src="Store.storeData.storeImg" style="width: 150px;height: 130px">
              <div class="store">
                <h1 style="font-weight:bolder;">{{Store.storeData.storeName}}</h1>
                <span>{{Store.storeData.storeWhich}}</span>
                <span>{{Store.storeData.storeValue}}</span>
              </div>
            </div>
        </div>
      </el-header>

      <el-main class="mian">
        <el-tabs v-model="activeName"  stretch style="position: absolute;bottom:0;top:0;left:0;right:0;ckground-color: coral">
          <el-tab-pane label="菜单" name="first" style="position: relative">
            <orderMain  :message="Store.foodData,Apiece"></orderMain>
          </el-tab-pane>
          <el-tab-pane label="评论" name="second"></el-tab-pane>
          <el-tab-pane label="商家" name="third"></el-tab-pane>
        </el-tabs>
      </el-main>

    </el-container>
</template>

<script>
    import orderMain from './orderMain'
    export default {
        name: "orderStore",
        components:{orderMain},
        mounted(){
          //根据所给得storeId，请求该店的信息。
          //假设已经请求到
          var Store = {
            storeId:'1', //商家id
            storeData:{ //商家信息
              storeName:'西安麦当劳餐厅',
              storeImg:'../../static/img/KFC.jpg',
              storeWhich:'西式快餐',
              storeSome:'1324',  //月售
              storeQisong:'0',   //起送费
              storepeisong:'9',  //配送费
              storerenjun:'38',   //人均
              storeValue:'这是本店的一段介绍'
            },
            foodData:{
              guide:[
                {
                  name:'折扣',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'主食',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'超值套餐',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'小事',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'饮料',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                }, {
                  name:'甜品',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'早餐主食',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'西式早餐',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'中式早餐',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                },{
                  name:'小事饮品',
                  index:'',
                  food:[
                    {
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    },{
                      foodImg:'../../static/img/food.jpg',
                      foodname:'经典香辣汉堡',
                      foodWhat:'主要原料：面包，鸡肉，生菜',
                      foodMoney:'20',
                      foodMuch:'165'
                    }
                  ]
                }
              ]
            },
            comment:{
              data:[
                {
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                },{
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                },{
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                },{
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                },{
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                },{
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                },{
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                },{
                  people:'一个用户',
                  money:'40',  //本次消费
                  value:'4.5',  //本次评分
                  data:'这是用户对这次外卖的评价'
                }
              ]
            }
          }
          //初始化订单
          var Apiece ={
            StoreName:'麦当劳（gogo街区店）',
            StoreId:1,
            Peisong:6,
            Money:0,
            Many:0,
            Value:[
              // {
              //   foodName:'', //名字
              //   many:'', //数量
              //   Money:'' //一份的价格
              // }
            ],
            beizhu:'',
            canju:'',
            address:{}
          }
          this.Store = Store;
          this.Apiece = Apiece;
        },
        data(){
          return{
            Store:'',
            Apiece:'',
            activeName: 'first'
          }
        }
    }
</script>

<style scoped>
  .head_input{
    z-index:500;
    background-color:white;
    height: 30px;
    line-height: 30px;
    position: fixed;
    left: 0;
    right: 0;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .head{
      position: relative;
      height: 200px;
  }
  .bg{
    z-index:-5;
    position: absolute;
    top:0;
    overflow: hidden;
    -webkit-filter: blur(15px);
    filter: blur(15px);
  }
  .value{
    position: absolute;
    bottom: -20px;
    left: 30px;
    display: flex;
    justify-content: space-around;
  }
  .store{
    color: white;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 15px;
    justify-content: space-around;
    height: 100px;
  }
  .mian{
    width: 100%;
    position:absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 230px;

  }
</style>
