<template>
  <div class="info-page">
    <navigator :title="title" showClass="second"></navigator>
    <light-bar left-text="请绑定银行卡："></light-bar>
    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>持卡人姓名：</span>
        <input type="text">
      </div>
    </modify>
    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>银行卡号：</span>
        <input class="card" type="text" placeholder="输入卡号，不支持信用卡">
      </div>
    </modify>
    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>选择银行：</span>
        <select class="bank-select">
          <option value="招商银行">招商银行</option>
          <option value="中国工商银行">中国工商银行</option>
          <option value="中国农业银行">中国农业银行</option>
          <option value="中国建设银行">中国建设银行</option>
          <option value="中国银行">中国银行</option>
          <option value="中国工商银行">中国工商银行</option>
          <option value="兴业银行">兴业银行</option>
          <option value="浦发银行">浦发银行</option>
          <option value="中信银行">中信银行</option>
          <option value="广发银行">广发银行</option>
          <option value="民生银行">民生银行</option>
          <option value="光大银行">光大银行</option>
          <option value="交通银行">交通银行</option>
          <option value="中国邮政储蓄银行">中国邮政储蓄银行</option>
          <option value="北京银行">北京银行</option>
          <option value="渤海银行">渤海银行</option>
          <option value="杭州银行">杭州银行</option>
          <option value="华夏银行">华夏银行</option>
          <option value="汇丰银行">汇丰银行</option>
          <option value="花旗银行">花旗银行</option>
          <option value="江苏银行">江苏银行</option>
          <option value="浙商银行">浙商银行</option>
          <option value="渣打银行">渣打银行</option>
          <option value="平安银行">平安银行</option>
        </select>
      </div>
    </modify>
    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>手机号：</span>
        <input readonly class="card" type="text" placeholder="17325203701">
      </div>
    </modify>
    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>图片验证码：</span>
      </div>
    </modify>
    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>输入验证码：</span>
      </div>
    </modify>

    <div class="btn-wrap">
      <btn text="确认绑定"></btn>
    </div>


  </div>
</template>

<script>
import navigator from '@/components/navigator'
import modify from '@/components/modify'
import lightBar from '@/components/lightBar'
import btn from '@/components/btn'
export default {
  data () {
    return {
      title: '管理银行卡',
      certifyPath: {
        name: 'modify-qq'
      },
      qPath: {
        name: 'modify-qq'
      },
      login: {
        name: 'modify-login-pwd'
      },
      pay: {
        name: 'modify-pay-pwd'
      }
    }
  },
  components: {
    navigator, modify, lightBar, btn
  }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/base.scss";

  .info-page {
    .certify-txt {
      font-size: px-rem(28px);
      color: #f30;
      &:before {
        margin-right: px-rem(10px);
        font-size: px-rem(52px);
        color: $base-color;
        vertical-align: bottom;
        content: '\e63c';
      }
    }
    .card {
      width: 50%;
    }
    .bank-select {
      background: $white;
      appearance: none;
      border: none;
      width: 70%;
      height: px-rem(88px);
      outline: none;
    }

    .btn-wrap {
      margin-top: px-rem(80px);
    }

    .modify-list {
      margin-top: px-rem(40px);
    }
    .show-b {
      border-bottom: 1px solid #f9f9f9;
    }
  }
</style>
