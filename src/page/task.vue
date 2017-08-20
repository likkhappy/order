<template>
  <div class="task-page">
    <navigator :title="title"></navigator>
    <tab :l-text="lText" :r-text="rText">
      <div slot="left-con">
        <subNav>
          <ul slot="li-list">
            <li v-for="item in saleList">
              <a href="javascript:void(0);" :class="{'is-active': saleId==item.id}" @click="saleId = item.id">{{item.name}}</a></li>
          </ul>
        </subNav>
      </div>
      <div slot="right-con">
        <subNav>
          <ul slot="li-list">
            <li v-for="item in relatedList">
              <a href="javascript:void(0);" :class="{'is-active': relatedId==item.id}" @click="relatedId = item.id">{{item.name}}</a></li>
          </ul>
        </subNav>
      </div>
    </tab>
    <router-link class="fix-circle" :to="{ name: 'recommend' }">
      推荐有奖
    </router-link>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import tab from '@/components/tab'
import subNav from '@/components/subNav'

export default {
  data () {
    return {
      title: '补订单-我的任务',
      lText: '销量任务',
      rText: '浏览任务',
      saleId: 1,
      saleList: [
        {
          name: '全部',
          id: '1'
        },
        {
          name: '已接手',
          id: '2'
        },
        {
          name: '待关闭',
          id: '3'
        },
        {
          name: '待发货',
          id: '4'
        },
        {
          name: '待评论',
          id: '5'
        },
        {
          name: '待返款',
          id: '6'
        }
      ],
      relatedId: 1,
      relatedList: [
        {
          name: '全部',
          id: '1'
        },
        {
          name: '已接手',
          id: '2'
        },
        {
          name: '待返款',
          id: '3'
        },
        {
          name: '已完成',
          id: '4'
        }
      ]
    }
  },
  created () {
    console.log('this is task.Vue');
  },
  components: {
    navigator, tab, subNav
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.task-page {
  margin: 0 0 px-rem($bottom-h) 0;
  overflow: hidden;

  .fix-circle {
    background: rgba(0, 0, 0, .5);
    position: fixed;
    bottom: px-rem(160px);
    left: px-rem(40px);
    width: px-rem(90px);
    height: px-rem(90px);
    padding: px-rem(20px);
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    font-size: px-rem(32px);
    color: $white;
  }
}
</style>
