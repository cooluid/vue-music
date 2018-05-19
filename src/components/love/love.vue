<template>
    <div class="love" @click="stageTouch">
        <div class="background" v-show="isinit">
            <img width="100%" height="100%" src="./lovebg.jpeg">
        </div>
        <div class="tips" v-show="!isinit">点击播放</div>
    </div>
</template>

<script type="text/ecmascript-6">
  import { mapActions } from 'vuex'
  import Song from 'common/js/song'

  export default {
    data () {
      return {
        isinit: false
      }
    },
    methods: {
      stageTouch () {
        this.isinit = true
        this.$nextTick(() => {
          let song = new Song({
            'id': 107716352,
            'mid': '000gRkVb3DOM3e',
            'singer': '小贱（谭冰尧）/可歆',
            'name': '小温馨',
            'album': '小温馨',
            'duration': 213,
            'image': 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004bPW7U2NwQDc.jpg?max_age=2592000',
            'url': 'http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400000gRkVb3DOM3e.m4a?guid=2140998078&vkey=328B78E7DA9775FFBBD2D36FC4118CC7A5D8C3AC993909399F722B2AEFAFBA80BCCD6FC3C7B7D4B9B02B24934B12936354A07A82551298B7&uin=0&fromtag=38'
          })
          this.insertSong(song)
        })
      },
      ...mapActions([
        'insertSong'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    @import "~common/stylus/mixin"
    .love
        width: 100%
        .background
            position: fixed
            /*left: 0*/
            margin-top: 12px
            /*width: 100%*/
            z-index: -1
        .tips
            margin-top: 200px
            color: $color-theme
            text-align: center
</style>