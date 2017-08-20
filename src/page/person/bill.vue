<template>
  <div class="bill-page">
    <navigator :title="title" showClass="second"></navigator>
    <ul class="money-list">
      <li>货款金额：0</li>
      <li>金币金额：0</li>
    </ul>
    <sub-nav>
      <ul slot="li-list">
        <li v-for="item in relatedList" class="spe-li">
          <a href="javascript:void(0);" :class="{'is-active': relatedId==item.id}" @click="relatedId = item.id">{{item.name}}</a></li>
      </ul>
    </sub-nav>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import modify from '@/components/modify'
import btn from '@/components/btn'
import subNav from '@/components/subNav'
export default {
  data () {
    return {
      title: '账单',
      relatedId: 1,
      relatedList: [
        {
          name: '全部',
          id: '1'
        },
        {
          name: '收入',
          id: '2'
        },
        {
          name: '支出',
          id: '3'
        }
      ]
    }
  },
  components: {
    navigator, modify, btn, subNav
  }
}
</script>

<style lang="scss" scoped>
 @import "../../assets/base.scss";

  .bill-page {

    .money-list {
      background: #ffefd6;
      height: px-rem(96px);
      padding: 0 px-rem(40px);
      font-size: px-rem(28px);
      line-height: px-rem(96px);
      color: #f30;
      li {
        display: inline-block;
        &:first-child {
          margin-right: px-rem(160px);
        }
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

    .spe-li {
      width: 33%;
      text-align: center;
    }

  }
</style>
