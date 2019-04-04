<template>
    <div class="scenic-data-manage">
        <div class="container">
            <div class="header">
                <router-link to="/firsthomeone">
                    <div class="return">
                        <img src="@/assets/images/return.png" alt="">
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
            <div class="license">
                <div class="license-name">营业执照</div>
                <div class="license-photo">
                    <img src="" alt="">
                </div>
            </div>
            <div class="other-license">
                <!-- v-for循环产生c从服务器拿到的图片 -->
                <div v-for="item in list" :key="item.id">
                    <img :src="item.url" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
