<template>
  <div class="withdraw-page">
    <navigator :title="title" showClass="second"></navigator>
    <modify :path-param="addBankCard" add-class="bank-wrap" add-icon-class="bank-icon">
      <div slot="modify-con" class="certify-con">
        <span class="bank-txt iconfont">添加银行卡</span>
      </div>
    </modify>
    <section class="money-list">
      <ul>
        <li class="first-li"><span class="money-k">贷款余额：</span><span class="money-v">¥ 0</span></li>
        <li><span class="money-k">金币余额：</span><span class="money-v">¥ 0</span></li>
      </ul>
    </section>
    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>货款提现：</span>
        <input type="text" placeholder="最少取1元">
        <a class="tack-money" href="javascript:void(0);">全部提款</a>
      </div>
    </modify>
    <modify :path-param="null" :show-icon="false">
      <div slot="modify-con">
        <span>金币提现：</span>
        <input type="text" placeholder="最少取30元">
        <a class="tack-money" href="javascript:void(0);">全部提款</a>
      </div>
    </modify>
    <div class="imp-txt show-b">金币提现收取5%手续费</div>

    <modify :path-param="null" :show-icon="false" add-class="show-b">
      <div slot="modify-con">
        <span>支付密码：</span>
        <input type="text" placeholder="补订单支付密码">
        <a class="tack-money" href="javascript:void(0);">忘记密码</a>
      </div>
    </modify>
    <btn text="立即提现"></btn>
    <p class="imp p-title">1.每日提现次数不限</p>
    <p class="imp p-title">2.每日两个返款时间：</p>
    <p class="imp p-sub">a.12:00（处理昨日18:00-今日12:00间的提现申请）</p>
    <p class="imp p-sub">b.18:00（处理今日12:00-今日18:00间的提现申请）</p>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import modify from '@/components/modify'
import btn from '@/components/btn'
export default {
  data () {
    return {
      title: '提现',
      addBankCard: {
        name: 'add-bank-card'
      },
      qPath: {
        name: 'modify-qq'
      },
      login: {
        name: 'modify-login-pwd'
      },
      pay: {
        name: 'modify-pay-pwd'
      }
    }
  },
  components: {
    navigator, modify, btn
  }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/base.scss";

  .withdraw-page {

    .bank-txt {
      font-size: px-rem(28px);
      color: $base-color;
      &:before {
        margin-right: px-rem(10px);
        font-size: px-rem(52px);
        color: $base-color;
        vertical-align: bottom;
        content: '\e63c';
      }
    }

    .money-list {
      height: px-rem(96px);
      padding: 0 px-rem(40px);
      line-height: px-rem(96px);
      li {
        display: inline-block;
      }
      .money-k {
        font-size: px-rem(30px);
        color: $base-color;
      }
      .money-v {
        font-size: px-rem(30px);
        color: #666;
      }
      .first-li {
        margin-right: px-rem(80px);
      }
    }

    input[type="text"] {
      font-size: px-rem(26px);
      color: #666;
    }

    .tack-money {
      float: right;
      padding-right: px-rem(40px);
      text-decoration: none;
      font-size: px-rem(26px);
      color: #3c9ff7;
    }
    .imp-txt {
        background: $white;
        padding-left: px-rem(190px);
        line-height: px-rem(44px);
        color: #f30;
    }
    .imp {
      color: #f30;
    }
    .p-title {
      padding-left: px-rem(40px);
      line-height: px-rem(60px);
    }
    .p-sub {
      padding-left: px-rem(80px);
    }



    .modify-list {
      margin-top: px-rem(40px);
    }
    .show-b {
      border-bottom: 1px solid #f9f9f9;
    }
  }
</style>
