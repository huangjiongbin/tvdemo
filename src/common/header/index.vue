<template>
  <div id="header">
    <div class="header_t">
      <i class="iconfont icon-zhixiangzuo" 
      >
      </i>
      <div class="input_i">
        <input type="text" value="请输入您要查询的内容"/>
        <i class="iconfont icon-search"></i>
      </div>
      <i class="iconfont icon-scan"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:"headerCom",
  methods:{

  }
}
</script>
 

 <style>
 #header{
  width: 100%;
  height: 44px;
  line-height: 44px;
  position: fixed;
  z-index: 99999;
  background: #fff;
}
#header .header_t{
  height: 44px;
  background: #000;
  display: flex;
  justify-content: space-around;
}
#header .header_t .input_i{
  position: relative;
  font-size: 14px;
}
#header .header_t .input_i input{
  height: 30px;
  width: 260px;
  background: #ccc;
  background: #ccc;
  position: relative;
  border-radius: 5px;
  padding-left: 30px;
}

#header .header_t .input_i i{
  position: absolute;
  left: 10px;
  bottom: 0px;

}
#header .header_t .icon-scan{
  line-height: 44px;
  font-size: 24px;
  text-align: center;
  color: #fff;
}
#header .header_t .icon-zhixiangzuo{
  line-height: 44px;
  font-size: 20px;
  text-align: center;
  color: #fff;
}
</style>
