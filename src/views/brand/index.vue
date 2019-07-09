<template>
<div>
    <TabBar/>
   <div class="f_lux">
        <div class="nav">
            <div class="bg_colors"></div>
            <div style="position: relative; z-index: 10;">
                <div class="brand">
                    <div class="brandindex">
                        <div class="warpper">
                            <div class="tuijian">
                                <div class="tjtitle">
                                    <span class="line"></span> 
                                    <span class="name">推荐品牌</span> 
                                    <span class="line"></span></div>
                                <ul class="tjwarpper">
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477432418542.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img550.5lux.com.cn/2018/10/09/bc/153908207664_214x108.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477305449735.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477378665957.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477386347903.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/19/14479263905429.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477460558710.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477312236406.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img550.5lux.com.cn/2017/12/18/ab/151358705859_214x108.jpg"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477284515625.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img.5lux.com.cn/511/avatar/2015/11/17/14477318718372.png"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                    <li class="tjlist"><a class="tjlink"><img
                                                src="http://img550.5lux.com.cn/2017/05/15/pq/149482910148_214x108.jpg"
                                                class="tjimg">
                                            <div class="drop"></div>
                                        </a></li>
                                </ul>
                            </div>

                            <div class="tjtitle">
                                    <span class="line"></span> 
                                    <span class="name">推荐品牌</span> 
                                    <span class="line"></span>
                            </div>
                            <div class="t-footer">
                                    <div class="click">%</div>
                                    <div class="word">%Percent</div>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 
</template>


<script>
import {getBrand} from "api/shoppingList"
import TabBar from "common/footer";
import GetBrand from "api/shoppingList"
export default {
    name:"brand",
  async created() {
    let data = await getBrand();
    console.log(data.data);
  },
    components:{
        TabBar
    }
}

</script>




<style>
.f_lux{
    padding-top:44px;  
}
.brand {
            position: relative;
            width: 100%;
            background: #f2f2f2;
            z-index: 1;
        }

        .brandindex {
            position: relative;
            bottom: 0;
            background: #f2f2f2;
            width: 100%;
            overflow: hidden;
        }

        .brandindex .warpper {
            width: 100%;
        }

        .brandindex .warpper .tuijian {
            margin-bottom: 10px;
            background: #fff;
        }

        .tjtitle {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            height: 44px;
            font-size: 14px;
            color: #333;
        }

        .brandindex .warpper .tuijian .tjwarpper {
            overflow: hidden;
            width: calc(100% -20px);
            
        }

        .brandindex .warpper .allbrand .alltitle {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            height: 44px;
            font-size: 14px;
            color: #333;
            background: #fff;
        }

        .brandindex .warpper .tuijian .tjwarpper .tjlist {
            float: left;
            width: 25%;
        }

        .brandindex .warpper .tuijian .tjwarpper .tjlist .tjlink {
            display: block;
            border: 1px solid #f2f2f2;
            box-sizing: border-box;
            border-left: none;
            border-bottom-color: #fff;
            position: relative;
        }

        .brandindex .warpper .tuijian .tjwarpper .tjlist .tjlink .tjimg {
            position: absolute;
            width: 74%;
            left: 13%;
            top: 31%;
        }

        .brandindex .warpper .tuijian .tjwarpper .tjlist .tjlink .drop {
            margin: 100% 0 0;
        }

        /* .tjtitle .line:after {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            border-top: 1px solid #333;
            content: " ";
        } */
        .tjtitle> .name{
            font-size: 14px;
        }
        .tjtitle> .line{
            width: 50px;
            height: 1px;
            background: #000000
        }
        .t-footer{
            width: 100%;
            height: 50px;
            /* background: red; */
            overflow: hidden;
        }
        .t-footer> .click{
            font-size: 16px;
            text-align: left;
            padding-left:10px; 
            background: #fff;
        }
        .t-footer> .word{
            font-size: 14px;
            text-align: left;
            padding:10px 0 0 10px;
            
        }
    


</style>
