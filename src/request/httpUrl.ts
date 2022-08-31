// ./src/request/httpUrl.ts
// 这是配置根目录的还有接口路径的


const config = {
    rootUrl: "http://106.52.239.206:8080"
};

const httpApi = {
    // 登录注册部分
    banner: config.rootUrl + '/home/banner', // banner
    login: config.rootUrl + '/cat/user/login', // 用户登录
    register: config.rootUrl + '/cat/user/register',      //用户注册

    // 报名部分
    apply: config.rootUrl + '/apply', //报名表提交
    // 预约部分
    timeSubmit: config.rootUrl + '/cat/reservation/reservation/add',//用户提交预约时间
    BookData: config.rootUrl + '/cat/reservation/number',//获取预约数据
    bookCancel: config.rootUrl + '/cat/reservation/reservation/del',//删除预约
    // 查看进度部分
    userProgress: config.rootUrl + '/cat/user/searchProgress' //查看用户进度,
}

export default httpApi;