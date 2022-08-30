// ./src/request/httpUrl.ts
// 这是配置根目录的还有接口路径的


const config = {
    rootUrl: "http://106.52.239.206:8080/cat/",
};

const httpApi = {
    // 测试接口
    banner: config.rootUrl + '/home/banner', // banner
    login: config.rootUrl + '/user/login', // 用户登录
    apply: config.rootUrl + '/apply', //报名表提交
    timeSubmit: config.rootUrl + '/cat/reservation/reservation/add',
    BookData: config.rootUrl + '/cat/reservation/number'

}

export default httpApi;