<template>
  <section class="service-page">
      <navigator :title="title" showClass="second"></navigator>
      <div class='s-wrap s-title'>咨询客服:</div>
      <div class="s-wrap s-b">
        <span class="s-text">首次接单有问题找我</span>
        <span class="s-time">周一至周六9:00-18:00</span>
      </div>
      <div class="s-wrap">
        <span class="s-text">老买手遇到问题请找我</span>
        <span class="s-time">周一至周六9:00-18:00</span>
      </div>
  </section>
</template>

<script>

import navigator from '@/components/navigator'
export default {
  created () {
    console.log(navigator);
  },
  data () {
    return {
      title: '客服中心'
    }
  },
  components: {
    navigator
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/base.scss";
  $s-h: 98px;
  $bk-color: #ebfff6;
  $text-color: #666;
  .service-page {
    overflow: hidden;

    .s-wrap {
      background-color: $white;
      padding-left: px-rem(40px);
      width: 100%;
      height: px-rem($s-h);
      line-height: px-rem($s-h);
      font-size: px-rem(26px);
    }

    .s-title {
      background-color: $bk-color;
      font-size: px-rem(28px);
      color: $base-color;
    }

    .s-text {
      color: $text-color;

      &:before {
        display: inline-block;
        background-image: url("../../assets/img/custom-qq_03.png");
        background-position: center;
        background-size: cover;
        margin-right: px-rem(10px);
        width: px-rem(48px);
        height: px-rem(48px);
        vertical-align: middle;
        content: '';
      }
    }
    .s-time {
      float: right;
      padding-right: px-rem(80px);
      color: $base-color;
    }
    .s-b {
      border-bottom: 1px solid #f9f9f9;
    }
  }

</style>
