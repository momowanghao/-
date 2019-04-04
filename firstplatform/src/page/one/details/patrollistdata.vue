<template>
  <div class="patrollist-data">
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
        <div class="fire-control">消防安全</div>
        <div class="fire-control-data" v-for="item in list" :key="item.id">
          <img :src="item.url" alt>
        </div>
      </div>
      <div class="container-two">
        <div class="road-control">消防安全</div>
        <div class="road-control-data" v-for="item in list" :key="item.id">
          <img :src="item.url" alt>
        </div>
      </div>
      <div class="container-three">
          <div class="writing-report">文字报告</div>
          <div class="writing-report-details">{{writing-report-details}}</div>
      </div>
    </div>
  </div>
</template>
