<template>
  <div class="login">
        <div class="container">
            <div class="login-img">
                <img src="@/assets/images/login-img.png" alt="该图片无法显示">
            </div>
            <div class="login-box">
                <div class="login-logo">
                    <img src="@/assets/images/logo.png" alt="">
                </div>
                <div class="title">东坡区旅游平台管理后台</div>
                <div class="form">
                    <div class="form-item1">
                      <input type="text" placeholder="请输入手机号" ref="user">
                    </div>
                    <div class="form-item2">
                      <input type="password" placeholder="请输入密码" ref="pwd">
                    </div>
                    <router-link to="/changepassword">
                    <div class="forget" @click="showDialog">忘记密码？</div>
                    </router-link>
                    <div class="submit" @click="submitForm">登录</div>
                    <router-link to="/register">
                    <div class="apply" @click="applyInter">申请加入</div>
                    </router-link> 
                </div>
            </div>
            <div class="login-bottom-img">
                <img src="@/assets/images/login-bottom-img.png" alt="该图片无法显示">
            </div>
        </div> 
    </div>
</template>
<script>
export default {
  name:"login",
  data(){
    return{    
    }
  },
  methods:{
  },
}
</script>
<style scoped>
.login,.container{
  width: 1920px;
  /* height:1080; */
  height: 1080px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -540px;
  margin-left: -960px;
  background:rgba(76,198,220,1);   
} 
.login-img{
    position:fixed;
    width:1100px;
    height:937px;
    margin-top:74px;
}
.login-img>img{
    width:100%;
    height:100%;
}
.login-logo{
    position:fixed;
    width:179px;
    height:179px;
    background:rgba(255,255,255,1);
    border-radius:50%;
    margin-top:173px;
    margin-left:1348px;
    text-align: center;
}
.login-logo>img{
    width:165px;
    height:151px;
}
.title{
    width:442px;
    height:39px;
    font-size:40px;
    font-family:PingFangSC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    position:fixed;
    margin-top:384px;
    margin-left:1229px;
}
.form-item1{
    position:fixed;
    margin-top:486px;
    margin-left:1223px;
}
.form-item2{
    position:fixed;
    margin-top:571px;
    margin-left:1223px;
}
.form-item1>input,.form-item2>input{
    width:450px;
    height:56px;
    background:rgba(255,255,255,1);
    /* box-shadow:0px 0px 4px 0px rgba(13,3,8,0.3); */
    border-radius:5px;
    font-size:20px;
    font-weight:bold
}
.forget{
    position: fixed;
    margin-top:639px;
    margin-left:1578px;
    width:105px;
    height:22px;
    font-size:21px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    /* text-decoration:underline; */
    color:rgba(255,255,255,1);
    font-weight:bold;
    /* color:red; */
    cursor: pointer;
}
.submit{
    position: fixed;
    width:450px;
    height:56px;
    margin-top:685px;
    margin-left:1223px;
    background:rgba(255,190,0,1);
    border-radius:5px;
    font-size:29px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:56px;
    text-align: center;
    cursor: pointer;
}
.apply{
    position:fixed;
    width:450px;
    height:56px;
    margin-top:770px;
    margin-left:1223px;
    background:rgba(83,230,251,1);
    border-radius:5px;
    font-size:29px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:56px;
    text-align: center;
    cursor: pointer;
}
.login-bottom-img{
    position:fixed;
    width:563px;
    height:255px;
    margin-top:825px;
    margin-left:1357px;
}
</style>