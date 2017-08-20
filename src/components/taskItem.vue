<template>
  <section class="task">
    <div class="img-wrap">
      <img src="http://m.chongshouye.com/common/image/task/20170803/42338/288aea11-65ae-4e78-9792-c8df7c722765_png.json">
    </div>
    <div class="task-info">
      <div class="task-title">
        <i class="icon taobao iconfont">&#xe61e;</i>
        <i class="icon mobile iconfont">&#xe63a;</i>
        <span class="title first">手机端 - </span>
        <span class="title second">普通销售任务</span>
      </div>
      <div class="task-money">
        <span>垫付货款：100元</span>
        <span>任务佣金：6.65 金币</span>
      </div>
      <div class="task-pic">
        <img src="../assets/img/bi.png">
        <img src="../assets/img/zhu.png">
        <img src="../assets/img/ping.png">
        <img src="../assets/img/scbb-def.png">
        <img src="../assets/img/scdp-def.png">
        <img src="../assets/img/tjgwc-def.png">
        <img src="../assets/img/wzhp.png">
      </div>
      <div class="task-btn">
        抢此任务
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
$padding: 40px;
$margin: 40px;
$icon-size: 36px;
$title-size: 28px;

$money-color: #666;
$money-size: 24px;

$btn-w: 360px;
$btn-h: 68px;
$btn-size: 36px;

.task {
  margin: px-rem($margin) 0;
  padding: 0 px-rem($padding);
  overflow: hidden;

  .img-wrap {
    float: left;
    margin-bottom: -25%;
    overflow: hidden;
    width: 25%;
    padding-bottom: 25%;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .task-info {
    margin-left: 28%;
    width: 100%;

    div {
      margin: px-rem(20px) 0;
    }

    div:first-child {
      margin-top: 0;
    }
  }



  .task-title {

    .icon {
      font-size: px-rem($icon-size);
      vertical-align: bottom;
    }

    .taobao {
      color: #f60;
    }

    .mobile {
      color: #fdaa29;
    }

    .title {
      font-size: px-rem($title-size);
    }

    .first {
      color: #000;
    }

    .second {
      color: #f00;
    }


  }

  .task-money {
    font-size: px-rem($money-size);
    color: $money-color;

    span:first-child {
      margin-right: px-rem(30px);
    }
  }

  .task-btn {
    background-color: $base-color;
    border-radius: px-rem(10px);
    width: px-rem($btn-w);
    height: px-rem($btn-h);
    line-height: px-rem($btn-h);
    font-size: px-rem($btn-size);
    font-weight: normal;
    color: $white;
    text-align: center;
  }
}
</style>
