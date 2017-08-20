<template>
  <section class="recommend-page">
    <navigator :title="title" showClass="second"></navigator>

    <div class="r-wrap showb">
        <span class="r-bus">商家</span>
        <span class="r-mon">0</span>
        <router-link :to="{ name: 'seller-reward'}" class="iconfont next">&#xe700;</router-link>
    </div>
    <div class="r-wrap">
      <span class="r-bus">买手</span>
      <span class="r-mon">0</span>
      <router-link :to="{ name: 'buyer-reward'}" class="iconfont next">&#xe700;</router-link>
    </div>

    <div class="m-wrap">
      <div class="r-wrap m-title">奖励规则</div>
      <div class="m-con showb">
        <div class="con-l">推荐商家</div>
        <div class="con-r">
          <span class="r-title">￥10+3%</span>
          推荐商家注册，他完成第一单任务，你就能获取￥10佣金作为奖励哦；以后他每发布一单任务并完成佣金支付，
          你都能获取3%佣金作为奖励哦，一年内有效。
        </div>
      </div>
      <div class="m-con">
        <div class="con-l">推荐买手</div>
        <div class="con-r">
          <span class="r-title">￥5 + 5%</span>
          推荐商家注册，他完成第一单任务，你就能获取￥10佣金作为奖励哦；以后他每发布一单任务并完成佣金支付，
          你都能获取3%佣金作为奖励哦，一年内有效。
        </div>
      </div>
    </div>

    <div class="m-wrap">
      <div class="r-wrap m-title">推荐方法</div>
      <div class="fun-title">方法一：下载二维码到手机，并发给好友</div>
      <div class="fun-con">
        <img class="cord" src="../../assets/img/cord.png">
      </div>
      <div class="fun-title">方法二：复制下面推荐链接，并发送给好友</div>
      <div class="fun-wrap">
        <input class="small-input" readonly type="text" value="http://m.chongshouye.com/f/56327">
        <div class="small-btn">复制</div>
      </div>
    </div>

  </section>
</template>

<script>
import navigator from '@/components/navigator'
export default {
  data () {
    return {
      title: '推荐有奖',
      showClass: 'second'
    }
  },
  components: {
    navigator
  }
}

</script>

<style lang="scss" scoped>
@import "../../assets/base.scss";
.recommend-page {
  $def-color: #666;
  $mon-color: #f30;
  $wrap-h: 96px;
  $module-color: #999;

  background-color: $bk-color;

  .r-wrap {
    background: $white;
    padding-left: px-rem(40px);
    width: 100%;
    height: px-rem($wrap-h);
    line-height: px-rem($wrap-h);
    font-size: px-rem(26px);
  }

  .r-bus {
    color: $base-color;
    &:before {
      color: $def-color;
      content: '推荐';
    }
    &::after {
      color: $def-color;
      content: '累计奖励';
    }
  }

  .r-mon {
    float: right;
    padding-right: px-rem(140px);
    color: $mon-color;
    &::after {
      color: $def-color;
      content: '元';
    }
  }
  .next {
    position: absolute;
    float: right;
    right: px-rem(20px);
    text-decoration: none;
    font-size: px-rem(36px);
    font-weight: bold;
    color: $base-color;
  }

  .showb {
    border-bottom: 1px solid #f9f9f9;
  }

  .m-title {
    background-color: #ebfff6;
    margin-top: px-rem(20px);
    padding: 0;
    text-align: center;
    font-size: px-rem(28px);
    color: $base-color;
  }
  .m-con {
    background: $white;
    width: 100%;
    height: px-rem(240px);
    color: $module-color;

    .con-l {
      float: left;
      width: px-rem(240px);
      height: 100%;
      text-align: center;
      font-size: px-rem(28px);
      line-height: px-rem(240px);
    }
    .r-title {
      display: block;
      line-height: px-rem(80px);
      font-size: px-rem(32px);
      color: $mon-color;
      text-align: center;
    }
    .con-r {
      font-size: px-rem(26px);
    }
  }

  .m-wrap {
    background: $white;
  }
  .fun-title {
    padding-left: px-rem(60px);
    line-height: px-rem(120px);
    color: $module-color;
  }

  .cord {
    display: block;
    margin: 0 auto;
    width: px-rem(346px);
    height: px-rem(346px);
  }

  .fun-wrap {
    padding: 0 0 px-rem(90px) px-rem(60px);
  }

  .small-input {
    background-color: #f8f8f8;
    padding-left: px-rem(60px);
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: px-rem(10px);
    width: 65%;
    height: px-rem(76px);
    color: #999;
  }
  .small-btn {
    display: inline-block;
    background: $base-color;
    border-radius: px-rem(10px);
    margin-left: px-rem(20px);
    width: px-rem(140px);
    height: px-rem(76px);
    line-height: px-rem(76px);
    font-size: px-rem(28px);
    text-align: center;
    color: $white;
  }
}
</style>
