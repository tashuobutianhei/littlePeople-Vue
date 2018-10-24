<template>
  <el-row  :gutter="15"  type="flex"  justify="space-around " style="position:fixed;bottom:0px;left: 0;right: 0;background-color: white" >
    <el-col v-for="(item,index) in guide"
            :key="item.img"
            :span="8" style="cursor: pointer" >
      <div @click="route(index)">
        <img :src="item.img" :width=width :ref="item.index">
        <div>{{item.index}}</div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "orderFoot",
      mounted(){
        console.log(window.location.pathname)
        if(/\/index/.test(window.location.pathname)){

        }else if(/\/order\/index/.test(window.location.pathname)){
          this.guide[0].img= this.guide2[0].imgi
        }else if(/\/order\/orders/.test(window.location.pathname)){
          this.guide[1].img= this.guide2[1].imgi
        }else if(/\/order\/my/.test(window.location.pathname)){
          this.guide[2].img= this.guide2[2].imgi
        }

        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          this.width='30%';
        } else {
          this.width='20%';
        }
        window.onresize=()=>{
          if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.width='30%';
          } else {
            this.width='20%';
          }
        }},
        data(){
          return{
            width:'',
          guide:[
              {
                img:'../../static/img/waimaiO.png',
                index:'外卖',
                flag:'buy'
              },
              {
                img:'../../static/img/orderO.png',
                index:'订单',
                flag:'orders'
              },
              {
                img:'../../static/img/myO.png',
                index:'我的',
                flag:'my'
              },
          ],
            guide2:[
            {
              imgi:'../../static/img/waimaiI.png',
              imgo:'../../static/img/waimaiO.png',
            },
            {
              imgi:'../../static/img/orderI.png',
              imgo:'../../static/img/orderO.png',
            },
            {
              imgi:'../../static/img/myI.png',
              imgo:'../../static/img/myO.png',
            },
          ]

          }
        },
        methods:{
          route(it){

            console.log(it)
            switch (it){
              case 0:{
                this.$router.push('/order/index');
              };break;
              case 1:{
                this.$router.push('/order/orders');
              };break;
              case 2:{
                this.$router.push('/order/my');
              };break;
            }
          }
        }
    }
</script>

<style scoped>

</style>
