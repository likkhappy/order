<template>
  <div class="add-taobao-page">
    <navigator :title="title" show-class="second"></navigator>
    <light-bar left-text="提交买号信息:"></light-bar>
    <modify :show-text='false' :show-icon="false" add-class="show-b" :path-param="null">
      <div slot="modify-con">
        <span>淘宝账号</span>
        <span class="imp">*</span>:
        <input>
        <a @click="whatTaobaoClick" class="what-taobao" href="javascript: void(0);">什么是淘宝账号?</a>
      </div>
    </modify>

    <modify :show-text='false' :show-icon="false" add-class="show-b" :path-param="null">
      <div slot="modify-con">
        <span>信用等级</span><span class="imp">*</span>:
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

        <p class="def-tip">截图位置：支付宝APP-我的-设置（右上角图标）-账户与安全）</p>
    </div>


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


    <light-bar left-text="蚂蚁花呗认证：" right-text="(若未开通或无法使用花呗，也请提交截图)"></light-bar>
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
    <p class="imp p-imp">绑定之后无法删除，请谨慎添加</p>
    <btn text="提交审核"></btn>
    <p class="imp p-imp">账号审核时间：周一至周六9:00-21:00</p>
    <img @click="showTBImg= !showTBImg" class="show-taobao-img" v-show="showTBImg" src="../../assets/img/tbzh.png">
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
      title: '修改淘宝账号',
      phone: '17325203701',
      showTBImg: false
    }
  },
  methods: {
    whatTaobaoClick () {
      this.showTBImg = true;
    }
  },
  components: {
    navigator,lightBar, modify, btn, exampleImg, uploadImg
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";


.add-taobao-page {
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
    li {
      display: inline-block;
      background: $white;
      margin: px-rem(10px);
      border: 1px solid $base-color;
      border-radius: px-rem(8px);
      padding: px-rem(10px) px-rem(24px);
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

  .show-taobao-img {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 30001;
  }
}

</style>
