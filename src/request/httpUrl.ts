// ./src/request/httpUrl.ts
// 这是配置根目录的还有接口路径的

const config = {
    rootUrl: "http://127.0.0.1:4523/m1/1473415-0-default/",
};

const httpApi = {
    // 测试接口
    banner: config.rootUrl + 'home/banner', // banner
    login: config.rootUrl + 'cat/user/login', // 用户登录
}

export default httpApi;