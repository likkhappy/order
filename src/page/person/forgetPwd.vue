<template>
  <div class="logi-pwd-page">
    <navigator :title="title" show-class="second"></navigator>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span class="m-l">新密码:</span>
        <input class="m-input" type="password">
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span class="m-l">确认新密码:</span>
        <input class="m-input" type="password">
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" add-class="show-b">
      <div class="origin-pwd" slot="modify-con">
        <span class="m-l">手机号码:</span>
        <input class="m-input" v-model.trim="phone" type="number">
      </div>
    </modify>
    <modify :show-icon="false" :path-param="null" >
      <div class="origin-pwd" slot="modify-con">
        <span class="m-l">短信验证码:</span>
        <input class="dx-input">
        <span class="dx-text" @click="obatinDx">获取验证码</span>
      </div>
    </modify>

    <div class="query-btn">提交修改</div>
    <modal :show="showModal" :show-content="true" :ok="ok">
      <div slot="modal-header" class="modal-header"> 提示 </div>
      <div slot="modal-body" class="modal-body">{{modalBody}}</div>
    </modal>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import modify from '@/components/modify'
import modal from '@/components/modal'

export default {
  data () {
    return {
      title: '忘记密码',
      showModal: false,
      modalBody: '确认密码不能为空',
      phone: '',
      ok: {
        show: true,
        showClass: 'ok',
        text: 'OK',
        callback: function() {
          this.showModal = false;

        }
      }
    }
  },
  watch: {
    phone: function(val) {
      console.log(val);
      // if(!val) return
      if(/^1(3|4|5|7|8)[0-9]\d{8}$/.test(val)){

          return val;
      } else {
        return false
      }
    }
  },
  components: {
    navigator,modify, modal
  },
  methods: {
    obatinDx: function() {
      if(/^1(3|4|5|7|8)[0-9]\d{8}$/.test(this.phone)){
        this.showModal = true;
        this.modalBody = '短信发送成功'
      } else {
        this.showModal = true;
        this.modalBody = '请正确填写手机号'
      }
    }
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
  .m-l {
    display: block;
    float: left;
    width: 22%;
    text-align: right;
  }
  .m-input {
    display: block;
    float: left;
    padding-left: px-rem(20px);
    width: 70%;
    height: px-rem(86px);
    line-height: px-rem(86px);
  }
  .dx-input {
    display: block;
    float: left;
    padding-left: px-rem(20px);
    width: 40%;
    height: px-rem(86px);
    line-height: px-rem(86px);
  }
  .dx-text {
    display: block;
    float: left;
    margin-top: px-rem(16px);
    border: 1px solid $base-color;
    border-radius: px-rem(10px);
    width: 20%;
    height: px-rem(60px);
    text-align: center;
    line-height: px-rem(60px);
    font-size: px-rem(24px);
    color: $base-color;
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
  .modal-header {
    font-weight: bold;
    font-size: px-rem(30px);
  }

  .modal-body {
    font-size: px-rem(26px);
    color: #999;
  }

  .ok {
    background: #387ef5;
    color: $white;
  }
</style>
