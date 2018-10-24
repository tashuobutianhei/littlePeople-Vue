<template>
  <div class="all" @click="enter" >
    <el-badge :value="3" class="item">
      <img :src="message.storeImg" >
    </el-badge>

    <div class="value">
      <p>{{message.storeName}}</p>
      <el-rate
        v-model="message.storeValue"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
        style="display: inline-block">
      </el-rate>
      <span>月售{{message.storeSome}}</span>
      <p>
         <span>起送￥{{message.storeQisong+' '}}</span>
         <span>配送￥{{message.storepeisong+' '}}</span>
         <span>人均￥{{message.storerenjun+' '}}</span>
      </p>
      <p>
        <img
          style="width: 15px;vertical-align: bottom"
          src="../../static/img/dao.png">
        {{message.storeWhich}}
      </p>
    </div>
  </div>
</template>

<style scoped>
  .all{
    display:flex;
    width: 100%;
    border-bottom: 1px gray solid;
  }
  .value{
    text-align: left;
    margin-left: 15px;
  }
  .el-badge{
    width: 40%;
  }
  .el-badge>img{
    width: 100%;
    height: 80px;
  }
</style>

<script>
    export default {
        name: "orderAdiv",
        props:['message'],
        data(){
            return{
              value:'4.8'
            }
        },methods:{
            enter(){
              this.$router.push('/order/Store');
              this.$store.commit('changeStoreId',this.message.storeId)
              //目前有问题，没有在跳出时清空
            }
        }
    }
</script>
