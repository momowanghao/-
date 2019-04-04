<template>
    <div class="change-password">
        <div class="container">
            <div class="change-box">
                <div class="logo-img">
                    <img src="@/assets/images/logo.png" alt="">
                </div>
                <div class="title">修改密码</div>
                <div class="phone-number">
                    <input type="text" placeholder="请输入手机号码">
                </div>
                <div class="auth-code">
                    <input type="text" placeholder="请输入验证码">
                </div>
                <div class="auth-submit">获得验证码</div>
                <div class="new-password">
                    <input type="password" placeholder="请输入新密码">
                </div>
                <div class="renew-password">
                    <input type="password" placeholder="请再次输入新密码">
                </div>
                <div class="submit">确认修改</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"register",
    data(){
        return{}
    }
}
</script>
<style scoped>
.change-password,.container{
  width: 1920px;
  height: 1080px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -540px;
  margin-left: -960px;
  background:rgba(76,198,220,1);  
  background-image:url("../../assets/images/background-image.jpg");
  background-size:100% 100%;
  background-repeat: no-repeat;
}
.logo-img{
    position: fixed;
    margin-top:173px;
    margin-left:860px;
    width:179px;
    height:179px;
    background:rgba(255,255,255,1);
    border-radius:50%;
}
.login-img>img{
    width:100%;
    height:100%;
}
.title{
    position:fixed;
    width:160px;
    height:39px;
    margin-top:384px;
    margin-left:882px;
    font-size:40px;
    font-family:PingFangSC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
}
.phone-number{
    position:fixed;
    margin-top:486px;
    margin-left:735px;
}
.phone-number>input{
    width:450px;
    height:56px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 4px 0px rgba(13,3,8,0.3);
    border-radius:5px;
    font-size:22px;
    font-weight:bold;
}
.auth-code{
    position:fixed;
    margin-top:571px;
    margin-left:735px;
}
.auth-code>input{
    width:225px;
    height:56px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 4px 0px rgba(13,3,8,0.3);
    border-radius:5px;
    width:149px;
    font-size:22px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    color:rgba(136,136,136,1);
    line-height:56px;
    text-align: center;
}
.auth-submit{
    position:fixed;
    margin-top:571px;
    margin-left:985px;
    width:200px;
    height:56px;
    background:rgba(255,190,0,1);
    border-radius:5px;
    font-size:22px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height:56px;
    cursor: pointer;
}
.new-password{
    position:fixed;
    margin-top:656px;
    margin-left:735px
}
.new-password>input{
    width:450px;
    height:56px;
    font-size:22px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 4px 0px rgba(13,3,8,0.3);
    border-radius:5px;
    line-height:56px;
}
.renew-password{
    position: fixed;
    margin-top:741px;
    margin-left:735px;
}
.renew-password>input{
    width:450px;
    height:56px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 4px 0px rgba(13,3,8,0.3);
    border-radius:5px;
    line-height:56px;
    font-size:22px;
    font-family:MicrosoftYaHei;
    font-weight:bold;
}
.submit{
    position:fixed;
    margin-top:826px;
    margin-left:735px;
    width:450px;
    height:56px;
    background:rgba(83,230,251,1);
    border-radius:5px;
    font-size:29px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height:56px;
    cursor: pointer;
}
</style>