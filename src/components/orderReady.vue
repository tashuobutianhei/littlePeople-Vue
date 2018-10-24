<template>
    <el-container class="bg">
      <el-header style="position: fixed;top:0;height: 50px;background-color: white;width: 100%;line-height: 50px">
        <div style="float: left">
          <span><i class="el-icon-arrow-left" @click="back"></i></span>
          <span style="font-size: 18px">确认订单</span>
        </div>
      </el-header>
      <el-main style="margin-bottom:60px">
        <div class="peisong_peolpe">
          <span>订单配送至</span>
          <p class="address" @click="addressVis=true">
           {{Apiece.address.address}}<i class="el-icon-arrow-right"></i>
          </p>
          <div><span>{{Apiece.address.name}}</span><span>{{Apiece.address.tel}}</span></div>
        </div>

        <div class="peisong_value" style="font-size: 13px">
          <el-row >
            <el-col :span="12">送达时间</el-col>
            <el-col :span="12">尽快送达（{{}}送达）</el-col>
          </el-row>
          <el-row>
            <el-col :span="12">支付方式</el-col>
            <el-col :span="12">在线支付</el-col>
          </el-row>
        </div>

        <div class="food">
              <p
                style="font-size: 18px;font-weight: bolder;height: 40px;line-height: 40px;text-align: left;background-color: white">
                {{Apiece.StoreName}}
              </p>
              <el-table
                style="font-size: 13px"
                :data="table"
                show-summary>
                <el-table-column
                  prop="foodName"
                  label="订单">
                </el-table-column>
                <el-table-column
                  label="图片"
                  sortable>
                  <template slot-scope="scope" >
                    <img :src="scope.row.img" width="100%" style="height: 60px">
                  </template>
                </el-table-column>
                <el-table-column
                  prop="many"
                  sortable
                  label="数量">
                </el-table-column>
                <el-table-column
                  prop="Money"
                  sortable
                  label="价格">
                </el-table-column>
              </el-table>
                <div style="font-size: 18px;font-weight: bolder;height: 50px;line-height: 50px;text-align: left;background-color: white">
                  <el-row>
                    <el-col :span="18">配送费</el-col>
                    <el-col :span="6"><span>￥{{Apiece.Peisong}}</span></el-col>
                  </el-row>
                </div>

                <div style="font-weight: bolder;height: 50px;line-height: 50px;text-align: left;background-color: white">
                  <el-row>
                    <el-col :span="18" style="font-size: 10px;color: darkgray">优惠说明</el-col>
                    <el-col :span="6">小计 <span style="font-size: 18px;">￥{{money}}</span></el-col>
                  </el-row>
                </div>

        </div>

        <div class="other">
          <div>
            <label>餐具份数</label>
            <el-select style="border: none"  v-model="value" @change="canju">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div>
            <span>订单备注</span>
            <span @click="visible=true">口味，偏好<i class="el-icon-arrow-right"></i></span>
          </div>

          <div>
            <label>发票信息</label>
            <span>不需要开发票<i class="el-icon-arrow-right"></i></span>
          </div>
        </div>
      </el-main>

      <el-footer class="footer">
        <span>￥{{money}}</span>
        <el-button>去支付</el-button>
      </el-footer>


      <el-dialog
        title="订单备注"
        :visible.sync="visible"
        fullscreen
        center>
        <el-input
          type="textarea"
          :rows="6"
          placeholder="请写下额外对骑手和餐厅的备注"
          v-model="textarea">
        </el-input>
        <el-button @click="beizhu" type="success" style="width: 100%;height:50px;margin:30px auto">确定</el-button>
      </el-dialog>

      <el-dialog
        title="选择地址"
        :visible.sync="addressVis"
        fullscreen
        center>
        <el-radio
          v-model="addressCheck"
          v-for="(item,index) in address"
          :label="item.label"
          :key="index"
          @change="changeAddress"
          style="height: 70px;margin-left: 0px;display: block">
        </el-radio>

        <div style="position: absolute;top: 30px;left: 60px;right:10px;font-size: 18px">
          <div
              v-for="(item,index) in address"
              :key="index"
              style="display: flex;justify-content: space-between;height: 70px;">
            <div>
              <span>{{item.name}}</span>
              <span>{{item.tel}}</span>
              <p>{{item.address}}</p>
            </div>
            <i class="el-icon-close"></i>
          </div>
        </div>
        <el-button
          type="success"
          style="position:fixed;bottom:0;left:0;width: 100%;height: 80px;font-size: 18px;"
          @click="addressFormVis=true"
        >
          <i class="el-icon-plus"></i>新增地址
        </el-button>
      </el-dialog>

      <el-dialog
        title="选择地址"
        :visible.sync="addressFormVis"
        fullscreen
        center>
        <el-form  label-width="80px" :model="addressForm" label-position="left" ref="addressForm">
          <el-form-item label="联系人" >
            <el-input v-model="addressForm.name"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="addressForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="addressForm.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 100%;height: 30px"
              type="success" @click="baocun">保存并使用</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-container>
