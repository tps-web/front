<template>
 <div>
  <div class="map" id="i-map" ref="map"></div>
  <div @click="toDraw">点击</div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
     markerArr:[]
    }
  },
   created(){
  },
   methods: {
   toDraw(){//可以给页面一个按钮，这个是点击事件，点击按钮后开始标定起点和终点
      this.pointIndex=0;
      this.dragRoute = null;//规划的路径
      this.map.clearMap();
    },
    markerPoint(iconUrl, lnglat) {//画起点和终点的方法
      var marker = new AMap.Marker({
        icon: iconUrl,
        position: lnglat
      });
      marker.setMap(this.map);
      this.markerArr.push(marker)
      if(this.markerArr.length==2){//画完起点和终点后高德会自动生成起点和终点图标，所以原来的图标要删除
        this.markerArr
        this.map.remove(this.markerArr[0]);
        this.map.remove(this.markerArr[1]);
        this.markerArr = [];
      }
    },
    getRoute(path) {//路径规划
      let that = this;
      this.map.plugin("AMap.DragRoute", function() {
        that.dragRoute = new AMap.DragRoute(that.map, path, AMap.DrivingPolicy.LEAST_TIME,{
          showTraffic: false,
          polyOptions: {strokeColor: "#00AA00"}
        }); //构造拖拽导航类
        AMap.event.addListener(that.dragRoute, "complete", function () {
          var def = that.dragRoute.getRoute();
          if(def.length > 0) {
            that.formData.definition = that.dragRoute.getRoute();
          }
        });
        that.dragRoute.search(); //查询导航路径并开启拖拽导航
      });
    }
    },
 mounted() {
    this.map = new AMap.Map('i-map');//加载地图
    this.map.on("click", (e)=> {
      let iconUrl = "";
      let path=[];
      switch (this.pointIndex) {//定义一个计数器
        case 0:
          iconUrl = "https://profile.csdnimg.cn/9/D/6/2_weixin_46781081";//起点图片
          this.startLngLat = [e.lnglat.lng, e.lnglat.lat];
          this.markerPoint(iconUrl, this.startLngLat);
          this.pointIndex ++;
          break;
        case 1:
          iconUrl = "https://profile.csdnimg.cn/9/D/6/2_weixin_46781081";//终点图片
          this.markerPoint(iconUrl, [e.lnglat.lng, e.lnglat.lat]);
          this.pointIndex ++;
          path.push(this.startLngLat)
          path.push([e.lnglat.lng, e.lnglat.lat])
          console.log(path)
          this.getRoute(path);//点击完终点后调取高德的路径规划方法
          break;
        default:
          break;
      }
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
  width: 100%;
  height: 500px
}
</style>
