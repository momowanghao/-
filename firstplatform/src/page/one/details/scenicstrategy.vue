<template>
    <div class="scenicstrategy">
        <div class="container">
            <div class="header">
                <router-link to="/firsthomeone">
                    <div class="return">
                        <img src="@/assets/images/return.png" alt="">
                        <span>返回</span>
                    </div>
                </router-link>
                <div class="geli"></div>
                <div class="title">攻略信息管理</div>
                <div class="user-name">东坡文旅</div>
                <div class="user-position">区管理员</div>
                <div class="quit">
                    <el-button type="text" @click="open7">
                        <img src="@/assets/images/quit.png" alt="该图无法显示">
                    </el-button>    
                </div>
            </div>
                <!-- 读取信息循环产生读取的攻略 -->
           <div class="scenic-strategy" v-for="item in list" :key="item.id">
                <div class="scenic-photo">
                    <img :src="item.url" alt="">
                </div>
                <div class="scenic-startegy-details">
                    {{massage}}
                </div>
                <router-link to="/details">
                    <div class="scenic-edit" @click="edit">编辑</div>
                </router-link>
                <div class="scenic-delete" @click="deleted">
                    <el-button type="text" @click="open7">删除</el-button>
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
    
}
</script>
<style lang="">
    
</style>