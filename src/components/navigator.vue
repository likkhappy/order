<template>
  <section class="navigator" :class="showClass">
    <span class="iconfont icon" v-if="showClass" @click="backFun">&#xe701;</span>
    <div class="title-wrap" >
      <span class="title">{{title}}</span>
      <span class="sub-title iconfont" :class="{'show-list':showList}" v-if="showSub" @click="showList = !showList">筛选</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    showSub: {
      type: Boolean,
      required: false,
      default: false
    },
    showClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showList: true

    }
  },
  watch: {
    showList () {
      console.log(this.showList);
      this.$emit('changeShowSub', this.showList);
    }
  },
  methods: {
    backFun: function() {
      this.$router.go(-1);
    }
  }

}

</script>

<style lang="scss" scoped>
  @import "../assets/base.scss";
  $bk: #01b76d;
  $top: 94px;
  $height: 96px;
  $p-l: 20px;
  $size: 40px;
  $sub-size: 36px;

  $sub-r: 20px;
  $box-p: 40px;
  $box-size: 28px;

  $li-m: 20px;

  $btn-w: 144px;
  $btn-h: 54px;
  $btn-bk: #bfedda;

  .navigator {
    box-sizing: border-box;
    background-color: $base-color;
    padding-left: px-rem($box-p);
    top: px-rem($top);
    width: 100%;
    height: px-rem($height);
    z-index: 10;

    .icon {
      position: absolute;
      left: px-rem(20px);
      line-height: px-rem($navigator-h);
      font-size: px-rem(44px);
      font-weight: bold;
      color: $white;
    }

    .title {
      line-height: px-rem($height);
      font-size: px-rem($size);
      color: $white;
    }

    .sub-title {
      float: right;
      margin-right: px-rem($sub-r);
      line-height: px-rem($height);
      font-size: px-rem($sub-size);
      color: $white;

      &:after {
        vertical-align: middle;
        color: $white;
        font-size: px-rem(60px);
        content: '\e603';
      }

      &.show-list {
        &::after {
          content: '\e63e';
        }
      }
    }


    &.second {
        padding-left: 0;
        text-align: center;

        &::before {

        }
    }



  }
</style>
