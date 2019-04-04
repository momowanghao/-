// 自主注册申报
<template>
  <div class="register-declare">
    <div class="container">
      <div class="header">
        <div class="title">自主注册申报</div>
      </div>
      <div class="container-one">
        <div class="cover-photo">封面图片</div>
        <div class="choice-photo">
          <input id="files" type="file" onchange="chan(this)" name="files">
        </div>
        <div class="photo-position">
          <img src alt id="photos">
        </div>
        <div class="photo-size">
          <div>上传景区封面图</div>
          <div>支持2MB以内的JPG、JPGE、PNG图片</div>
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
      <div class="button-one">上传审核</div>
    </div>
  </div>
</template>
