// ./src/request/httpUrl.ts
// 这是配置根目录的还有接口路径的

const config = {
    rootUrl: "http://localhost:8080/",
};

const httpApi =  {
    // 测试接口
    banner: config.rootUrl + 'home/banner', // banner
    login: config.rootUrl + 'user/login', // 用户登录
}

export default httpApi;