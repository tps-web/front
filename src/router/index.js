import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import playVideo from '@/components/playVideo'
import aMap from '@/components/aMap'
import tree from '@/components/tree'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/playVideo',
      name: 'playVideo',
      component: playVideo
    },
    {
      path: '/aMap',
      name: 'aMap',
      component: aMap
    },
     {
      path: '/tree',
      name: 'tree',
      component: tree
    }
  ]
})
