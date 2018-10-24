<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    //axios logined 进行请求，判断登录态
    //假设已登录
    this.$store.commit('Log',{
      userName:'用户1',
      id:'001'
    })
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
}
  *{
    margin: 0;
    padding: 0;
  }
</style>
