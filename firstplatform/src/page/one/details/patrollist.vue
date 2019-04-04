<template>
  <div class="patrol-list">
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
      <div class="manage-container">
        <div class="manage-header">
          <span class="manage-name">景区资料更新管理</span>
          <span class="search">
            <input type="text" placeholder="请输入内容">
          </span>
        </div>
        <div class="manage-title">
          <span>所属乡镇</span>
          <span>部门名称</span>
          <span>查看详情</span>
        </div>
        <div class="manage-one">
          <div class="manage-part" v-for="item in scenicList" :key="item.id">
            <span>{{item.name}}</span>
            <span>{{item.position}}</span>
            <router-link to="/details">
              <span>查看详情</span>
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
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
