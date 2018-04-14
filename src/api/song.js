import { commonParams } from './config'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getLyric (mid) {
  // const url = 'api/lyric'
  const url = debug ? '/api/lyric' : 'http://xxxx.cool/music/api/lyric'

  const data = Object.assign({}, commonParams, {
    pcachetime: +new Date(),
    songmid: mid,
    g_tk: 2126127342,
    hostUin: 0,
    format: 'json',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
