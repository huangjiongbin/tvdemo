<template>
  <div id="app">
     <TabBar/>
   <router-view></router-view>
   
  </div>
</template>


<script>
import TabBar from "common/footer"
// console.log(TabBar)
export default {
  name:"app",
  components:{
    TabBar
  }
}


</script>
<style >

</style>
