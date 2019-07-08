<template>
   <!-- 热门分类导航 -->
    <div class="nav_list">
      <div class="list_list" v-for="(item,index) in tarbar" :key= "index">
        <i ><img :src="item.ad_code"></i>
        <span>{{item.ad_name}}</span>
      </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name:"hotnav",
  created() {
    // axios("https://apim.restful.5lux.com.cn/shop/catalist").then(res => {
    // console.log(res);
    
    axios("http://localhost:8080/index/index_button").then(res => {
    //  console.log(res);
      this.tarbar = res.data.data.list
      // console.log(this.tarbar);
    })
  },
  data() {
    return {
      tarbar: []
    }
  }
}
</script>
<style>
/* 热门分类导航 */
.nav_list {
  width: 100%;
  height: 80px;
  font-size: 14px;
  display: flex;
  justify-content:space-around;
  color: #7e8c8d;
 
}
.nav_list i img{
display: block;
width: 50%;
margin: 0 auto;
}

.list_list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
}
.list_list span {
  margin-top: 6px;
}
</style>
