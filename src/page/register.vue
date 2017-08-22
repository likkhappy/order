<template>
  <div class="login">
    <img src="../assets/img/login.png" class="login-img">

    <div class="input-wrap">
      <div class="row">
        <span class="row-name">手&nbsp;&nbsp;机&nbsp;&nbsp;号:</span>
        <span class="imp-tip">*</span>
        <input class="text-input" type="number" v-model.trim="phone">
      </div>
      <div class="row">
        <span class="row-name">账号密码:</span>
        <span class="imp-tip">*</span>
        <input class="text-input" type="password">
      </div>
      <div class="row">
        <span class="row-name">确认密码:</span>
        <span class="imp-tip">*</span>
        <input class="text-input" type="password">
      </div>
      <div class="row">
        <span class="row-name">QQ号:</span>
        <span class="imp-tip">*</span>
        <input class="text-input">
      </div>
      <div class="row">
        <span class="row-name">短信验证码:</span>
        <span class="imp-tip">*</span>
        <div class="row-right">
          <input class="dx-input">
          <span class="dx-text" @click="obatinDx">获取验证码</span>
        </div>
      </div>
    </div>


    <btn text="立即注册"></btn>
    <router-link :to="{ name: 'login'}" class="register">已有账号，前往登录</router-link>
    <modal :show="showModal" :show-content="true" :ok="ok">
      <div slot="modal-header" class="modal-header"> 提示 </div>
      <div slot="modal-body" class="modal-body">{{modalBody}}</div>
    </modal>

  </div>
</template>

<script>
import btn from '@/components/btn'
import taskItem from '@/components/taskItem'
import taskList from '@/components/taskList'
import modal from '@/components/modal'

export default {
  data () {
    return {
      title: '任务大厅',
      showSub: true,
      showSubList: true,
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
  created () {
    console.log('this is home.Vue');
  },
  components: {
    btn, modal
  },
  methods: {
    changeTaskPanel (showSubList) {
      this.showSubList = showSubList;
    },
    obatinDx () {
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
  @import "../assets/base.scss";

  $top: 94px;
  $padding: 96px;
  $bottom: 120px;
  $text-bk: #fbdbdb;
  $text-color: #666;
  $content-h: 80px;
  $content-size: 28px;
  $content-p: 40px;

  $task-bk: #ffefd6;
  $task-color: #f30;



  .login {
    width: 100%;
    min-height: px-rem(600px);

    .login-img {
      width: 100%;
    }



    .input-wrap {
      position: relative;
      margin: 0 auto px-rem(40px);
      width: 90%;
    }

    .row {
      margin: px-rem(16px) 0;
      overflow: hidden;
    }

    .row-name {
      display: block;
      float: left;
      width: 25%;
      line-height: px-rem(88px);
      text-align: right;
      font-size: px-rem(26px);
      color: #999;
    }

    .text-input {
      float: right;
      display: block;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: px-rem(10px);
      padding-left: px-rem(20px);
      width: 70%;
      height: px-rem(88px);
      color: #ccc;
    }

    .imp-tip {
      float: right;
      margin-left: px-rem(4px);
      line-height: px-rem(88px);
      color: #f30;
    }



    .row-right {
      float: right;
      width: 70%;
    }
    .dx-input {
      display: block;
      float: left;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: px-rem(10px);
      padding-left: px-rem(20px);
      width: 60%;
      height: px-rem(88px);
      color: #ccc;
    }
    .dx-text {
      display: block;
      float: right;
      border: 1px solid $base-color;
      border-radius: px-rem(10px);
      width: 35%;
      height: px-rem(80px);
      text-align: center;
      line-height: px-rem(80px);
      color: $base-color;
    }

    .register {
      display: block;
      border: 1px solid $base-color;
      border-radius: px-rem(10px);
      margin: px-rem(20px) auto 0;
      width: 90%;
      height: px-rem(88px);
      text-align: center;
      line-height: px-rem(88px);
      color: $base-color;
      font-size: px-rem(36px);
    }

    .modal-header {
      font-weight: bold;
      font-size: px-rem(30px);
    }

    .modal-body {
      font-size: px-rem(26px);
      color: #999;
    }
  }
</style>
