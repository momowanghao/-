<template>
  <div class="public-news">
    <div class="container">
      <div class="header">
        <router-link to="/firsthomeone">
          <div class="return">
            <img src="@/assets/images/return.png" alt>
            <span>返回</span>
          </div>
        </router-link>
        <div class="geli"></div>
        <div class="title">景区基本资料</div>
        <div class="user-name">东坡文旅</div>
        <div class="user-position">区管理员</div>
        <div class="quit">
          <el-button type="text" @click="open7">
            <img src="@/assets/images/quit.png" alt="该图无法显示">
          </el-button>
        </div>
      </div>
      <div class="container-one">
        <div class="news-title">
          <input type="text" placeholder="请输入标题">
        </div>
        <div class="news-details">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入内容"></textarea>
        </div>
      </div>
      <div class="submit">确认发布</div>
    </div>
  </div>
</template>
