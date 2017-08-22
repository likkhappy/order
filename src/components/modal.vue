<template>
  <div :class="addClass" class="modal-mask" v-show="show" transition="modal" @click.self="onMaskClick" @touchmove.stop.prevent.capture>
      <div class="modal-wrapper">
          <div class="modal-container" v-show="showContent">
              <slot class="modal-header" name="modal-header">
                  {{ header }}
              </slot>

              <slot class="modal-body" name="modal-body">
                  {{ body }}
              </slot>

              <div class="modal-footer" :class="{'border-none': !ok.show && !cancel.show}">
                  <slot name="footer">
                      <button class="modal-default-button modal-button-ok"  :class="[{'border-none': !cancel.show}, ok.showClass]" v-show="ok.show" @click="ok.callback.call($parent)">
                          {{ ok.text }}
                      </button>

                      <button class="modal-default-button modal-button-cancel" v-show="cancel.show" @click="cancel.callback()">
                          {{ cancel.text }}
                      </button>
                  </slot>
              </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'le-modal',
  props: {
      addClass: {
          type: String
      },
      show: {
          type: Boolean,
          required: true,
          twoWay: true
      },
      showContent: {
          type: Boolean
      },
      header: {
          type: String,
          default: 'Tips'
      },
      body: {
          type: String,
          default: ''
      },
      ok: {
          type: Object,
          default: function() {
              return {
                  callSelf: this,
                  show: false,
                  text: 'Ok',
                  callback: function() {
                    console.log('ok');
                      this.show = false;
                  }
              };
          }
      },
      cancel: {
          type: Object,
          default: function() {
              return {
                  show: false,
                  text: 'Cancel',
                  callback: function() {
                      this.show = false;
                  }
              };
          }
      },
      duration: {
          type: Number,
          default: 0
      },
      onMaskClick: {
          type: Function,
          default: function() {
          }
      }
  },

  watch: {
      'show': function(show) {
        console.log(show);
        if (show) {
          console.log(show);
          document.getElementsByTagName('html')[0].style.overflow='hidden';
          document.getElementsByTagName('body')[0].style.overflow='hidden';
        } else {
          document.getElementsByTagName('html')[0].style.overflow='auto';
          document.getElementsByTagName('body')[0].style.overflow='auto';
        }
      },
      'duration': function(duration) {
          var self = this;

          if (duration && duration > 0) {
              setTimeout(function() {
                  self.show = false;
              }, duration);
          }
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
$fontsize: 28px;

$mask-bgcolor: rgba(0, 0, 0, .5);

$container-shadow-color: rgba(0, 0, 0, .33);
$container-padding-v: 40px;
$container-padding-h: 60px;
$container-bgcolor: #fff;
$container-w: 600px;

$header-color: #42b983;

$body-margin-v: 40px;

$footer-bd-color: #cdc7c7;

$button-color: #999;
$first-button-color: #ff8903;
$first-button-bd-color: #cdc7c7;



.modal-mask {
    // @include flexrow-center;
    display: box;
    box-align: center;
    box-pack: center;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: opacity .3s ease;
    z-index: 30001;
    background-color: $mask-bgcolor;
    width: 100%;
    height: 100%;
}

.modal-container {
    // @include transition(all .3s ease);
    transition: all .3s ease;
    margin: 0 auto;
    border-radius: 2px;
    box-shadow: 0 2px 8px $container-shadow-color;
    background-color: $container-bgcolor;
    padding: px-rem($container-padding-v) px-rem($container-padding-h);
    width: px-rem($container-w);
    font-size: fontsize($fontsize);
}

.modal-header {
    h3 {
        margin-top: 0;
        color: $header-color;
    }
}

.modal-body {
    margin: px-rem($body-margin-v) 0;
}

.modal-footer {
    // @include display-box;
    // @include display-flex;
    display: box;
    display: flex;

    border-top: 1px solid $footer-bd-color;
    width: 100%;

    button {
        // @include box-flex(1);
        box-flex: 1;
        flex: 1;
        // @include flex(1);
        display: block;
        border: 0;
        padding: 15px 0;
        text-align: center;
        text-decoration: none;
        color: $button-color;

        &:first-child {
            border-right: 1px solid $first-button-bd-color;
            color: #fff;
        }
    }

    &.border-none {
        border: 0;
    }
}

.modal-enter,
.modal-leave {
    opacity: 0;

    .modal-container {
      transform: scale(1.1);
        // @include transform(scale(1.1));
    }
}
.ok {
  background: #387ef5;
  color: #fff;
}
</style>
