<template>
  <section>
    <div class="list">
      <ul class="box-list">
        <li v-for="itemArr in itemList">
          <span :class="{'item-select': item.select}" @click="item.select = !item.select" class="iconfont" v-for="item in itemArr">{{item.text}}</span>
        </li>

      </ul>
      <div class="box-btn">
        <div class="btn all-btn" @click="allClick">全选</div>
        <div class="btn left-btn" @click="reverseClick">反选</div>
        <div class="btn sure-btn">确定</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        itemList: [
          [{text: '淘宝任务', select: false},{text: '京东任务', select: false}],
          [{text: 'APP任务', select: false},{text: 'PC任务', select: false}],
          [{text: '精品任务', select: false},{text: '预售任务', select: false},{text: '普通任务', select: false}],
          [{text: '特别任务', select: false},{text: '浏览任务', select: false}]
        ]
      }
    },
    methods: {
      allClick: function() {
        for (var i = 0; i < this.itemList.length; i++) {
          var itemArr = this.itemList[i];
          for(var j = 0; j < itemArr.length; j++){
            var item = itemArr[j];
            item.select = true;
          }
        }
      },

      reverseClick: function() {
        for (var i = 0; i < this.itemList.length; i++) {
          var itemArr = this.itemList[i];
          for(var j = 0; j < itemArr.length; j++){
            var item = itemArr[j];
            item.select = !item.select;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
$margin: 96px;
$sub-r: 20px;
$box-p: 40px;
$box-size: 28px;

$li-m: 20px;

$btn-w: 144px;
$btn-h: 54px;
$btn-bk: #bfedda;

.list {
  background: $white;
  padding: px-rem(10px) px-rem($box-p) px-rem($box-p) px-rem($box-p);
  color: $base-font-color;
  font-size: px-rem($box-size);
  li {
    margin: px-rem($li-m) 0;
  }

  span {
    margin-right: px-rem(40px);
    font-size: px-rem(28px);
    &::before {
      margin-right: px-rem(10px);
      content: '\e666';
    }
    &.item-select {
      &::before {
        content: '\e613';
      }
    }
  }

  .box-btn {
    overflow: hidden;
    margin-top: px-rem(40px) ;
  }

  .btn {
    background-color: $btn-bk;
    border: 1px solid $base-color;
    border-radius: 5px;
    width: px-rem($btn-w);
    height: px-rem($btn-h);
    text-align: center;
    line-height: px-rem($btn-h);
  }

  .all-btn {
    float: left;
  }

  .left-btn {
    float: left;
    margin-left: px-rem(30px);
  }

  .sure-btn {
    float: right;
    background-color: $base-color;
    color: $white;
  }
}


</style>
