<template>
  <div id="footer">
    <ul>
      <router-link tag="li" 
      v-for="(item,index) in listData" 
      :key="index" :to="item.path"
      @click.native="chgTabbar(item.path)"
      >
        <i  class="iconfont" 
        v-html="item.icon"></i>
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:"tabBar",
  props: ['listData'],
  methods:{
    chgTabbar(path){
      if(path == "/list"){
        // console.log("11")
        this.$emit("change")
      }
    }
  }
}
</script>

<style>
/* 尾部 */
#footer{
  height:44px;
  width: 100%;
  background: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index:999;
  }
#footer ul{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  }
#footer ul li{
    display: flex;
    color: #7e8c8d;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size:10px;

  }
  #footer ul li span{
    margin-top: 5px;
  }

#footer ul li .iconfont{
    font-size:22px;
  }
#footer ul .router-link-exact-active{
  color: #fff;
}

</style>
