<template>
  <div class="add-jd-page">
    <navigator title="添加京东账号" show-class="second"></navigator>
    <light-bar left-text="提交买号信息:" right-text="未开通白条不能接单，请勿添加"></light-bar>
    <modify :show-text='false' :show-icon="false" add-class="show-b" :path-param="null">
      <div slot="modify-con">
        <span>京东账号</span><span class="imp">*</span>:
        <input>
        <a @click="showJDImg = !showJDImg" class="what-taobao" href="javascript: void(0);">什么是京东账号?</a>
      </div>
    </modify>
    <modify :show-text='false' :show-icon="false" add-class="show-b" :path-param="null">
      <div slot="modify-con">
        <span>会员等级</span><span class="imp">*</span>:
        <input type="date">
      </div>
    </modify>
    <modify :show-text='false' :show-icon="false" :path-param="null">
      <div slot="modify-con">
        <span>出生日期</span><span class="imp">*</span>:
        <input>
      </div>
    </modify>



    <light-bar left-text="信用等级截图："></light-bar>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/jd-accout-level.jpg" slot="small-img">
            <img src="../../assets/img/jd-accout-level.jpg" slot="big-img">
          </example-img>
        </div>

        <p class="def-tip">截图位置：手机京东App-我的</p>
    </div>


    <light-bar left-text="实名认证截图："></light-bar>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/jdzh.png" slot="small-img">
            <img src="../../assets/img/jdzh.png" slot="big-img">
          </example-img>
        </div>

        <p class="def-tip">截图位置：手机京东App-我的-点击头像</p>
    </div>

    <light-bar left-text="买号购物类目:" right-text="(根据买号的购物习惯，筛选四个，不可修改)"></light-bar>
    <section class="item-list-wrap">
      <ul class="item-list">
        <li class='item active'>图书/音像/数字商品</li>
        <li class='item active'>家用电器</li>
        <li class='item'>手机/数码</li>
        <li class='item'>电脑/办公</li>
        <li class='item'>家具/家电/家装/厨具</li>
        <li class='item'>服饰内衣/珠宝首饰</li>
        <li class='item active'>个护化妆</li>
        <li class='item'>鞋靴/箱包/钟表/奢侈品</li>
        <li class='item'>运动健康</li>
        <li class='item active'>汽车用品</li>
        <li class='item'>母婴/玩具乐器</li>
        <li class='item'>食品饮料/保健食品</li>
        <li class='item'>彩票/旅行/充值/票务</li>
      </ul>
    </section>



    <light-bar left-text="京东白条认证：" right-text="(若未开通或无法使用白条，也请提交截图)"></light-bar>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/jd-baitiao.jpg" slot="small-img">
            <img src="../../assets/img/jd-baitiao.jpg" slot="big-img">
          </example-img>
        </div>

        <p class="def-tip">截图位置：手机京东App-我的-点击头像</p>
    </div>

    <p class="imp p-imp">绑定之后无法删除，请谨慎添加</p>
    <btn text="提交审核"></btn>
    <p class="imp p-imp">账号审核时间：周一至周六9:00-21:00</p>
    <img @click="showJDImg= !showJDImg" class="show-jd-img" v-show="showJDImg" src="../../assets/img/jdzh.png">

  </div>
</template>

<script>
import navigator from '@/components/navigator'
import lightBar from '@/components/lightBar'
import modify from '@/components/modify'
import btn from '@/components/btn'
import exampleImg from '@/components/exampleImg'
import uploadImg from '@/components/uploadImg'


export default {
  data () {
    return {
      showJDImg: false
    }
  },
  components: {
    navigator,lightBar, modify, btn, exampleImg, uploadImg
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";


.add-jd-page {
  input[type="date"]{ border:none;background: rgba(0,0,0,0);color:#9a9a9a; }
  .address-tb {
    background: $white;
    text-align: center;
    color: $def-color;
    p {
      line-height: px-rem(200px);
      font-size: px-rem(26px);
    }
  }
  .imp {
    text-align: center;
    color: #f30;
  }
  .p-imp {
    line-height: px-rem(70px);
    font-size: px-rem(26px);
  }
  .what-taobao {
    font-size: px-rem(24px);
    color: #f30;
    text-decoration: underline;
  }
  .item-list-wrap {
    background: $white;
    padding: px-rem(40px) 0 px-rem(40px) px-rem(26px);
    ul {
      overflow: hidden;
    }
    li {
      float: left;
      display: block;
      background: $white;
      margin: px-rem(10px);
      border: 1px solid $base-color;
      border-radius: px-rem(8px);
      padding: px-rem(10px) px-rem(4px) 0 px-rem(16px);
      width: px-rem(130px);
      height: px-rem(106px);
      text-align: left;
      color: $base-color;

      &.active {
        background: $base-color;
        color: $white;
      }
    }

  }
  .light-con {
    background: $white;
    padding-top: px-rem(40px);
  }
  .upload-box {
    float: left;
    margin-left: 25%;
    margin-right: px-rem(40px);
  }
  .def-tip {
    padding-left: px-rem(40px);
    color: $def-color;
    line-height: px-rem(96px);
  }
  .show-jd-img {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 30001;
  }
}

</style>
