<template>
    <div class="strategydeclare">
        <div class="container">
            <div class="header">
                <router-link to="/firsthomeone">
                    <div class="return">
                        <img src="@/assets/images/return.png" alt="">
                        <span>返回</span>
                    </div>
                </router-link>
                <div class="geli"></div>
                <div class="title">景区详情</div>
                <div class="user-name">东坡文旅</div>
                <div class="user-position">区管理员</div>
                <div class="quit">
                    <el-button type="text" @click="open7">
                        <img src="@/assets/images/quit.png" alt="该图无法显示">
                    </el-button>    
                </div>
            </div>
            <div class="container-one">
                <div class="cover">封面图片</div>
                <div class="cover-photo-photo">
                    <img src="url" alt="">
                </div>
                <div class="cover-photo-preview">图片预览</div>
            </div>
            <div class="container-two">
                <div class="scenic-album">
                    <span>攻略图片</span>
                    <span>(最多上传9张图片)</span>
                </div>
                <div class="photos">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="container-three">
                <div class="strategy">攻略内容</div>
                <div class="strategy-title">{{strategy-title}}</div>
                <div class="strategy-content">{{strategy-content}}</div>
            </div>
            <div class="submit-one">驳回</div>
            <div class="submit-two">通过审核</div>
        </div>
    </div>
</template>
