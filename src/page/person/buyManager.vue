<template>
  <div class="buy-manager-page">
    <navigator :title="title" show-class="second"></navigator>
    <section class="orange-wrap fs">
      <p>
        不要在同一个设备和网络环境下，使用多个小号同时刷单。否则容易被淘宝侦测到，影响你的小号安全。
      </p>
    </section>
    <section class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>账号</th>
            <th>今日剩余</th>
            <th>近7日剩余</th>
            <th>明日可接</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">
              车e族网
              <img src="../../assets/img/b_red_4.gif">
              <span class="tb-btn">花呗</span>
            </td>
            <td class="show-b ">
                <span class="show-before show-x-b">3/3</span>
            </td>
            <td class="show-b">15/15</td>
            <td class="show-b">3</td>
            <td rowspan="2">
              <span class="iconfont setting" @click="managerFun">&#xe60e;</span>
            </td>
          </tr>
          <tr>
            <td class="show-l-b show-before">3/3</td>
            <td>15/15</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </section>
    <tab l-text="淘宝账号" r-text="京东账号">

      <div slot="left-con">
        <modify  :showIcon="true" :path-param="{name:'add-taobao-manager'}" add-class="account-item">
          <span class="text-con iconfont" slot="modify-con"> 添加淘宝账号</span>
        </modify>
        <section class="orange-wrap">
          <p class='p-title'>注意事项：</p>
          <p>1、接单量限制：1个淘宝账号1天最多可接3单，每周最多可接15单。“周”指的是近7天，不是自然周。</p>
          <p>2、最多绑定2个淘宝账号。</p>
          <p>3、浏览任务接单量限制：1个淘宝账号1天最多可接30单，每周最多可接150单。“周”指的是近7天，不是自然周。</p>
        </section>
      </div>

      <div slot="right-con">
        <modify slot="right-con" :showIcon="true" :path-param="{name:'add-jd-manager'}" add-class="account-item">
          <span class="text-con iconfont" slot="modify-con"> 添加京东账号</span>
        </modify>
        <section class="orange-wrap">
          <p class='p-title'>注意事项：</p>
          <p>1、接单量限制：1个京东账号1天最多可接3单，每周最多可接15单。“周”指的是近7天，不是自然周。</p>
          <p>2、最多绑定2个京东账号。</p>
        </section>
      </div>
    </tab>
    <modal :show="showModal" :on-mask-click="maskClick" :show-content="false">

    </modal>
    <div class='setting-con' v-if="showModal">
      <div class="header">
        <router-link :to="{ name: 'modify-taobao-credit'}">
          <p class="iconfont">修改买号信用等级</p>
        </router-link>
        <router-link :to="{ name: 'modify-taobao-feature'}">
          <p class="iconfont">修改买号特征信息</p>
        </router-link>
      </div>
      <div class="body" @click="maskClick">
        取消
      </div>
    </div>



  </div>

</template>

<script>
import navigator from '@/components/navigator'
import tab from '@/components/tab'
import modify from '@/components/modify'
import modal from '@/components/modal'
export default {
  data () {
    return {
      title: '买号管理',
      showModal: false
    }
  },
  methods: {
    managerFun: function() {
      this.showModal = !this.showModal;
    },
    maskClick: function() {
      this.showModal = false;
    }

  },
  components: {
    navigator, tab, modify, modal
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";

$orange-color: #ffefd6;
$orange-p: 40px;

$txt-color: #f30;
$tr-h: 96px;
$tb-color: #999;

.buy-manager-page{

  .orange-wrap {
    background: $orange-color;
    padding: px-rem($orange-p);
    .p-title {
      color: $txt-color;
    }
    p {
      line-height: px-rem(40px);
      color: $tb-color;
    }
  }
  .fs {
      color: $txt-color;
  }
  .table-wrap {
    margin-bottom: px-rem(20px);
  }

  table {
    background: $white;
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    thead {
      border-bottom: 1px solid #f1f1f1;
      font-size: px-rem(24px);
      font-weight: normal;
      color: $base-color;
    }

    tbody {
      text-align: center;
      color: $tb-color;
    }

    tr {
      height: px-rem($tr-h);
    }

    img {
      display: inherit;
      margin: 0 auto;
    }

    .tb-btn {
      background: $base-color;
      border-radius: px-rem(5px);
      padding: 0 px-rem(12px);
      color: $white;
    }

    .show-b {
      border-bottom: 1px solid #f1f1f1;
    }

    .setting {
      padding: 0 px-rem(20px);
      font-size: px-rem(48px);
    }


    .show-x-b {
      &::before {
        background: #FF8957;
        border-radius: 50%;
        margin-right: px-rem(10px);
        padding: 0 px-rem(8px) 0 px-rem(6px);
        width: px-rem(40px);
        height: px-rem(40px);
        font-size: px-rem(28px);
        color: $white;
        content: '销';
      }
    }
    .show-l-b {
      &::before {
        background: #81bbee;
        border-radius: 50%;
        margin-right: px-rem(10px);
        padding: 0 px-rem(6px);
        width: px-rem(40px);
        height: px-rem(40px);
        font-size: px-rem(28px);
        color: $white;
        content: '浏';
      }
    }

  }

  .account-item {
    color: $base-color;
    .text-con {
      &::before {
        vertical-align: sub;
        font-size: px-rem(44px);
        content: '\e63c';
      }
    }

  }

  .setting-con {
    z-index: 110001;
    position: absolute;
    bottom: 0;
    width: 100%;
    .header {
      background: $white;
      margin: 0 auto;
      border-radius: px-rem(5px);
      width: 95%;

      p {
        text-align: center;
        line-height: px-rem(100px);
        font-size: px-rem(26px);
        color: #666;
        text-decoration: none;

        &:first-child {
          border-bottom: 1px solid #f1f1f1;
          &::before {
            margin-right: px-rem(6px);
            vertical-align: bottom;
            font-size: px-rem(40px);
            content: '\e625';
          }
        }
        &:last-child {
          &::before {
            margin-right: px-rem(6px);
            vertical-align: bottom;
            font-size: px-rem(40px);
            content: '\e812';
          }

        }

      }
    }

    .body {
      background: $white;
      margin: px-rem(20px) auto  px-rem(20px);
      border-radius: px-rem(5px);
      width: 95%;
      line-height: px-rem(100px);
      text-align: center;
      font-size: px-rem(28px);
      color: #007aff;
    }
  }
}
</style>
