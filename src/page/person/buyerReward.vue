<template>
  <div class="buyer-reward-page">
    <navigator title="买手奖励明细" showClass="second"></navigator>
    <div class="page-con">
      <p>成功注册：<span>0</span>名</p>
      <p>获得奖励：累计邀请买手<span>0</span>名，累计获得佣金<span>0</span>金币，累计获得注册接单奖励<span>0</span>金币</p>
      <p class="spe-p">(奖励佣金在任务结束时结算，即任务刚发布或接手时不产生奖励)</p>
    </div>

    <sub-nav>
      <ul slot="li-list" class="spe-ul">
        <li v-for="item in relatedList" class="spe-li">
          <a href="javascript:void(0);" class="spe-a">{{item.name}}</a></li>
      </ul>
    </sub-nav>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import subNav from '@/components/subNav'
export default {
  data () {
    return {
      title: '账单',
      relatedId: 1,
      relatedList: [
        {
          name: '商家账号',
          id: '1'
        },
        {
          name: '今日带来的佣金',
          id: '2'
        },
        {
          name: '累计带来的佣金',
          id: '3'
        }
      ]
    }
  },
  components: {
    navigator, subNav
  }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/base.scss";

  .buyer-reward-page {
    $imp-color: #f30;
    $spe-color: #00F;

    .page-con {
      padding-top: px-rem(40px);
      padding-bottom: px-rem(40px);
      padding-left: px-rem(40px);


      p {
        height: px-rem(80px);
        line-height: px-rem(40px);
        font-size: px-rem(32px);
        color: #999;
        span {
          color: $spe-color;
        }
      }

      .spe-p {
        height: px-rem(20px);
        color: $imp-color;
        font-size: px-rem(24px);
      }

    }


    .spe-ul {
      background: #ffefd6;
    }


    .spe-li {

      width: 33%;
      text-align: center;
      color: $imp-color;
      &:nth-child(1) {
        width: 26%;
      }

      .spe-a {
        color: $imp-color;
      }
    }

  }
</style>
