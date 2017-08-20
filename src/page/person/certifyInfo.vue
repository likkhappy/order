<template>
  <div class="add-taobao-page">
    <navigator title="实名认证" show-class="second"></navigator>
    <modify :show-text='false' :show-icon="false" add-class="show-b" :path-param="null">
      <div slot="modify-con">
        <span>真实姓名</span>
        <input>
      </div>
    </modify>


    <modify :show-text='false' :show-icon="false" :path-param="null">
      <div slot="modify-con">
        <span>身份证号</span>
        <input>
      </div>
    </modify>



    <light-bar left-text="手持身份证正面拍照"></light-bar>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/SFZA.jpg" slot="small-img">
            <img src="../../assets/img/SFZA.jpg" slot="big-img" class="middle-img">
          </example-img>
        </div>
    </div>


    <light-bar left-text="手持身份证反面拍照"></light-bar>
    <div class="light-con">
        <div class="upload-box">
          <upload-img></upload-img>
        </div>
        <div class="example-box">
          <example-img>
            <img src="../../assets/img/SFZB.jpg" slot="small-img">
            <img src="../../assets/img/SFZB.jpg" slot="big-img" class="middle-img">
          </example-img>
        </div>
    </div>


    <light-bar left-text="照片拍摄要求:"></light-bar>
    <section class='detail-info'>
      <ul >
        <li class='item'>1.照片需免冠，五官需清晰</li>
        <li class='item'>2.身份证正反面的文字需清晰可辨认</li>
        <li class='item'>3.照片需露出手臂</li>
        <li class='item'>4.照片不得做任何PS处理</li>
      </ul>
    </section>


    <btn text="提交审核"></btn>
    <p class="imp p-imp">账号审核时间：周一至周六9:00-21:00</p>
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

  .middle-img {
    transform: translateY(50%);
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
    padding: px-rem(40px) 0;
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

  .detail-info {
    background: $white;
    padding-left: px-rem(40px);
    li {
      line-height: px-rem(60px);
      font-size: px-rem(28px);
      color: #999;
    }
  }
}

</style>
