<template>
  <section class="person-page">
    <div class="p-top">
      <p class="top-text">累计金币收益</p>
      <p class="top-money">0</p>
      <div class="top-info">
        <div class="l info">
          <p class="money">0</p>
          <p class="text">金币余额</p>
        </div>
        <div class="r info">
          <p class="money">0</p>
          <p class="text">贷款余额</p>
        </div>

      </div>

    </div>
    <div class="p-fun">
      <router-link :to="{ name: 'withdraw'}" class="p-with l fun">
        <i class="iconfont">&#xe61d;</i>提现
      </router-link>
      <router-link :to="{ name: 'bill'}" class="p-bill r fun">
        <i class="iconfont tip">&#xe680;</i>账单
      </router-link>
    </div>
    <div class="p-list">
      <div class="p-item">
        <i class="iconfont icon">&#xe67d;</i>买号管理
        <router-link :to="{ name: 'buy-manager'}" class="iconfont r">
          &#xe700;
        </router-link>

      </div>
      <div class="p-item">
        <i class="iconfont icon">&#xe619;</i>个人信息（实名认证）
        <router-link :to="{ name: 'info'}" class="iconfont r">
          &#xe700;
        </router-link>
      </div>
      <div class="p-item">
        <i class="iconfont icon">&#xe60d;</i>推荐有奖
        <router-link :to="{ name: 'recommend'}" class="iconfont r">
          &#xe700;
        </router-link>
      </div>
      <div class="p-item">
        <i class="iconfont icon">&#xe6ff;</i>客服中心
        <router-link :to="{ name: 'service'}" class="iconfont r">
          &#xe700;
        </router-link>
      </div>
      <div class="p-item">
        <i class="iconfont icon">&#xe612;</i>常见问题
        <span class="iconfont r" @click="queFun">&#xe700;</span>
      </div>
    </div>
    <modal :show='modalShow' :show-content='modalShow'
            :on-mask-click="onMaskClick"
            add-class="home-modal"
    >
      <p slot="modal-header" class="modal-header">提示</p>
      <p slot="modal-body" class="modal-body">该功能正在开发，尽请期待！</p>
  </modal>
  </section>

</template>

<script>
import modal from '@/components/modal'
export default {
  data () {
    return {
      modalShow: false
    }
  },
  created () {
    console.log('this is person.Vue');
  },
  methods: {
    queFun: function() {
      this.modalShow = !this.modalShow;
    },
    onMaskClick () {
      console.log('modal hidden');
      this.modalShow = false;
    }
  },
  components: {
    modal
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";

$top-h: 510px;
$bill-h: 96px;

$item-h: 96px;
$item-p: 40px;
$item-size: 26px;
$item-color: #666;
$icon-color: #cdcdcd;

.person-page {
  .p-top {
    position: relative;
    background-image: url('../../assets/img/banner_02.png');
    height: px-rem($top-h);
  }

  p {
    text-align: center;
  }

  .top-text {
    font-size: px-rem(30px);
    line-height: px-rem(180px);
    text-align: center;
    color: $white;
  }
  .top-money {
    font-size: px-rem(80px);
    text-align: center;
    color: #fde586;
  }
  .top-info {
    position: absolute;
    background-color: rgba(102, 102, 102, .1);
    bottom: 0;
    width: 100%;
    height: px-rem(136px);

    .info {
      padding: px-rem(28px) 0;
      width: 50%;
      color: $white;
      .money {
        font-size: px-rem(32px);
      }
      .text {
        font-size: px-rem(26px);
      }
    }

  }
  .p-fun {
    background-color: $white;
    height: px-rem($bill-h);
    .fun {
      width: 50%;
      height: 100%;
      font-size: px-rem(26px);
      text-decoration: none;
      line-height: px-rem($bill-h);
      color: #666;
      text-align: center;
      i {
        margin-right: px-rem(8px);
      }
    }

  }

  .p-list {
    margin-top: px-rem(20px);

    .p-item {
      background-color: $white;
      border-bottom: 1px solid #f9f9f9;
      padding: 0 px-rem($item-p);
      height: px-rem($item-h);
      line-height: px-rem($item-h);
      font-size: px-rem($item-size);
      color: $item-color;

      &:last-child {
        border-bottom: none;
      }
    }
  }
  .icon {
      margin-right: px-rem(20px);
      font-size: px-rem(44px);
      vertical-align: top;
      color: $icon-color;
  }

  .tip {
    vertical-align: middle;
  }

  .l {
    float: left;
  }

  .r {
    float: right;
    text-decoration: none;
    color: $item-color;
  }
  .modal-header {
    border-bottom: 1px solid #f8f8f8;
    font-size: px-rem(30px);
    line-height: px-rem(80px);
    text-align: center;
  }
  .modal-body {
    text-align: left;
    color: #999;
  }
}


</style>
