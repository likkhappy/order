<template>
  <div class="btn">{{text}}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },

  methos: {
    btnClick: function() {
      this.$emit('btnClick');
    }

  }

}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.btn {
  background: $base-color;
  border-radius: px-rem(10px);
  margin: px-rem(20px) auto 0;
  width: 90%;
  height: px-rem(88px);
  text-align: center;
  line-height: px-rem(88px);
  color: $white;
  font-size: px-rem(36px);
}
</style>
