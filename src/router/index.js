import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import cart from "./cart";
import shop from "./shop";
import country from "./country";
import gfit from "./gfit";
import lnvestmentlist from "./list";

export default new Router({
  routes: [
   cart,
   shop,
   country,
   gfit,
   lnvestmentlist
  ]
})
