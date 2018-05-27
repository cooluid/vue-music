import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const Recommend = () => import('components/recommend/recommend')
// const Singer = () => import('components/singer/singer')
// const Rank = () => import('components/rank/rank')
const Search = () => import('components/search/search')
// const SingerDetail = () => import('components/singer-detail/singer-detail')
// const Disc = () => import('components/disc/disc')
// const TopList = () => import('components/top-list/top-list')
const UserCenter = () => import('components/user-center/user-center')
const About = () => import('components/about/about')
const Love = () => import('components/love/love')
const Love2 = () => import('components/love2/love2')
const Love3 = () => import('components/love3/love3')
const Love4 = () => import('components/love4/love4')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/love'
    },
    {
      path: '/love',
      component: Love
    },
    {
      path: '/love2',
      component: Love2
    },
    {
      path: '/love3',
      component: Love3
    },
    {
      path: '/love4',
      component: Love4
    },
    {
      path: '/user',
      component: UserCenter
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
