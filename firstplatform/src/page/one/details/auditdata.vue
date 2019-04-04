<template>
    <div class="audit-data">
        <div class="container">
            <div class="header">
                <router-link to="/firsthomeone">
                    <div class="return">
                        <img src="@/assets/images/return.png" alt="">
                        <span>返回</span>
                    </div>
                </router-link>
                <div class="geli"></div>
                <div class="title">申报资料</div>
                <div class="user-name">东坡文旅</div>
                <div class="user-position">区管理员</div>
                <div class="quit">
                    <el-button type="text" @click="open7">
                        <img src="@/assets/images/quit.png" alt="该图无法显示">
                    </el-button>    
                </div>
            </div>
            <div class="container-one">
                <div class="license">营业执照</div>
                <div class="license-photo">
                    <img src="" alt="">
                </div>
            </div>
            <div class="container-two">
                <div class="other-license">其他相关资质</div>
                <!-- v-for -->
                <div class="other-license-photo" v-for="item in list" :key="item.id">
                    <img :src="item.url" alt="">
                </div>
            </div>
            <div class="container-three">
                <div class="cover">封面图片</div>
                <div class="cover-photo">
                    <img src="" alt="">
                </div>
                <div class="cover-photo-preview">图片预览</div>
            </div>
            <div class="contianer-four">
                <div class="scenic-title">景区基本资料</div>
                <div class="scenic-name">{{scenic-name}}</div>
                <div class="scenic-data">{{scenic-data}}</div>
            </div>
            <div class="contianer-five">
                <div class="scenic-VR">景区VR链接</div>
                <div class="scenic-VR-address">
                    <span>http://</span>
                    <span>{{address}}</span>
                </div>
            </div>
            <div class="contianer-six">
                <div class="scenic-photo-album">
                    <span>景区相册</span>
                    <span>(最多上传9张图片)</span>
                </div>
                <!-- v-for -->
                <div class="scenic-photo-album-details" v-for="item in list" :key="item.id">
                    <img :src="item.url" alt="">
                </div>
            </div>
            <div class="contianer-seven">
                <div class="scenic-open-date">景区开放时间</div>
                <div class="scenic-open-date-details">{{scenic-open-date-detaile}}</div>
            </div>
            <div class="container-eight">
                <div class="scenic-admission-ticket">景区门票详情</div>
                <div class="scenic-admission-ticket-details">{{scenic-admission-ticket-details}}</div>
            </div>
            <div class="container-nine">
                <div class="scenic-phone">
                    <span>景区联系电话</span>
                    <span>(多个号码间用"、"隔开)</span>
                </div>
                <div class="scenic-phone-number">{{scenic-phone-number}}</div>
            </div>
            <div class="button-one">驳回</div>
            <div class="button-two">通过审核</div>
        </div>
    </div>
</template>
