<template>
  <section class="tab-wrp">
    <div class="tab-item-wrap">
      <div :class="{'active': panel == 'left'}" class="tab-l tab-item" @click="tabClick('left')">{{lText}}</div>
      <div :class="{'active': panel == 'right'}" class="tab-r tab-item" @click="tabClick('right')">{{rText}}</div>
    </div>
    <slot name="left-con" v-if="panel == 'left'">
    </slot>
    <slot name='right-con' v-if="panel == 'right'">
    </slot>
  </section>
</template>

<script>
  export default {
    props: {
      lText: {
        require: true,
        type: String
      },
      rText: {
        required: true,
        type: String
      }
    },

    data () {
      return {
        panel: 'left'
      }
    },
    methods: {
      tabClick (panel) {
        this.panel = panel
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

$tab-h: 90px;
$tab-b-h: 8px;
$tab-b-c: #f8f8f8;
$tab-size: 28px;
$tab-color: #999;

$tab-m-color: #ddd;
  .tab-wrp {
    background: $white;
    width: 100%;
    overflow: hidden;

    .tab-item-wrap {
      overflow: hidden;
    }


    .tab-item {
      width: 50%;
      line-height: px-rem($tab-h);
      font-size: px-rem($tab-size);
      color: $tab-color;
      text-align: center;
      &::after {
        display: block;
        background-color: $tab-b-c;
        width: 100%;
        height: px-rem($tab-b-h);
        content: '';
      }

      &.active {
        color: $base-color;
        &::after {
          background-color: $base-color;
        }
      }
    }

    .tab-l {
      float: left;
    }
    .tab-r {
      position: relative;
      float: right;
      &:before {
        position: absolute;
        display: block;
        top: px-rem(8px);
        background-color: $tab-m-color;
        width: 2px;
        height: px-rem(70px);
        content: ''
      }
    }
  }
</style>
