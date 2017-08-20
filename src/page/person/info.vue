<template>
  <div class="info-page">
    <navigator :title="title" showClass="second"></navigator>
    <modify :path-param="certifyPath">
      <div slot="modify-con" class="certify-con">
        <span class="certify-txt iconfont">设置实名认证，获得货款立返</span>
      </div>
    </modify>
    <div class="modify-list">
      <modify :path-param="null" :show-icon="false" add-class="show-b">
        <div slot="modify-con">
          <span>账  号：17325203701</span>
        </div>
      </modify>
      <modify :path-param="qPath" add-class="show-b">
        <div slot="modify-con">
          <span>Q  Q：750587098</span>
        </div>
      </modify>
      <modify :path-param="login" add-class="show-b" :show-text="true">
        <div slot="modify-con">
          <span>登陆密码：</span>
        </div>
      </modify>
      <modify :path-param="pay" :show-text="true">
        <div slot="modify-con">
          <span>支付密码：</span>
        </div>
      </modify>
    </div>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import modify from '@/components/modify'
export default {
  data () {
    return {
      title: '个人信息',
      certifyPath: {
        name: 'certify-info'
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
    navigator, modify
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

    .modify-list {
      margin-top: px-rem(40px);
    }
    .show-b {
      border-bottom: 1px solid #f9f9f9;
    }
  }
</style>
