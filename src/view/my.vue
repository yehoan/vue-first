<template>
  <div class="content">
   <!-- <input type="text" placeholder="请输入手机号/邮箱">
    <input type="text" placeholder="输入密码/验证码">
    <input type="button" value="登陆">-->
    <div class="content_item">
      <input type="text" v-model="account" placeholder="请输入手机号/邮箱" class="account">
    </div>
     <div>
       <input type="text" v-model="password" placeholder="请输入密码/验证码" class="password">
     </div>
      <div class="login">
        <input type="text" class="login_btn" value="登陆">
      </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
         account:"",
         password:"",

    }
  },
  watch:{
     account:function (newVal,oldVal) {
       console.log(newVal);
       this.account=newVal;
     },
      password:function (newVal,oldVal) {
        this.password=newVal;
      }
  },
  methods:{
    blank(){
       this.account="";
    },
    Nblank(){
      this.password='';
    },


  }
}
</script>
<style lang="less">
  .content{
    margin-top: 12rem;
    text-align: center;

    width: 100%;

    .account{
      font-size: 3rem;
      width: 60%;
      padding-left: 1.5rem;
      box-sizing: border-box;
      border: 1px solid slategrey;
      height: 6rem;
      border-radius: 1rem;
      margin-top: 3rem;
    }
    .password{
      font-size: 3rem;
      width: 60%;
      height: 6rem;
      padding-left: 1.5rem;
      box-sizing: border-box;
      border: 1px solid slategrey;
      border-radius: 1rem;
      margin-top: 3rem;
    }
    .login{

      margin-top: 3rem;

      .login_btn{
         width: 45%;
         height: 6rem;
         border-radius: 3rem;
         border:1px solid transparent;
         background-color: #fe8233;
         text-align: center;
         font-size: 4rem;
         color: white;
      }
    }
  }
</style>
