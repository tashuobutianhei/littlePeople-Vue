import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      meta:{
        title:'首页'
      },
      component:(resolve) => require(['../components/wecolme'],resolve)
    },
    {
      path: '/index',
      meta:{
        title:'首页'
      },
      component:(resolve) => require(['../components/index'],resolve)
    },
    {
      path: '/my',
      meta:{
        title:'我的'
      },
      component:(resolve) => require(['../components/my'],resolve)
    },
    {
      path: '/video',
      meta:{
        title:'视频'
      },
      component:(resolve) => require(['../components/movie'],resolve)
    },
    {
      path: '/about',
      meta:{
        title:'关注'
      },
      component:(resolve) => require(['../components/guanzhu'],resolve)
    },
    {
      path:'/order',
      meta:{
        title:'外卖'
      },
      component:(resolve) => require(['../components/orderA'],resolve),
      children: [
          {
            path:'/order/index',
            meta:{
              title:'外卖'
            },
            component:(resolve) => require(['../components/orderA'],resolve),
            children:[
              {
                path:'/order/index',
                meta:{
                  title:'外卖'
                },
                component:(resolve) => require(['../components/order'],resolve),
              },
              {
                path:'/order/Store',
                meta:{
                  title:'外卖'
                },
                component:(resolve) => require(['../components/orderStore'],resolve),
              },
              {
                path:'/order/ready',
                meta:{
                  title:'支付'
                },
                component:(resolve) => require(['../components/orderReady'],resolve),
                beforeLeave: (to, from, next) => {

                  this.$store.commit('changeApiece','')
                }
              }
            ]
          },
          {
            path:'/order/orders',
            meta:{
              title:'外卖'
            },
            component:(resolve) => require(['../components/orders'],resolve),
          },
          {
            path:'/order/my',
            meta:{
              title:'外卖'
            },
            component:(resolve) => require(['../components/orderMy'],resolve),
          }
      ]
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
