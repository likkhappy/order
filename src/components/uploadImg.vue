<template>
  <div class="upload-img">
    <span class="iconfont">&#xe620;</span>
    <input type="file" v-on:change="changeFun">
    <template v-if="fileData">
      <img :src="fileData">
    </template>
  </div>
</template>

<script>
import html5ImgCompress from '@/lib/html5ImgCompress'
export default {
  data () {
    return {
      fileData: ''
    }
  },

  props: {
  },

  watch: {
    file (v, ov) {
      console.log(v);
      console.log(ov);
    }
  },

  methods: {
    changeFun: function(event) {
      var self = this;
      new html5ImgCompress(event.target.files[0], {
        done (file, base64) {
           self.fileData = base64;
        }
      });
    }

  }

}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.upload-img {
  position: relative;
  background: rgba(0, 0, 0, .3);
  width: px-rem(160px);
  height: px-rem(160px);
  text-align: center;
  color: $white;
  span {
    line-height: px-rem(160px);
    font-size: px-rem(60px);
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: none;
    opacity: 0;
    z-index: 1000;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
}
</style>
