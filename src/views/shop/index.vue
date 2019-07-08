<template>
  <div>
    <HeaderCom/>
      <!-- 导航 -->
    <div class="nav">
      <ul>
        <li class="border"><a href="#">首页</a></li>
        <li><a href="#"> 箱包</a></li>
        <li><a href="#"> 美妆</a></li>
        <li><a href="#"> 服装</a></li>
        <li><a href="#"> 首页</a></li>
        <li><a href="#"> 腕表</a></li>
        <li><a href="#"> 配饰</a></li>
        <li><a href="#"> 母婴</a></li>
        <li><a href="#"> 美酒</a></li>
        <li><a href="#"> 家居</a></li>
        <li><a href="#"> 电子</a></li>
        <li><a href="#"> 办公</a></li>
        <li><a href="#"> 鞋靴</a></li>
      </ul>
    </div>
    <Shopbody/>
  </div>
</template>


<script>

import Shopbody from "components/shopbody"
export default {
  name:"shop",
  components:{
    Shopbody
  }
}
</script>


<style>
.nav{
  width: 100%;
  height: 39px;
  background: #fff;
  overflow-x:auto;
  margin-top: 44px;
  position: fixed;
  color: #333;
  z-index: 99999;
}
.nav::-webkit-scrollbar {
  display: none;
}
.nav ul{
  width: 800px;
  height: 39px;
  line-height: 39px;
  display: flex;
  justify-content: space-around;
}
.nav ul li{
  font-size: 14px;
  line-height: 39px;
}
.border{
border-bottom: 3px solid #ccc;
}

/* 内容区 */
#mian{
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 83px 0  44px 0;
}
/* 轮播图 */
.autoplay{
  width: 100%;
}
.autoplay img{
  width: 100%;
}
.autoplay img img{
  width: 100%;
}
/* 热门分类导航 */

.nav_list{
  width: 100%;
  height: 80px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  color: #7e8c8d;
}
.nav_list i{
  font-size: 28px;
}
.list_list{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.list_list span{
  margin-top:6px;
}
/* 限时秒杀 */
.limite{
  width: 100%;
  height: 174.5px;
  padding-top:5px;
}
.limite .limitetime{
  height: 43px;
  line-height: 18px;
  color: #333;
  text-align: center;
  font-size: 16px;
  margin-bottom: 7px;
}
.limite .limitetime .limite_p{
  font-size: 12px;
}
.limite .limitetime p span{
  width: 12px;
  height: 12px;
  border-radius: 5px;
  background: #333;
  color: #fff;
  font-size: 12px;
}
/* 限时换购 */
.limitehot{
  height: 110px;
  width: 100%;
  overflow: auto;
}
.limitehot ul{
  width: 3000px;
  display: flex;
  justify-content: space-around;
}

.limitehot .limitehot_box{
  width: 234px;
  height: 110px;
  padding: 10px;
  border:1px solid #999;
  display: flex;
 justify-content: space-between;
  font-size: 14px;
  box-sizing: border-box;
}
.limitehot::-webkit-scrollbar {
  display: none;
 
}
.limitehot .limitehot_box img{
  display: block;
  width: 90px;
  height: 90px;
}
.limitehot .limitehot_box .title_t{
  height: 30px;
  line-height: 30px;
  color: #333;
}
.limitehot .limitehot_box .title_m{
  margin: 5px 0;
  height: 18px;
  line-height:20px;
  color: #ff3333;
}
.limitehot .limitehot_box .title_l{
  color: #999;
}
.limitehot .limitehot_box .title_p{
  color: #fff;
  width: 49px;
  height: 14px;
  background: #ff3388;
}
/* 宝格丽 */
.bgl{
  width: 100%;
}
.shopbanner{
  margin-top:20px;
  width: 100%;
  height: 212px;
  border-top:10px solid #f2f2f2;
}
.shopbanner img{
  width: 100%;
  height: 100%;
}
.shoplist{
  width: 100%;
  height: 120px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.shoplist ul{
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  position: relative;
}
.shoplist ul li{
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.shoplist ul li a{
  height: 120px;
  display: block;
}
.shoplist ul li img{
  width: 95%;

}
.shoplist ul li p{
  position: absolute;
  left: 20px;
  bottom:40px;
  z-index: 22;
  color: #fff;
}
.shopaTug{
  width:100%;
  padding-bottom: 10px;
}
.shopaTug p{
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
.fashion{
  width: 100%;
  font-size: 14px;
  padding-top:10px;
  border-bottom:10px solid #f2f2f2;
}
.fashion .fashion_p{
  margin: 0 auto;
  line-height: 20px;
  text-align: center;
}
.fashion .fashion_p .fashion_pp{
  font-weight: 900;
}
.fashion .fashion_p .fashion_pf{
  font-size: 10px;
}
.fashion .fashion_list{
  width: 100%;
  height:220px;
  position: relative;
  overflow: hidden;

}
.fashion .fashion_list img{
  width: 100%;
  height: 100%;
  
}
.fashion .fashion_list a{
  display: block;
  width: 100%;
  height: 100%;
}
.fashion .fashion_list a p{
  color: #fff;
  font-size: 24px;
  display: inline-block;
  position: absolute;
  left: 30%;
  bottom: 20px;
}
.fashion .fashion_listimg{
  margin-top:8px;
  width: 100%;
  height:218px;
  display: flex;
  justify-content: space-between;
}
.fashion .fashion_listimg img{
  width: 99%;
  height: 99%;
}

.buy .sales{
  width: 100%;
  height: 100%;
}
.fashion .sales ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
}
.fashion .sales ul li{
  width: 50%;
  position: relative;
  text-align: center;
}
.buy{
  border: 0;
}
.fashion .sales ul li img{
  width:70%;
  height:70%;
}
.fashion .sales ul li p{
  line-height: 20px;
}

.load{
  width: 100%;
  height: 50px;
  background: #f2f2f2;
}
.load p{
  color: #ccc;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
}










</style>
