<template>
    <div id="app" @touchmove.prevent>
        <div v-if="!isPC">
            <m-header></m-header>
            <tab></tab>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <player></player>
        </div>
        <div class="tips">
            <p>请用手机访问</p>
            <div class="icon">
                <img src="./QRcode.png" width="200" height="200">
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Player from 'components/player/player'
  import Tab from 'components/tab/tab'
  import { isPCsystem } from 'common/js/util'

  export default {
    computed: {
      isPC () {
        return isPCsystem()
      }
    },
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .tips
        text-align: center
        margin-top: 100px
        .icon
            margin-top: 50px
            margin-left: auto
            margin-right: auto
            width: 200px
</style>