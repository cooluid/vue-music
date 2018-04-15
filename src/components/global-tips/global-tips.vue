<template>
    <div class="tips">
        <p>请用手机访问</p>
        <img class="icon" src="./QRcode.png" height="200" width="200"/>
        <top-tip ref="topTip" :delay="5000">
            <div class="tip-title">
                <!--<i class="icon-ok"></i>-->
                <span class="text">手机微信扫一扫获取更好体验</span>
            </div>
        </top-tip>
    </div>
</template>

<script type="text/ecmascript-6">
  import TopTip from 'base/top-tip/top-tip'

  export default {
    created () {
      this.$nextTick(() => {
        this.$refs.topTip.show()
      })
    },
    components: {
      TopTip
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    .tips
        text-align: center
        margin-top: 100px
        .icon
            margin-top: 50px
            margin-left: auto
            margin-right: auto
            width: 200px

        .tip-title
            text-align: center
            padding: 18px 0
            font-size: 0
            .icon-ok
                font-size: $font-size-medium
                color: $color-theme
                margin-right: 4px
            .text
                font-size: $font-size-medium
                color: $color-text
</style>