<template>
  <section class="light-bar">
    <span class='left-text'>{{leftText}}</span>
    <span class='right-text'>{{rightText}}</span>
  </section>
</template>

<script>
export default {
  props: {
    leftText: {
      type: String
    },
    rightText: {
      type: String
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.light-bar {
  $bar-h: 96px;
  $bar-bk: #ebfff6;
  $left-color: $base-color;
  $right-color: #999;

  background: $bar-bk;
  padding: 0 px-rem(40px);
  // width: 100%;
  height: px-rem($bar-h);
  line-height: px-rem($bar-h);
  font-size: px-rem(36px);
  .left-text {
    font-size: px-rem(28px);
    color: $left-color;
  }
  .right-text {
    font-size: px-rem(24px);
    color: $right-color;
  }
}
</style>
