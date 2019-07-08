<template>
      <div class="limite">
      <div class="limitetime">
        <p>限时秒杀</p>
        <p class="limite_p">仅剩
          <span>13</span>:
          <span>13</span>:
          <span>13</span>
        </p>
      </div>

      <!-- 限时抢购 -->
      <div class="limitehot">
        <ul>
          <li class="limitehot_box" v-for="(item,index) in tarbar" :key="index">
            <img :src="item.thumb" alt="">
            <div>
              <p class="title_t">{{item.sku_title}}</p>
              <p class="title_m">秒杀价
                <span>{{item.seckill_price}}</span>
                <strike class="title_l">{{item.product_price}}</strike>
                <p class="title_p">立即抢购</p>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "limitehot",
  created() {
    axios("https://apim.restful.5lux.com.cn/shop/seckill_info").then(res => {
     //console.log(res);
      this.tarbar = res.data.data
      console.log(this.tarbar);
      
    })
  },
  data() {
    return {
      tarbar: []
    }
  }
};
</script>
<style>
/* 限时秒杀 */
.limite {
  width: 100%;
  height: 174.5px;
  padding-top: 5px;
}
.limite .limitetime {
  height: 43px;
  line-height: 18px;
  color: #333;
  text-align: center;
  font-size: 16px;
  margin-bottom: 7px;
}
.limite .limitetime .limite_p {
  font-size: 12px;
}
.limite .limitetime p span {
  width: 12px;
  height: 12px;
  border-radius: 5px;
  background: #333;
  color: #fff;
  font-size: 12px;
}
/* 限时换购 */
.limitehot {
  height: 110px;
  width: 100%;
  overflow: auto;
}
.limitehot ul {
  width: 3000px;
  display: flex;
  justify-content: space-around;
}

.limitehot .limitehot_box {
  width: 234px;
  height: 110px;
  padding:10px 3px;
  border: 1px solid #999;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  box-sizing: border-box;
}
.limitehot::-webkit-scrollbar {
  display: none;
}
.limitehot .limitehot_box img {
  display: block;
  width: 90px;
  height: 90px;
}
.limitehot .limitehot_box .title_t {
  height: 32px;
  line-height: 16px;
  color: #333;
}
.limitehot .limitehot_box .title_m {
  margin: 7px 0;
  height: 18px;
  line-height: 20px;
  color: #ff3333;
}
.limitehot .limitehot_box .title_l {
  color: #999;
}
.limitehot .limitehot_box .title_p {
  color: #fff;
  width: 58px;
  height: 14px;
  background: #ff3388;
}
</style>
