<template>
  <div class="login">
    <img src="../assets/img/login.png" class="login-img">
    <div class="input-wrap">
      <span class="iconfont phone-input">&#xe604;</span>
      <input class="text-input" placeholder="请输入手机号码">
      <span class="iconfont pwd-input">&#xe68e;</span>
      <input class="text-input" placeholder="密码" type="password">
    </div>
    <div class="pwd-wrap">
      <span class="l-pwd">
        <input checked class="box-input" type="checkbox">记住账号密码
      </span>
      <router-link :to="{ name: 'forget-pwd'}" class="r-pwd">忘记密码</router-link>
    </div>
    <btn text="立即登陆"></btn>
    <router-link :to="{ name: 'register'}" class="register">免费注册</router-link>

  </div>
</template>

<script>
import btn from '@/components/btn'
import taskItem from '@/components/taskItem'
import taskList from '@/components/taskList'

export default {
  data () {
    return {
      title: '任务大厅',
      showSub: true,
      showSubList: true
    }
  },
  created () {
    console.log('this is home.Vue');
  },
  components: {
    btn
  },
  methods: {
    changeTaskPanel (showSubList) {
      this.showSubList = showSubList;
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

    .text-input {
      display: block;
      box-sizing: border-box;
      margin: px-rem(20px) auto 0;
      border: 1px solid #ccc;
      border-radius: px-rem(10px);
      padding-left: px-rem(72px);
      width: 90%;
      height: px-rem(88px);
      color: #ccc;
    }

    .input-wrap {
      position: relative;
    }

    .phone-input {
      display: block;
      position: absolute;
      top: px-rem(22px);
      left: px-rem(60px);
      font-size: px-rem(40px);
      color: #ccc;
    }

    .pwd-input {
      display: block;
      position: absolute;
      top: px-rem(130px);
      left: px-rem(60px);
      font-size: px-rem(40px);
      color: #ccc;
    }

    .pwd-wrap {
      overflow: hidden;
      margin: px-rem(20px) auto;
      width: 90%;
      font-size: px-rem(28px);
      color: #666;
    }

    .box-input {
      margin-right: px-rem(10px);
      vertical-align: middle;

    }

    .l-pwd {
      float: left;
      width: 50%;
    }

    .r-pwd {
      float: right;
      width: 50%;
      text-align: right;
      color: $base-color;
    }

    .login-img {
      width: 100%;
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
  }
</style>
