<template>
    <div class="all_food">
      <img :src="foodvalue.foodImg" width="120px">
      <div class="value">
        <h1>{{foodvalue.foodname}}</h1>
        <span>{{foodvalue.foodWhat}}</span>
        <span>月售{{foodvalue.foodMuch}}</span>
        <span><em>￥{{foodvalue.foodMoney}}</em>/份</span>
      </div>

      <div class="button">
          <el-button
            v-if="obj.itemuch!=0"
            circle class="el-icon-minus"
            size="mini"
            @click="sub"
            >
          </el-button>
          <span v-if="obj.itemuch!=0">{{obj.itemuch}}</span>
          <el-button
            type="danger"
            circle class="el-icon-plus"
            @click="add"
            size="mini"
          >
        </el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "orderFood",
        props:['foodvalue'],
        data(){
            return{
              obj:{
                name:'经典香辣汉堡',
                img:'../../static/img/food.jpg',
                what:'主要原料：面包，鸡肉，生菜',
                money:'20',
                much:'165',
                itemuch:0
              }
            }
        },
        methods:{
            add(){
              this.obj.itemuch++;
              this.$emit('addMessag',{
                add:'+1',
                name:'经典香辣汉堡',
                money:20,
                img:this.foodvalue.foodImg
              })
            },
            sub(){
              this.obj.itemuch--;
              this.$emit('addMessag',{
                add:'-1',
                name:'经典香辣汉堡',
                money:20,
                img:this.foodvalue.foodImg
              })
            }
        }
    }
</script>

<style scoped>
  .all_food{
    display: flex;
    height: 95px;
    position: relative;
    border-bottom: 1px grey solid;
    padding: 3px 0;
  }
  img{
    flex:1;
  }
  .value{
    flex:3;
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  em{
    color: orangered;
    font-size: 20px;
  }
  .button{
    position: absolute;
    right: 5px;
    bottom: 10px;
  }
</style>
