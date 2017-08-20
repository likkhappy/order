<template>
  <div class="example-box">
    <div class="box-modal" @click="exampleFun">
      <div class="small-img">
        <slot name="small-img">
        </slot>
      </div>

      <div class="def-txt">示例图</div>
    </div>

    <template v-if="showAll">
      <div class="all-img" @click="imgFun">
        <slot name="big-img">
        </slot>
      </div>
    </template>
    <modal :show='showAll'></modal>
  </div>
</template>

<script>
import modal from '@/components/modal'
export default {
  data () {
    return {
      showAll: false
    }
  },
  props: {
    imgSrc: {
      type: String
    },
    middleClass: {
      type: String
    }
  },

  methods: {
    exampleFun: function () {
      this.showAll = true;
    },

    imgFun () {
      this.showAll = false;
    }

  },
  components: {
    modal
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
$box-w: 160px;
.example-box {
  background-size: cover;
  background-position: center;
  width: px-rem($box-w);
  height: px-rem($box-w);
  overflow: hidden;

  .box-modal {
    position: relative;
  }

  .def-txt {
    position: relative;
    background: rgba(0, 0, 0, .3);
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: px-rem($box-w);
    font-size: px-rem(30px);
    color: $white;

  }
  .small-img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: px-rem($box-w);
    font-size: px-rem(30px);
    color: $white;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .all-img {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 30002;

    img {
      // transform: translateY(50%);
      width: 100%;
      // height: 100%;

      &.middle-img {
        transform: translateY(50%);
      }

    }
  }

}
.btn {
  background: $base-color;
  border-radius: px-rem(10px);
  margin: px-rem(20px) auto 0;
  width: 90%;
  height: px-rem(88px);
  text-align: center;
  line-height: px-rem(88px);
  color: $white;
  font-size: px-rem(36px);
}
</style>
