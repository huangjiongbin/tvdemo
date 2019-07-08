const path = require("path")



//跨域配置
//导出个对象，用来做webpack的配置项
module.exports = {
  //当启动项目的时候会自动打开浏览器
  // open:true,
  devServer: {//(开发服务器devServer)
    //当你访问这个路径的时候将你的本地域名替换成target中的域名
    proxy: {//(代理proxy)
      "/index":{//(目标target)放上域名
        target:"https://apim.restful.5lux.com.cn/",
        //(changeOrigin更改原点)
        changOrigin:true  
      }
    }
  },
  configureWebpack: {
    resolve:{//(resolve别名)
      alias: {
        "@":path.resolve(__dirname,"./src/"),
        "common":path.resolve(__dirname,"./src/common/"),
        "components":path.resolve(__dirname,"./src/components/"),
        "router":path.resolve(__dirname,"./src/router"),
        "store":path.resolve(__dirname,"./src/store/"),
        "utils":path.resolve(__dirname,"./src/utils/"),
        "views":path.resolve(__dirname,"./src/views/"),
        "api":path.resolve(__dirname,"./src/api/")
      }
    }
  }
}