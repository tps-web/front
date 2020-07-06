<template>
 <div>

  


<video id="video" :autoplay="autoplay" ref='player' width="100%" height="200"
  controls   :src="video" x-webkit-airplay="allow" preload="meta" webkit-playsinline="true" x5-video-player-type="h5-page" x5-video-player-fullscreen="true" playsinline="true" :poster="poster"></video>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     time: false,
      autoplay: true,
      state: false,
      poster:'https://huisn-1253895285.cos.ap-guangzhou.myqcloud.com/resourcePlus/ZhuaTouJiDanDeHuLi/1584000834520_2.jpg',
      video:'http://dpv.videocc.net/88083abbf5/5/88083abbf5b42072ec029201d9fee095_3.mp4',
        playerOptions: {
                 //播放速度
                 playbackRates: [0.5, 1.0, 1.5, 2.0],
                 //如果true,浏览器准备好时开始回放。
                 autoplay: true,
                 // 默认情况下将会消除任何音频。
                 muted: false,
                 // 导致视频一结束就重新开始。
                 loop: false,
                 // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                 preload: 'auto',
                 language: 'zh-CN',
                  // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                 aspectRatio: '16:9',
                  // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                 fluid: true,
                 sources: [{
                     //类型
                     type: "video/mp4",
                     //url地址
                     src: 'https://huisn-1253895285.cos.ap-guangzhou.myqcloud.com/video/0b13a6967a7d45abb000e096944d00d4.mp4'
                 }],
                 //你的封面地址
                 poster: '',
                  //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                 notSupportedMessage: '此视频暂无法播放，请稍后再试',
                 controlBar: {
                     timeDivider: true,
                     durationDisplay: true,
                     remainingTimeDisplay: false,
                     //全屏按钮
                     fullscreenToggle: true 
                 }
           },
    }
  },
   methods: {
  
    },
    mounted(){
   var ua = navigator.userAgent
document.addEventListener('WeixinJSBridgeReady', function () {
    if (ua.indexOf('Android') > 0) {
      setTimeout(() => {
        document.getElementById('video').play()
      }, 1000)
    } else if (ua.indexOf('iPhone') > 0) {
      setTimeout(() => {
        document.getElementById('video').play()
      }, 1000)
    }
}, false);

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
