<template>
    <div class="home">
        <div class="container">
            <div class="nav-left">
                <div class="logo-img">
                    <img src="@/assets/images/logo.png" alt="图片无法显示">
                </div>
                <div class="nav">
                    <div class="nav-list">
                        <router-link to="/firsthomeone">
                            <div class="d1 ">景区列表</div>
                        </router-link>
                        <router-link to="/firsthometwo">
                            <div class="d1 active">
                                二级平台审核
                                <div class="d2"></div>
                            </div>
                        </router-link>
                        <router-link to="/firsthomethree">
                            <div class="d1">景区入驻审核</div>
                        </router-link>
                        <router-link to="/firsthomefour">
                            <div class="d1">日常资料更新审核</div>
                        </router-link>
                        <router-link to="/firsthomefive">
                            <div class="d1">问卷反馈</div>
                        </router-link>
                        <router-link to="/firsthomesix">
                            <div class="d1">数据报表</div>
                        </router-link>
                        <router-link to="/firsthomeseven">
                            <div class="d1">每月巡查</div>
                        </router-link>
                        <router-link to="/firsthomeeight">
                            <div class="d1">我的消息
                                <div class="d3">{{newsNumber}}</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="header">
                <div class="title">东坡区全域旅游监管平台</div>
                <div class="user-name">东坡文旅</div>
                <div class="user-position">区管理员</div>
                <div class="quit">
                    <el-button type="text" @click="open7">
                        <img src="@/assets/images/quit.png" alt="该图无法显示">
                    </el-button>    
                </div>
            </div>
            <div class="manage-container">
                <div class="manage-header">
                    <span class="manage-name">二级监管平台注册管理</span>
                    <span class="search">
                        <input type="text" placeholder="请输入内容">
                    </span>
                </div>
                 <div class="manage-title">
                    <span>单位名称</span>
                    <span>部门名称</span>
                    <span>负责人</span>
                    <span>分管领导</span>
                    <span>申报资料</span>
                </div>
                <div class="manage-one">
                    <div class="manage-part" v-for="item in scenicList" :key="item.id">
                        <span>{{item.name}}</span>
                        <span>{{item.position}}</span>
                        <span>{{item.position}}</span>
                        <span>{{item.position}}</span>
                        <router-link to="/details">
                        <span>申报详情</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="page">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"home",
    data(){
        return{
            newsNumber:"",
             scenicList:[
                {id:0,name:"花海·桂花湖",position:"东坡区复盛乡xxxxxxxxx"},
                {id:1,name:"花海·桂花湖",position:"东坡区复盛乡xxxx"},
                {id:2,name:"花海·桂花湖",position:"东坡区复盛乡xxxx"},
                {id:3,name:"花海·桂花湖",position:"东坡区复盛乡xxxx"},
                {id:4,name:"花海·桂花湖",position:"东坡区复盛乡xxxx"},
            ],
        }
    },
       methods: {
      open7() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
}
</script>
<style lang="" scoped>
.home,.container{
    width: 1920px;
    height: 1080px;
    position:fixed;
    top: 50%;
    left: 50%;
    margin-top: -540px;
    margin-left: -960px;
}
.nav-left{
    position:fixed;
    width:300px;
    height:1080px;
    background:rgba(67,76,85,1);
    box-shadow:0px 0px 20px 0px rgba(6,0,1,0.2);
    font-size:24px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
}
.logo-img{
    position:fixed;
    margin-top:48px;
    margin-left:57px;
    width:185px;
    height:185px;
}
.nav{
      position:fixed;
      margin-top:308px;
}
/* a{
    display: block;
} */
.d1{
    width:300px;
    height:100px;
    font-size:24px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:100px;
    text-align: center;
    cursor: pointer;
}
.d2{
    margin-top:-70px;
    margin-left:284px;
    width:6px;
    height:44px;
    background:rgba(76,198,220,1);
    border-radius:3px;
}
.active{
    background:rgba(80,101,122,1);
}
.d3{
    margin-top:-60px;
    margin-left:230px;
    width:20px;
    height:20px;
    background:rgb(250, 2, 2);
    border-radius:50%;
}
 .header{
    position:fixed;
    margin-left:300px;
    width:1620px;
    height:308px;
    background:rgba(76,198,220,1);
  }
  .title{
    position:fixed;
    margin-top:26px;
    margin-left:42px;
    width:686px;
    height:57px;
    font-size:60px;
    font-family:PingFangSC-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:57px;
    text-align: center;
  }
  .user-name{
    position:fixed;
    margin-top:46px;
    margin-left:1123px;
    width:123px;
    height:28px;
    font-size:30px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .user-position{
    position:fixed;
    margin-top:55px;
    margin-left:1262px;
    width:113px;
    height:26px;
    background:rgba(255,190,0,1);
    border-radius:13px;
    font-size:20px;
    font-family:MFYueYuan_Noncommercial-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:26px;
    text-align: center;
  }
.quit{
    position:fixed;
    margin-top:40px;
    margin-left:1543px;
    width:30px;
    height:31px;
  }
  .manage-container{
    position:fixed;
    margin-top:120px;
    margin-left:340px;
    width:1540px;
    height:840px;
  }
  .manage-header{
    position:fixed;
    /* margin-top:;
    margin-left:; */
    width:1540px;
    height:110px;
    background:rgba(65,84,103,1);
    border-radius:15px 15px 0px 0px;
  }
  .manage-name{
    position:fixed;
    margin-top:32px;
    margin-left:48px;
    /* width:165px; */
    height:40px;
    font-size:40px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:40px;
    text-align: center;
  }
  .search{
      position:fixed;
      margin-top:34px;
      margin-left:1171px;
  }
  .search>input{
    width:305px;
    height:40px;
    background:rgba(246,247,251,1);
    border-radius:5px;
    font-size:17px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(184,192,207,1);
  }
  .manage-title{
    position:fixed;
    margin-top:110px;
    /* margin-left:; */
    width:1540px;
    height:60px;
    background:rgba(246,247,251,1);
    box-shadow:0px 0px 10px 0px rgba(6,0,1,0.2);
  }
  .manage-one{
    position:fixed;
    margin-top:170px;
    width:1540px;
    height:670px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
    border-radius:0px 0px 15px 15px;
  }
  .manage-title>span:nth-child(1),.manage-part>span:nth-child(1){
      width:408px; 
      /* border-left:1px solid rgb(224, 15, 95);  */
  }
  .manage-title>span:nth-child(2),.manage-part>span:nth-child(2){
      width:371px; 
      margin-left:408px;
      border-left:1px solid rgb(173, 172, 172);
  }
  .manage-title>span:nth-child(3),.manage-part>span:nth-child(3){
      width:243px;
      margin-left:780px;
      border-left:1px solid rgb(173, 172, 172);
  }
  .manage-title>span:nth-child(4),.manage-part>span:nth-child(4){
      width:283px;
      margin-left:1024px;
      border-left:1px solid rgb(173, 172, 172);
  }
  .manage-title>span:nth-child(5),.manage-part>a>span{
      width:232px;
      margin-left:1308px;
      border-left:1px solid rgb(173, 172, 172);
  }
  .manage-title>span{
    line-height:60px;
    font-size:22px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(183,191,206,1);
    position:fixed;
    text-align:center; 
  }
/* .manage-title>span+span{
    border-left:1px solid rgb(224, 15, 95);
} */
.manage-part span{
    height:60px;
    font-size:22px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(53,53,53,1);
    position:fixed;
    text-align:center; 
    line-height:60px;
    overflow: hidden;
}
.manage-part{
    width:1540px;
    height:60px;
    border-bottom: 1px solid rgba(183,191,206,1);
}
.manage-part>a>span,.manage-part>span:last-child{
    cursor: pointer;
}
.manage-part>a>span{
    color:#FFBE00;
}
.manage-part>span:last-child{
    color:#FF2828;
}
.page{
    position:fixed;
    margin-top:996px;
    margin-left:1100px;
}
a{
    text-decoration: none;
}
</style>
