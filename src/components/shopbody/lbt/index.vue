<template>
  <!-- 轮播图 -->
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide autoplay" v-for="(item,index) in tarbare" :key="index">
        <img :src="item.slide_thumb"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
 
 <script>
import axios from "axios"
import Swiper from "swiper"

export default {
  name: "lbt",
   
  created() {
    axios("https://apim.restful.5lux.com.cn/shop/slide?mtoken=").then(data => {
      //console.log(res);
      this.tarbare = data.data.data;
      // console.log(data.data.data);
    });
  },
  data() {
    return {
      tarbare: []
    };
  },
   mounted() {
    
    this.$nextTick(()=>{

     var swiper = new Swiper(".swiper-container",{
      initialSlide :0,
      observer:true,
      observeParents:true,
      autoplay: {
        running: true,
        observer:true,
        loop:true,
        observeParents:true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      //分布器
    })
       })
     }

};
</script>
 <style>
 /* 轮播图 */
.autoplay {
  width: 100%;
}
.autoplay img {
  width: 100%;
}
.autoplay img img {
  width: 100%;
}
</style>
 