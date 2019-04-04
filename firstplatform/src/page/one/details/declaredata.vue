<template>
    <div class="declaredata">
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
                <div class="social-credit-number">社会信用代码</div>
                <div class="social-credit-photo">
                    <img src="url" alt="">
                </div>
            </div>
            <div class="container-two">
                <div class="position-name">单位名称</div>
                <div class="position-name-details">{{position-name-details}}</div>
            </div>
            <div class="contianer-three">
                <div class="specific-position-name">具体负责部门名称</div>
                <div class="specific-position-details">{{specific-position-details}}</div>
            </div>
            <div class="container-four">
                <div class="scenic-principle">景区负责人信息</div>
                <div class="principle-name">负责人姓名</div>
                <div class="principle-name-details">{{}}</div>
                <div class="id-card">身份证号码</div>
                <div class="id-card-details">{{}}</div>
                <div class="phone-one">联系电话①</div>
                <div class="phone-one-number">xxxxx</div>
            </div>
             <div class="container-five">
                <div class="scenic-part-principle"></div>
                <div class="principle-part-name">负责人姓名</div>
                <div class="principle-part-name-details">{{}}</div>
                <div class="part-id-card">身份证号码</div>
                <div class="part-id-card-details">{{}}</div>
                <div class="part-phone-one">联系电话①</div>
                <div class="part-phone-one-number">{{}}</div>
            </div>
            <div class="button-one">驳回</div>
            <div class="button-two">通过审核</div>
        </div>
    </div>
</template>
