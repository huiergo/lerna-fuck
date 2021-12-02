const { API } = require("leixx-lerna-222");
const axios = require("axios");

const getPopularImg = () => axios.get(API);
console.log("getPopularImg");
module.exports = getPopularImg;

// 测试代码，发布时删除
getPopularImg().then((res) => console.log(res.data.length));
