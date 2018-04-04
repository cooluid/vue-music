/**
 * Created by dell on 2018/3/14.
 */
import {commonParams, options} from './config'
import jsonp from 'common/js/jsonp'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  // const url = '/getDiscList'
  const url = debug ? 'api/getDiscList' : 'http://xxxx.cool/music/dist/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = debug ? 'api/getCdInfo' : 'http://xxxx.cool/music/api/getCdInfo'

  const data = Object.assign({}, commonParams, {
    type: 1,
    json: 1,
    onlysong: 0,
    disstid: disstid,
    g_tk: 2126127342,
    hostUin: 0,
    format: 'jsonp',
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
