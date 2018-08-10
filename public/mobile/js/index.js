$(function () {
  //开启轮播
  //获得slider插件对象
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval: 500//自动轮播周期，若为0则不自动播放，默认为0；
  });
  // 滚动区域
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators: true, //是否显示滚动条
  });
})