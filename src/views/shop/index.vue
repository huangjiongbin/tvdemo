<template>
  <div>
    <HeaderCom />
    <!-- 导航 -->
    <div class="nav" >
      <ul>
        <li class="border" v-for="(item,index) in tarbar" :key="index">
          <a href="#">{{item.cata_name}}</a>
        </li>
      </ul>
    </div>
    <Shopbody />
  </div>
</template>


<script>
// import {getNavs} from "api/home"
import axios from "axios";
import Shopbody from "components/shopbody";

export default {
  name: "shop",
  components: {
    Shopbody
  },

  created() {
    axios("https://apim.restful.5lux.com.cn/shop/catalist").then(res => {
     //console.log(res);
      this.tarbar = res.data.data
      // console.log(this.tarbar);
      
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
.nav {
  width: 100%;
  height: 39px;
  background: #fff;
  overflow-x: auto;
  margin-top: 44px;
  position: fixed;
  color: #333;
  z-index: 99999;
}
.nav::-webkit-scrollbar {
  display: none;
}
.nav ul {
  width: 800px;
  height: 39px;
  line-height: 39px;
  display: flex;
  justify-content: space-around;
}
.nav ul li {
  font-size: 14px;
  line-height: 39px;
}
.border {
  border-bottom: 3px solid #ccc;
}


</style>
