<template>
  <div style="background-color:  rgba(255,107,55,.7);margin-bottom: 55px">
      <div style="text-align: left;background-color: white;position:fixed;height: 30px;left:0;right: 0">
        <span style="border-bottom:3px orange solid;font-size:20px;font-weight: bolder;margin-left: 15px">精选小视频</span>
      </div>
      <movie-div class="movie" :message="index==movie" v-for="(it,index) in array"></movie-div>
      <div>
        <app-foot></app-foot>
      </div>
  </div>

</template>

<script>

    import AppFoot from "./AppFoot";
    import MovieDiv from "./MovieDiv";

    export default {
        name: "movie",
        mounted(){
          //函数节流
          let that = this
          document.onscroll=(e)=>{
            var canRun = true;
              if( !canRun ){
                return
              }
              canRun = false;
              setTimeout(()=>{
                that.lazy()
                canRun = true;
              },500)

            }

        },
        components: {MovieDiv, AppFoot},
        data(){
          return{
            movie:0,
            array:[0,1,2,3,4,5,6]
          }
        },
        methods:{
          debounce(method,delay){
              var timer=null;
              return function(){
                var context=this,args=arguments;
                clearTimeout(timer);
                timer=setTimeout(function(){
                       method.apply(context,args);
                },delay);
              }
            },
          lazy(){
            for(let i = 0;i<document.getElementsByClassName('movie').length;i++){
              let top2=document.getElementsByClassName('movie')[i].getBoundingClientRect().top;
              if(i==0&&top2>-30){
                this.movie=0;
              }else{
                if(top2<300&&top2>=100){
                  this.movie=i;
                }
              }
            }
          }
        }
    }
</script>

<style scoped>

</style>
