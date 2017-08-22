<template>
  <div id="app">
   <section class="banner">
     <img class="bar-img"src="../assets/img/apptopmstj.png"/>
   </section>

   <router-view class="page-content"></router-view>


   <section class="footer" >
     <router-link class="item" to= "/home">
       <span class="text home iconfont">首页</span>
     </router-link>

     <router-link class="item" to= "/task">
       <span class="text task iconfont">任务</span>
     </router-link>

     <router-link class="item" to= "/person">
       <span class="text my iconfont">我的</span>
     </router-link>
   </section>
 </div>
</template>

<script>
export default {
 name: 'app'
}
</script>



<style lang="scss" scoped>
@import "../assets/base.scss";

$icon-size: 24px;
$height: 120px;
$active-color: #01b76d;

$bar-height: 94px;

.banner {
 position: sticky;
 top: 0;
 height: px-rem($bar-height);
 z-index: 10;
}

.bar-img {
 display: block;
 width: 100%;
 height: auto;
}
.page-content {
 margin-bottom: px-rem($bottom-h);
}

.footer {
 position: fixed;
 background-color: $white;
 bottom: 0;
 border-top: 1px solid #ededed;
 width: 100%;
 height: px-rem($height);
 z-index: 30000;

 .item {
   display: block;
   float: left;
   width: 33.3333%;
   line-height: px-rem($height);
   text-align: center;
   text-decoration: none;
   color: rgb(153, 153, 153);

 }

 .router-link-active {
   color: $active-color;
 }

 .text {
   position: relative;
   font-size: px-rem(24px);
   line-height: px-rem(176px);
   &:before {
     position: absolute;
     top: px-rem(-120px);
     font-size: px-rem(44px);
   }
 }

 .home {
   &:before {
     content: '\e614';
   }
 }

 .task {
   &:before {
     content: '\e636';
   }
 }

 .my {
   &:before {
     content: '\e63d';
   }
 }
}
</style>
