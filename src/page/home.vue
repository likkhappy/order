<template>
  <div class="home">
    <navigator :title="title" :showSub="showSub" @changeShowSub="changeTaskPanel"></navigator>
    <task-list v-if="showSubList"></task-list>
    <section class="text-content">
      设置实名认证，垫付货款可立返！
      <router-link :to="{path:'/person'}" class="iconfont">前往</router-link>
    </section>
    <section class="text-content">
      添加地址审核验证，获得更多接单机会！
      <router-link :to="{path:'/person'}" class="iconfont">前往</router-link>
    </section>
    <section class="text-content task-content">
      今日还可接：
      <router-link :to="{path:'/person'}" class="iconfont">明细</router-link>
    </section>
    <task-item></task-item>
    <task-item></task-item>
    <task-item></task-item>
    <task-item></task-item>
    <section class="no-more">
      没有更多了
    </section>
  </div>
</template>

<script>
import navigator from '@/components/navigator'
import taskItem from '@/components/taskItem'
import taskList from '@/components/taskList'

export default {
  data () {
    return {
      title: '任务大厅',
      showSub: true,
      showSubList: true
    }
  },
  created () {
    console.log('this is home.Vue');
  },
  components: {
    navigator, taskList,taskItem
  },
  methods: {
    changeTaskPanel (showSubList) {
      this.showSubList = showSubList;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/base.scss";

  $top: 94px;
  $padding: 96px;
  $bottom: 120px;
  $text-bk: #fbdbdb;
  $text-color: #666;
  $content-h: 80px;
  $content-size: 28px;
  $content-p: 40px;

  $task-bk: #ffefd6;
  $task-color: #f30;

  .home {
    .text-content {
      background: $text-bk;
      padding: 0 px-rem($content-p);
      height: px-rem($content-h);
      line-height: px-rem($content-h);
      font-size: px-rem($content-size);
      font-weight: bold;
      color: $text-color;
      a {
        float: right;
        color: $text-color;
        font-size: px-rem($content-size);
        font-weight: normal;
        text-decoration: none;

        &::after {
          content: '\e62a';
        }
      }
    }

    .task-content {
      background-color: $task-bk;
      color: $task-color;

      a {
        color: $base-color;
      }
    }

    .no-more {
      height: px-rem($top);
      text-align: center;
      color: #999;
    }
  }
</style>
