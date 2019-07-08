import Vue from 'vue'
import Router from "vue-router";
Vue.use(Router)


import Brand from "./brand";
import Classify from "./classify";
import CommoList from "./commoList"
import Flagshop from "./flagshop"
import Shop from "./shop"



export default new Router({
    routes:[
        Brand,
        Classify,
        CommoList,
        Flagshop,
        Shop,
       
    ]
})
