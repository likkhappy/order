<template>
  <div class="credit-page">
    <navigator title="修改买号特征信息" show-class="second"></navigator>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>出生日期:</span>
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


    <light-bar left-text="买号购物类目:" right-text="(根据买号的购物习惯，筛选四个，不可修改)"></light-bar>
    <section class="item-list-wrap">
      <ul class="item-list">
        <li class='item active'>服装鞋包</li>
        <li class='item active'>手机数码</li>
        <li class='item'>家用电器</li>
        <li class='item'>美妆饰品</li>
        <li class='item'>母婴用品</li>
        <li class='item'>家具建材</li>
        <li class='item active'>百货食品</li>
        <li class='item'>运动户外</li>
        <li class='item'>文化娱乐</li>
        <li class='item active'>生活服务</li>
        <li class='item'>汽摩配件</li>
        <li class='item'>游戏话费</li>
      </ul>
    </section>


    <light-bar left-text="蚂蚁花呗认证:" right-text="(若未开通或无法使用花呗，也请提交截图)"></light-bar>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/myhb.png" slot="small-img">
            <img src="../../assets/img/myhb.png" slot="big-img">
          </example-img>
        </div>

        <p class="def-tip">截图位置：支付宝APP-我的</p>
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/myhb2.png" slot="small-img">
            <img src="../../assets/img/myhb2.png" slot="big-img">
          </example-img>
        </div>

        <p class="def-tip">截图位置：支付宝APP-我的个人中心(顶部头像处)-个人主页</p>
    </div>


    <light-bar left-text="淘气值截图："></light-bar>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>淘气值范围:</span>
        <select class="sel-card">
          <option value="56">0-199</option>
          <option value="67">200-399</option>
          <option value="68">400-599</option>
          <option value="69">600-799</option>
          <option value="70">800-999</option>
          <option value="57">1000-1999</option>
          <option value="58">2000-2499</option>
          <option value="59">2500以上</option>
        </select>
      </div>
    </modify>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/tqz.jpg" slot="small-img">
            <img src="../../assets/img/tqz.jpg" slot="big-img">
          </example-img>
        </div>

        <p class="def-tip">截图位置：支付宝APP-我的</p>
    </div>


    <light-bar left-text="购物地址截图："></light-bar>
    <div class="address-tb">
      <p>目前仅支持PC端提交</p>
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
  .address-tb {
    background: $white;
    text-align: center;
    color: $def-color;
    p {
      line-height: px-rem(200px);
      font-size: px-rem(26px);
    }
  }

  .item-list-wrap {
    background: $white;
    padding: px-rem(40px) 0 px-rem(40px) px-rem(26px);
    li {
      display: inline-block;
      background: $white;
      margin: px-rem(10px);
      border: 1px solid #999;
      border-radius: px-rem(8px);
      padding: px-rem(10px) px-rem(24px);
      color: #999;

      &.active {
        background: #999;
        color: $white;
      }
    }
  }
}



</style>
