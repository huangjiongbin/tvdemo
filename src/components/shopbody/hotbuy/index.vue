<template>
    <!-- 大家都在买 -->
    <div class="fashion buy">
      <div class="fashion_p">
        <p class="fashion_pp">大家都在买</p>
        <p class="fashion_pf">HOT SALES</p>
      </div>
      <div class="sales">
        <ul>
          <li v-for="(item,index) in goods" :key="index">
            <a href="#"><img :src="item.thumb"></a>
            <p class="text-pp">{{item.sku_title}}</p>
            <p>￥{{item.product_price}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name:"hotnav",
  created() {
    axios("https://apim.restful.5lux.com.cn/shop/theirchose?page=1").then((res) => {
      // console.log(res);
      this.goods = res.data.data.theirchose
      // console.log(this.goods);
    })
  },
  data() {
    return {
      goods: []
    }
  }
}
</script>

<style>
/* 大家都在买 */
.buy .sales {
  width: 100%;

}
.fashion .sales ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
}
.fashion .sales ul li {
  width: 50%;
  position: relative;
  text-align: center;
}
.buy {
  border: 0;
}
.fashion .sales ul li img {
  width: 50%;
  height: 50%;
}
.fashion .sales ul li p {
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
  line-height: 20px;

}
.fashion .sales ul .litext-pp{
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 20px;

}
</style>
