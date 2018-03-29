<template>
  <transition name="slide">
    <music-list :songs="songs" :bg-image="bgimage" :title="title"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import {createSong} from 'common/js/song'
  import MusicList from 'components/music-list/music-list'

  export default {
    data() {
      return {
        songs: [],
        bgimage: ''
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      ...mapGetters([
        'singer'
      ])
    },
    watch: {
      songs(newVal) {
        if (newVal[0].image === this.bgimage) return
        this.bgimage = newVal[0].image
//        console.log(this.bgimage)
      }
    },
    created() {
      this._getDetail()
//      console.log(this.songs)
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normallizeSongs(res.data.list)
//            console.log(res.data.list)
          }
        })
      },
      _normallizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