</template>

<script>
    export default {
        name: "orderReady",
        mounted(){
          if(this.$store.state.Apiece===''){
            this.$router.replace('/order/index')
          }
          //初始化
          this.Apiece=this.$store.state.Apiece;
          this.table=Array.prototype.slice.call(this.Apiece.Value);
          //计算金额
          var x = 0;
          this.table.forEach((it,index)=>{
            x+=(it.Money*it.many)
          })
          this.money=x;
          //初始化地址
          if(this.address.length!=0){
            this.Apiece.address=this.address[0]
          }
        },
        data(){
          return{
              //假设这是从后台请求的该用户的地址列表
              address:[
                {
                  label:'地址1',
                  name:'李',
                  tel:'183xxxxxxxx',
                  address:'这是一个地址'
                }
              ],
              //备注弹框
              visible:false,
              //地址弹框
              addressVis:false,
              //增加地址表单
              addressFormVis:false,
              addressForm:{
                name: '',
                tel: '',
                address: ''
              },
              Apiece:'',
              table:[],
              //用餐信息
              value:'',
              //备注信息
              textarea:'',
              options:[
                {
                  label:'1份',
                  value:1
                },{
                  label:'2份',
                  value:2
                },{
                  label:'3份',
                  value:3
                },{
                  label:'4份',
                  value:4
                },{
                  label:'5份',
                  value:5
                },{
                  label:'6份',
                  value:6
                },{
                  label:'7份',
                  value:7
                },{
                  label:'8份',
                  value:8
                },{
                  label:'9份',
                  value:9
                },{
                  label:'10份以上',
                  value:10
                }
                ],
              addressCheck:''
          }
        },methods:{
            back(){
              this.$router.go(-1);
            },
            beizhu(){
              this.Apiece.beizhu=this.textarea;
              this.visible=false;
            },
            canju(){
              this.Apiece.canju=this.value;
            },
            baocun(){
              var len = this.address.length+1;
              this.address.push({
                label:'地址'+len,
                name:this.addressForm.name,
                tel:this.addressForm.tel,
                address:this.addressForm.address
              })
              this.$refs['addressForm'].resetFields();
              this.addressFormVis=false;
            },
            changeAddress(){
              this.Apiece.address = this.address[this.addressCheck.charAt(this.addressCheck.length-1)-1]
              this.addressVis=false;
            }
        }
    }
</script>

<style scoped>
  .peisong_peolpe{
    margin-top: 50px;
    text-align: left;
    color: white;
  }
  .bg{
    background: -webkit-linear-gradient(right top,blue,whitesmoke); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right,blue,whitesmoke); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right,blue,whitesmoke); /* Firefox 3.6 - 15 */
    background: linear-gradient(deepskyblue,whitesmoke);
  }
  .peisong_value{
    width: 100%;
    background-color: white;
    margin-top: 30px;
  }
  .peisong_value .el-row{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px darkslategray solid;
  }
  .el-table{
    width:100%;
  }
  .food{
    padding: 3px;
    margin-top: 30px;
  }
  .footer{
    position: fixed;
    bottom:0;
    height: 60px;
    line-height:60px;
    background-color: white;
    width: 100%;
    background-color: rgba(50,50,50,.9);
    display: flex;
    justify-content: space-between;
  }
  .footer span{
    color: white;
    font-size: 18px;
  }
  .footer .el-button{
    position: fixed;
    right: 0;
    height:60px;
    width: 100px;
    background-color: coral;
    border: none;
    font-size: 18px;
    color: white;
    font-weight: bold;
  }
  .other{
    padding: 3px;
    margin-top: 30px;
    width: 100%;
    background-color: white;
  }
  .other>div{
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
  }
  .address{
    color: white;
    font-size: 20px;
    font-weight: bolder;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
    width:100%
  }

</style>
