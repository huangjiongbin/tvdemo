
// https://apim.restful.5lux.com.cn/good/brands
import http from "utils/http.js"

export const getBrand = ()=>http("get","/good/brands");
