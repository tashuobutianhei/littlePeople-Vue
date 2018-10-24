<template>
  <el-container >
    <el-container  style="position: fixed;overflow-y: scroll;bottom: 58px;top: 258px;width: 100%">
        <el-aside style="width: 100px;"  class="scroll">
          <el-menu
          class="el-menu-demo"
          mode="vertical"
          style="width: 100px"
          :default-active="activeIndex"
          active-text-color="black">
            <el-menu-item
              v-for="(item,index) in message.guide"
              :index="item.name"
              :key="index"
              style="height: 50px"
              >
              {{item.name}}
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main style="overflow-y: scroll" class="scroll" >
          <div v-for="(item,index) in message.guide" :key="index">
            <order-food
              v-for="(it,index) in item.food"
              @addMessag="send"
              :key="index"
              :foodvalue='it'
            >
            </order-food>
          </div>
      </el-main>
    </el-container>



    <el-footer class='footer'>
        <el-badge :value='Apiece.Many' class="item">
          <el-button circle class="el-icon-edit-outline ji_button" type="danger" style="width: 50px;height: 50px"></el-button>
        </el-badge>

        <Div class="jijia">
          <span style="display: block">已选：{{Apiece.Many}}
          </span>
          <span>配送费￥{{Apiece.Peisong}}</span>

        </Div>
        <el-button
          class='jie_button'
          type="danger"
          @click="buy"
        >
          去结算<span v-if="Apiece.Money!=0" style="font-size: 10px">￥{{Apiece.Money}}</span>
        </el-button>
    </el-footer>
  </el-container>
</template>


<script>
  import orderFood from './orderFood.vue'
  export default {
    components: {orderFood},
    props:['message','Apiece'],
    mounted(){
    },
    data() {
      return{
        activeIndex:'折扣',
      }
    },
    methods:{
      // Apiece ={
      //   StoreName:'麦当劳（gogo街区店）',
      //   StoreId:1,
      //   Peisong:6,
      //   Money:0,
      //   Many:0,
      //   Value:[
      //     // {
      //     //   foodName:'', //名字
      //     //   many:'', //数量
      //     //   Money:'' //一份的价格
      //     // }
      //   ]
      // }
      addone(it){
        var flag = false
        this.Apiece.Value.forEach((item,index)=>{
          if(item.foodName===it.name){
            item.many++;
            flag=true;
          }
        })
        if(!flag){
          this.Apiece.Value.push({
            foodName:it.name,
            many:1,
            Money:it.money,
            img:it.img
          })
        }
      },
      subone(it){
        this.Apiece.Value.forEach((item,index,arr)=>{
          if(item.foodName===it.name){
            if(item.foodName==1){
              //移除
              arr.splice(index,1);
            }else{
              item.many--;
            }
          }
        })
      },
      send(it){
        if(it.add=='-1'){
          this.Apiece.Many--;
          this.Apiece.Money-=it.money;
          this.subone(it)
        }else if(it.add=='+1'){
          this.Apiece.Many++;
          this.Apiece.Money+=it.money;
          this.addone(it);
        }
      },
      buy(){
        if(this.Apiece.Many==0){
            this.$message({
              message: '请先选择你要买的东西哦',
              type: 'warning'
            });
        }else if(this.Apiece.Many>0){
            this.$store.commit('changeApiece',this.Apiece);
            this.$router.push('/order/ready');

        }
      }
    }
  };
</script>

<style scoped>
  .scroll::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .scroll::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .scroll::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .jie_button{
    font-size: 20px;
    color: white;
    position: absolute;
    right: 0;
    height: 59px;
    width: 120px;
    background-color:coral;
    border: none;
  }
  .footer{
    position: fixed;
    background-color: rgba(50,50,50,.8);
    bottom: 0;
    height: 58px;
    left: 0;
    right: 0;
  }
  .item{
    position: absolute;
    left:30px;
    top:-20px
  }
  .jijia{
    float: left;
    font-size: 15px;
    color: white;
    margin-left: 80px;
  }
</style>
