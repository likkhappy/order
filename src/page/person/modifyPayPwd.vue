<template>
  <div class="logi-pwd-page">
    <navigator :title="title" show-class="second"></navigator>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>新密码:</span>
        <input type="password">
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>确认新密码:</span>
        <input type="password">
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>手机号码:</span>
        <input type="number" readonly v-model="phone" class="p-style">
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" >
      <div class="origin-pwd" slot="modify-con">
        <span>短信验证码:</span>
        <input type="password">
      </div>
    </modify>

    <div class="query-btn">提交修改</div>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import modify from '@/components/modify'

export default {
  data () {
    return {
      title: '修改支付密码',
      phone: '17325203701'
    }
  },
  components: {
    navigator,modify
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";
  .show-b {
    border-bottom: 1px solid #f9f9f9;
  }
  .forget-pwd {
    color: #f30;
  }
  .query-btn {
    background: $base-color;
    border-radius: px-rem(10px);
    margin: px-rem(60px) auto 0 auto;
    width: 85%;
    height: px-rem(88px);
    text-align: center;
    line-height: px-rem(88px);
    font-size: px-rem(36px);
    color: $white;
  }
  .p-style {
  }

</style>
