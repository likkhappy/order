<template>
  <div class="logi-pwd-page">
    <navigator :title="title" show-class="second"></navigator>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>原始密码:</span>
        <input type="password">
        <router-link :to="{ name: 'forget-pwd'}" class="forget-pwd">忘记密码？</router-link>
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span>新密码:</span>
        <input type="password">
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" >
      <div class="origin-pwd" slot="modify-con">
        <span>确认新密码:</span>
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
      title: '修改密码'
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
</style>
