//所有的url接口
const host = 'https://www.weiju.fun/weiju'
// const host = 'http://localhost:8080/weiju'
// 模块
const moduleUser = "wjUser";
const moduleAppeal = "wjAppeal";
const moduleAppealEndorse = "wjAppealEndorse";
const moduleDynamic = "wjDynamic";
const moduleTest = "test";
// 具体请求（接口）
const API = {
  
  // start 通用接口

  testOne: `${host}/${moduleTest}/testOne`,  // 测试查询所有的

  // end 通用接口


  // start 用户相关接口
  detectionUserAuthorization: `${host}/${moduleUser}/detectionUserAuthorization`, // 检测用户登录
  getUserCode: `${host}/${moduleUser}/getUserCode`, // 获取用户code, 后台换取 session_key。（获取后端对应的UUID）
  userAuthorization: `${host}/${moduleUser}/userAuthorization`, // 用户授权接口
  // end 用户相关接口

  


  // start 诉求相关接口

  addAppeal: `${host}/${moduleAppeal}/addAppeal`, //添加诉求
  listPageAppeal: `${host}/${moduleAppeal}/listPageAppeal`, // 按条件分页查询 诉求
  getByIdAppeal: `${host}/${moduleAppeal}/getByIdAppeal`, // 根据诉求id，查询
  appealToEndorse: `${host}/${moduleAppealEndorse}/appealToEndorse`, // 为诉求点赞
  cancelEndorse: `${host}/${moduleAppealEndorse}/cancelEndorse`, // 取消点赞

  // end 诉求相关接口



  // start 动态相关接口

  queryPageWjDynamic: `${host}/${moduleDynamic}/queryPageWjDynamic` // 分页查询动态

  // end 动态相关接口


}

export default API