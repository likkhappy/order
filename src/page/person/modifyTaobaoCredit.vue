<template>
  <div class="credit-page">
    <navigator title="修改淘宝信用等级" show-class="second"></navigator>
    <light-bar left-text="提交买号信息："></light-bar>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>淘宝账号:</span>
        <span class="imp">*</span>:
        <input class="taobao-v" readonly value="车e族网">
        <a class="what-taobao" href="javascript: void(0);">什么是淘宝账号?</a>
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>信用等级:</span>
        <span class="imp">*</span>:
        <select class="sel-card">
          <option value="1">1心</option>
          <option value="2">2心</option>
          <option value="3">3心</option>
          <option value="4">4心</option>
          <option value="5">5心</option>
          <option value="6">1钻</option>
          <option value="7">2钻</option>
          <option value="8">3钻</option>
          <option value="9">4钻</option>
          <option value="10">5钻</option>
          <option value="11">1皇冠</option>
          <option value="12">2皇冠</option>
          <option value="13">3皇冠</option>
          <option value="14">4皇冠</option>
          <option value="15">5皇冠</option>
        </select>
      </div>
    </modify>
    <light-bar left-text="信用等级截图："></light-bar>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/xy.png" slot="small-img">
            <img src="../../assets/img/xy.png" slot="big-img">
          </example-img>
        </div>


        <p class="def-tip">截图位置：手机淘宝APP-我的淘宝-我的评价（屏幕下拉到底）</p>
    </div>
    <light-bar left-text="实名认证截图："></light-bar>

    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/xmrz.png" slot="small-img">
            <img src="../../assets/img/xmrz.png" slot="big-img">
          </example-img>
        </div>
      <p class="def-tip">截图位置：支付宝APP-我的-设置（右上角图标）-账户与安全</p>
    </div>
    <p class="tip-p">绑定之后无法删除，请谨慎添加</p>
    <btn text="提交审核"></btn>
    <p class="tip-p">账号审核时间：周一至周六9:00-21:00</p>


  </div>
</template>

<script>
import navigator from '@/components/navigator'
import modify from '@/components/modify'
import lightBar from '@/components/lightBar'
import btn from '@/components/btn'
import exampleImg from '@/components/exampleImg'
import uploadImg from '@/components/uploadImg'


export default {
  data () {
    return {
      phone: '17325203701'
    }
  },
  components: {
    navigator,modify, lightBar, btn, exampleImg, uploadImg
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";
$imp-color: #F30;
$def-color: #999;
.imp {
  color: $imp-color;
}
  .show-b {
    border-bottom: 1px solid #f9f9f9;
  }
.credit-page {
  .taobao-v {
    color: $def-color;
  }
  .what-taobao {
    color: $imp-color;
  }

  .sel-card {
    background: $white;
    border: none;
    width: 60%;
    height: px-rem(88px);
    line-height: px-rem(88px);
    color: $def-color;
    outline: 0;
    text-transform: none;
  }
  .light-con {
    background: $white;
    padding-top: px-rem(40px);
  }
  .tip-p {
    color: $imp-color;
    text-align: center;
    line-height: px-rem(100px);
  }
  .def-tip {
    padding-left: px-rem(40px);
    color: $def-color;
    line-height: px-rem(96px);
  }

  .img-wrap {

  }

  .upload-box {
    float: left;
    margin-left: 25%;
    margin-right: px-rem(40px);
  }
}



</style>
