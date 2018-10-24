<template>
 <div>
  <el-dialog title="登录"
             :visible.sync="$store.state.logvisible"
             center
             width="80%"
             >
    <el-form :model="logform" label-position="top" :rules="logrules" ref="logForm">
      <el-form-item label="用户名" :label-width="formLabelWidth"  prop="username">
        <el-input v-model="logform.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth"  prop="password">
        <el-input v-model="logform.password" autocomplete="off" type="password"></el-input>
      </el-form-item>
    </el-form>
    <p>没有账号？<span style="cursor: pointer" @click="reg">点击注册</span></p>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$store.commit('changelog')">取 消</el-button>
      <el-button type="primary" @click="log">确 定</el-button>
    </div>
  </el-dialog>


  <el-dialog title="注册"
             :visible.sync="$store.state.regvisible"
             center
             width="80%"
             >
    <el-form :model="regform" label-position="top" :rules="regrules" ref="regForm">
      <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
        <el-input v-model="regform.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="绑定邮箱" :label-width="formLabelWidth" prop="email">
        <el-input v-model="regform.email" autocomplete="off" type="email"></el-input>
      </el-form-item>
      <el-form-item label="输入密码" :label-width="formLabelWidth" prop="password">
        <el-input v-model="regform.password" autocomplete="off" type="password"></el-input>
      </el-form-item>
      <el-form-item label="重复输入密码" :label-width="formLabelWidth" prop="pass">
        <el-input v-model="regform.pass" autocomplete="off" type="password"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$store.commit('changereg')">取 消</el-button>
      <el-button type="primary" @click="reg">确 定</el-button>
    </div>
  </el-dialog>
 </div>
</template>

<script>
    export default {
      name: "logRed",
      data(){
        //登录验证

        //注册验证
        let checkusername = (rule,value,callbcak) =>{
          if (value === '') {
            callback(new Error('请输入用户名'));
          }else{
            if(/^[a-zA-Z0-9_]{3,14}$/.test(value)){
              //向后台请求是否被注册
              callbcak()
            }else{
              callback(new Error('输入正确格式（字母数字下划线的3-14位）'));
            }
          }
        }
        let checkemaill = (rule,value,callback) =>{
          if (value === '') {
            callback(new Error('请输入邮箱'));
          }else{
            if(/^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/.test(value)){
              callback()
            }else{
              callback(new Error('请输入正确的邮箱'))
            }
          }
        }
        let validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if(value.length<6||value.length>14){
              callback(new Error('密码长度应该大于6位并小于14位'));
            }
            if(/^([0-9]{6,14}|[a-zA-Z]{6,14})$/.test(value)){
              callback(new Error('密码过于简单'));
            }
            if(this.regform.pass !== '') {
              this.$refs.regForm.validateField('pass');
            }
            callback();
          }
        };
        let validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.regform.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
         return{
           logform:{
              username:'',
              password:''
           },
           regform:{
              username:'',
              pass:'',
              password:'',
              email:''
           },
           formLabelWidth: '120px',
           logrules:{
             username: [
               { validator: checkusername, trigger: 'blur' , required: true}
             ],
             password: [
               {required: true }
             ],
           },
           regrules:{
             password:[
               { validator: validatePass, trigger: 'blur', required: true }
             ],
             pass: [
               { validator: validatePass2, trigger: 'blur', required: true }
             ],
             username: [
               { validator: checkusername, trigger: 'blur', required: true }
             ],
             email: [
               { validator: checkemaill, trigger: 'blur', required: true }
             ]
           }
         }
      },
      methods:{
          log(){
            this.submitlog('logForm')
            this.$store.commit('changelog');
          },
          reg(){
            this.submitreg('regForm')
            this.$store.commit('changelog');
            this.$store.commit('changereg');
          },
          submitlog(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
                //axios请求，假设成功请求
                this.$store.commit('Log',{userName:'用户001',id:'001'});


              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          submitreg(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              //登录操作
            } else {
              //console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>

</style>
