<template>
    <div class="scenicdata">
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
            <div class="container-one">
                <div class="cover-photo">封面图片</div>
                <div class="choice-photo">
                    <input id="files" type="file" onchange="chan(this)" name="files" />
                </div>
                <div class="photo-position">
                    <img src="" alt="" id="photos">
                </div>
                <div class="photo-size">
                    <div>上传景区封面图</div>
                    <div>支持2MB以内的JPG、JPGE、PNG图片</div>
                </div>
                <div class="photo-preview">图片预览</div>
            </div>
            <div class="container-two">
                <div class="scenic-basic-data">景区基本资料</div>
                <div class="scenic-name">
                    <input type="text" placeholder="填写景区名称">
                </div>
                <div class="scenic-basic-details">
                    <textarea name="" id="" cols="30" rows="10" placeholder="填写景区简介"></textarea>
                </div>
            </div>
            <div class="container-three">
                <div class="scenic-vr">景区VR链接</div>
                <div class="scenic-vr-position">
                    <span>http://</span>
                    <span>
                        <input type="text">
                    </span>
                </div>
            </div>
            <div class="container-four">
                <div class="scenic-album">
                    <span>景区相册</span>
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
            <div class="container-five">
                    <div class="scenic-open-date">景区开放时间</div>
                    <div class="scenic-open-date-details">
                        <textarea name="" id=""></textarea>
                    </div>
            </div>
            <div class="container-six">
                <div class="scenic-admission-ticket">景区门票信息</div>
                <div class="scenic-admission-ticket-details">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="container-seven">
                <div class="scenic-phone">
                    <span>景区联系电话</span>
                    <span>(号码之间用"、"隔开)</span>
                </div>
                <div class="scenic-phone-details">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="submit">保存修改</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
