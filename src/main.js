// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' //videoJs的样式
// import 'vue-video-player/src/custom-theme.css' //vue-video-player的样式
import 'videojs-flash'; //引入才能播放rtmp视屏
// import 'videojs-contrib-hls' //引入才能播放m3u8文件
import 'vue-orgchart/dist/style.min.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VideoPlayer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
