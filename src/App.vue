<template>
    <div id="app" @touchmove.prevent>
        <div v-if="!isPC || debug">
            <m-header></m-header>
            <tab></tab>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            <player></player>
        </div>
        <global-tips v-else></global-tips>
    </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Player from 'components/player/player'
  import Tab from 'components/tab/tab'
  import { isPCsystem } from 'common/js/util'
  import GlobalTips from 'components/global-tips/global-tips'

  const debug = process.env.NODE_ENV !== 'production'

  export default {
    data () {
      return {
        debug: debug,
        isPC: isPCsystem()
      }
    },
    components: {
      MHeader,
      Tab,
      Player,
      GlobalTips
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>