<template>
  <div class="modify-wrap" :class="addClass">
    <div class="modify-con">
      <slot name="modify-con">
      </slot>
    </div>

    <template v-if="showText">
      <span class="modify-txt">修改</span>
    </template>

    <template v-if="showIcon">
      <router-link :to="pathParam" class="iconfont icon" :class="addIconClass">&#xe700;</router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    showText: {
      type: Boolean,
      required: false,
      default: false
    },
    showIcon: {
      required: false,
      default: true
    },
    pathParam: {
      required: true
    },
    addClass: {
      type: String
    },
    addIconClass: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.modify-wrap{
  $m-h: 96px;
  $m-size: 28px;
  $def-color: #666;

  position: relative;
  background: $white;
  width: 100%;
  height: px-rem($m-h);
  line-height: px-rem($m-h);
  font-size: px-rem($m-size);
  color: $def-color;
  .modify-con {
    padding-left: px-rem(40px);
  }

  .modify-txt {
    position: absolute;
    top: 0;
    right: px-rem(88px);
  }

  .icon {
    position: absolute;
    top: 0;
    right: px-rem(30px);
    font-size: px-rem(36px);
    font-weight: bold;
    color: $def-color;
    text-decoration: none;
  }
}
</style>
