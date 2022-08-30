// ./src/request/httpUrl.ts
// 这是配置根目录的还有接口路径的


const config = {
    rootUrl: "http://127.0.0.1:4523/m1/1473415-0-default",
};

const httpApi = {
    // 测试接口
    banner: config.rootUrl + '/home/banner', // banner
    login: config.rootUrl + '/user/login', // 用户登录
    apply: config.rootUrl + '/apply', //报名表提交
    timeSubmit: config.rootUrl + '/cat/reservation/reservation/add',//用户提交预约时间
    BookData: config.rootUrl + '/cat/reservation/number',//获取预约数据
    bookCancel: config.rootUrl + '/cat/reservation/reservation/del',//删除预约
}

export default httpApi;