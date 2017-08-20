<template>
  <div class="all-nav-wrap">
    <div class="all-nav-wrap">
        <slot name="li-list">
        </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.all-nav-wrap {
  width: 100%;
  .all-nav-wrap {
    position: relative;
    background: $white;
    width: 100%;
    overflow: hidden;

    ul {
      position: relative;
      line-height: 1;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
          display: none;
      }
    }
    li {
      display: inline-block;
      position: relative;
      font-size: 0;
    }

    a {
      display: block;
      padding: px-rem(40px) px-rem(50px);
      text-decoration: none;
      line-height: 1;
      font-size: px-rem(28px);
      font-weight: normal;
      color: $def-color;
      &.is-active {
        border-bottom: 3px solid $base-color;
        color: $base-color;
      }
    }
  }
}
</style>
