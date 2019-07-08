<template>
    <div class="fashion">
      <div class="fashion_p" >
        <p class="fashion_pp" >时尚发布厅</p>
        <p class="fashion_pf">FASHION TV</p>
      </div>
      <div class="fashion_list">
        <a href="#">
          <img src="http://img550.5lux.com.cn/2018/10/25/gh/154045757116_750x421.jpg" alt="">
          <p>Stella McCartney</p>
        </a>
      </div>
      <div class="fashion_listimg">
        <a href="#"><img src="http://img550.5lux.com.cn/2018/10/25/cd/154045757343_369x456.jpg" alt=""></a>
        <a href="#"><img src="http://img550.5lux.com.cn/2018/10/25/tu/154045757262_369x456.jpg" alt=""></a>
      </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name:"life",
    created() {
    
    axios("https://apim.restful.5lux.com.cn/shop/home_all_info").then(data => {
    //  console.log (data.data.data);
    this.tarbars = data.data.data
     // console.log(this.tarbars);
    })
  },
  data() {
    return {
      tarbars:[]
    }
  }
}
</script>
<style>

</style>


