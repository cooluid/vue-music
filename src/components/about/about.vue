<template>
  <div class="about">
    <div class="icon"></div>
    <h1 class="text">动听音乐播放器</h1>
    <p class="desc">MVVM框架：Vue.js （版本2.x）<br>
      状态管理：Vuex  <br>
      前端路由：Vue Router  <br>
      服务端通讯：axios、jsonp <br>
      移动端滚动库：better-scroll <br>
      构建工具：webpack 2.0 <br>
      源码：es6 <br>
      博客：<a href="http://5200.me">http://5200.me</a>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .about
    color: $color-text-l
    text-align: center
    margin-top: 50px
    .icon
      display: inline-block
      width: 30px
      height: 30px
      bg-image('logo')
      background-size: 35px 35px
    .text
      display: inline-block
      line-height: 36px
      font-size: $font-size-large
      vertical-align: top
    .desc
      text-align: left
      margin: 30px 0 0 50px
      line-height: 30px
    .blog
      text-align: right
      margin: 80px 10px 0 0
      color: #283a3c
</style>
