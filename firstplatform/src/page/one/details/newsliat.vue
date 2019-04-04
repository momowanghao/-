<template>
  <div class="news-list">
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
          <div class="news-title">消息标题</div>
          <div class="news-date">{{news-date}}</div>
          <div class="news-own">{{news-own}}</div>
          <div class="news-details">{{details}}</div>
      </div>
    </div>
  </div>
</template>
