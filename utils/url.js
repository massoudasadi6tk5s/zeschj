//所有的url接口
const host = 'https://www.weiju.fun/weiju'
// 模块
const moduleUser = "user";
const moduleTest = "test"
// 具体请求（接口）
const API = {
  FINDALL: `${host}/${moduleTest}/findAll`,  // 测试查询所有的
  // start 通用接口
  // end 通用接口
  // start 用户相关接口
  detectionUserAuthorization: `${host}/${moduleUser}/detectionUserAuthorization`, // 检测用户登录
  getUserCode: `${host}/${moduleUser}/getUserCode`, // 获取用户code, 后台换取 session_key。（获取后端对应的UUID）
  userAuthorization: `${host}/${moduleUser}/userAuthorization` // 用户授权接口
  // end 用户相关接口
}

export default API