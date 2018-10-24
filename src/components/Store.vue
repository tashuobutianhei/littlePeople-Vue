<template>
    <el-container>
      <div>
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-star-on"></i>
      </div>
      <el-header>
        <el-row>
          <el-col>
            <img>
          </el-col>
          <el-col>
            <div>
              <h2>{{}}</h2>
              <el-rate
                style="display: inline-block"
                v-model="obj.value.fen"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <span>详情> {{}}条</span>
              <span>质量</span>
              <span>{{}}</span>
              <span>环境</span>
              <span>{{}}</span>
              <span>服务</span>
              <span>{{}}</span>
            </div>
          </el-col>
        </el-row>
        <hr>
        <div>
          <span>营业时间</span>
          <span>{{}}</span>
        </div>
        <div>
          <i class="el-icon-location-outline"></i>
          <span>{{}}</span>
        </div>
      </el-header>
      <el-main>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">优惠信息</el-menu-item>
          <el-menu-item index="2" disabled>网友点评</el-menu-item>
          <el-menu-item index="3">>更多信息</el-menu-item>
        </el-menu>

        <el-container id="">
          <el-header>
            <span>推荐菜</span>
            <i class="el-icon-arrow-right"></i>
          </el-header>
          <el-main>
            <img>
            <span v-for=""></span>
          </el-main>
        </el-container>

        <el-container>
          <el-header>
            <span>精选点评{{}}</span>
            <span><i class="el-icon-arrow-right"></i></span>
          </el-header>
          <div></div>
          <el-footer>
            <span>查看全部点评</span>
            <i class="el-icon-arrow-right"></i>
          </el-footer>
        </el-container>

        <el-container>
          <el-header>
            <span>小伙伴还喜欢</span>
          </el-header>
          <el-container>
            <el-header><img></el-header>
            <el-main>
              <h3>{{}}</h3>
              <el-rate
                style="display: inline-block"
                v-model="obj.value.fen"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <span>￥{{}}/人</span>
              <span>{{}}类型</span>
            </el-main>
          </el-container>
        </el-container>
      </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "Store",
        data(){
          return{
            activeIndex:1,
            store:{
              id:'001',
              name:'小龙坎火锅',
              pingfen:{
                all:4.0,
                pingfen_zhiliang:4.0,
                pingfen_huanjing:4.0,
                pingfen_fuwu:4.0,
              },
              money:61,
              which:'四川火锅',
              address:'长安区69号',
              time:'10:00-24:00',
              talk:[
                {
                  userId:'001',
                  userName:'用户',
                  head:'../../static/img/head.png',
                  value:3.0,
                  talk:'这是一段评论',
                  time:'10-3',
                  img:['../../static/img/huoguo1.jpg','../../static/img/huoguo2.jpg','../../static/img/huoguo3.jpg']
                },{
                  userId:'001',
                  userName:'用户',
                  head:'../../static/img/head.png',
                  value:3.0,
                  talk:'这是一段评论',
                  time:'10-3',
                  img:['../../static/img/huoguo1.jpg','../../static/img/huoguo2.jpg','../../static/img/huoguo3.jpg']
                },{
                  userId:'001',
                  userName:'用户',
                  head:'../../static/img/head.png',
                  value:3.0,
                  talk:'这是一段评论',
                  time:'10-3',
                  img:['../../static/img/huoguo1.jpg','../../static/img/huoguo2.jpg','../../static/img/huoguo3.jpg']
                },{
                  userId:'001',
                  userName:'用户',
                  head:'../../static/img/head.png',
                  value:3.0,
                  talk:'这是一段评论',
                  time:'10-3',
                  img:['../../static/img/huoguo1.jpg','../../static/img/huoguo2.jpg','../../static/img/huoguo3.jpg']
                }
              ]
            }
          }
        }
    }
</script>

<style scoped>

</style>
