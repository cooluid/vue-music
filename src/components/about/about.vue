<template>
    <div class="about">
        <p class="text">强大的音乐播放器</p>
        <div class="href"><a href="http://www.xxxx.cool" target="_blank">www.xxxx.cool</a></div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    .about
        margin: 50px
        color: $color-text-l
        .text
            text-align: center
        .href
            text-align: center
            margin-top: 50px
</style>
