<template>
      <!-- 内容区 -->
  <div id="mian">
    <!-- 轮播图 -->
    <Lbt/>
    <!-- 热门分类导航 -->
    <Hotnav/>
    <!-- 限时秒杀 -->

    <Limitehot/>
    <!-- 宝格丽 -->
    <div class="bgl">
      <div class="shopbanner">
        <a href="#">
          <img src="http://img550.5lux.com.cn/2018/09/06/lm/153620095042_483x272.jpg" alt="">
        </a>
        <p>宝格丽</p>
      </div>
      <div class="shoplist">
        <ul>
          <li>
            <a href="#"><img src="http://img.5lux.com.cn/511/avatar/2015/11/18/14478271568197.jpg" alt="">
              <p>宝格丽隆店</p>
            </a>
          </li>
          <li>
            <a href="#"><img src="http://img.5lux.com.cn/511/avatar/2015/11/18/14478271568197.jpg" alt="">
              <p>宝格丽隆店</p>
            </a>

          </li>
          <li>
            <a href="#"><img src="http://img.5lux.com.cn/511/avatar/2015/11/18/14478271568197.jpg" alt="">
              <p>宝格丽上店</p>
            </a>

          </li>
        </ul>
      </div>
      <div class="shopaTug">
        <p>查看所有旗舰店></p>
      </div>
    </div>
    <!-- 时尚发布厅 -->
    <Life/>
    <!-- 大家都在买 -->
    <HotBuy/>
    <!-- 下拉加载更多 -->
    <div class="load">
      <p>下拉加载更多</p>
    </div>
  </div>
</template>
<script>
//  import axios from "axios";
//import {getGoods} from "api/home"

import Hotnav from "components/shopbody/hotnav"
import HotBuy from "components/shopbody/hotbuy"
import Life from "components/shopbody/life"
import Lbt from "components/shopbody/lbt"
import Limitehot from "components/shopbody/limitehot"
import Swiper from "swiper"


export default {
   name:"goods",

   components:{
     Hotnav,
     HotBuy,
     Life,
     Lbt,
     Limitehot
   }
}
</script>
<style>
/* 内容区 */
#mian {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 83px 0 44px 0;
}


/* 宝格丽 */
.bgl {
  width: 100%;
}
.shopbanner {
  margin-top: 20px;
  width: 100%;
  height: 212px;
  border-top: 10px solid #f2f2f2;
}
.shopbanner img {
  width: 100%;
  height: 100%;
}
.shoplist {
  width: 100%;
  height: 120px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.shoplist ul {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  position: relative;
}
.shoplist ul li {
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.shoplist ul li a {
  height: 120px;
  display: block;
}
.shoplist ul li img {
  width: 95%;
}
.shoplist ul li p {
  position: absolute;
  left: 20px;
  bottom: 40px;
  z-index: 22;
  color: #fff;
}
.shopaTug {
  width: 100%;
  padding-bottom: 10px;
}
.shopaTug p {
  margin: 0 auto;
  width: 135px;
  height: 24px;
  background: #333;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  line-height: 24px;
}
/* 时尚发布厅 */
.fashion {
  width: 100%;
  font-size: 14px;
  padding-top: 10px;
  border-bottom: 10px solid #f2f2f2;
}
.fashion .fashion_p {
  margin: 0 auto;
  line-height: 20px;
  text-align: center;
}
.fashion .fashion_p .fashion_pp {
  font-weight: 900;
}
.fashion .fashion_p .fashion_pf {
  font-size: 10px;
}
.fashion .fashion_list {
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
}
.fashion .fashion_list img {
  width: 100%;
  height: 100%;
}
.fashion .fashion_list a {
  display: block;
  width: 100%;
  height: 100%;
}
.fashion .fashion_list a p {
  color: #fff;
  font-size: 24px;
  display: inline-block;
  position: absolute;
  left: 30%;
  bottom: 20px;
}
.fashion .fashion_listimg {
  margin-top: 8px;
  width: 100%;
  height: 218px;
  display: flex;
  justify-content: space-between;
}
.fashion .fashion_listimg img {
  width: 99%;
  height: 99%;
}
/* 下拉加载更多 */
.load {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
}
.load p {
  color: #ccc;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
}
</style>
