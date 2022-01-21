//所有的url接口
// const host = 'https://www.weiju.fun/weiju'
const host = 'http://localhost:8080/weiju'
// 模块
const moduleUser = "wjUser";
const moduleAppeal = "wjAppeal";
const moduleAppealEndorse = "wjAppealEndorse";
const moduleDynamic = "wjDynamic";
const moduleDynamicEndorse = "wjDynamicEndorse"
const moduleChat = "wjChat"
const moduleChatUser = "wjChatUser"
const moduleChatRecord = "wjChatRecord"

const moduleTest = "test";
// 具体请求（接口）
const API = {
  
  // start 通用接口

  chatSocket: `${host}/chatSocket`, // webSocket 连接 后面接上 userId
  testOne: `${host}/${moduleTest}/testOne`,  // 测试查询所有的

  // end 通用接口


  // start 用户相关接口
  detectionUserAuthorization: `${host}/${moduleUser}/detectionUserAuthorization`, // 检测用户登录
  getUserCode: `${host}/${moduleUser}/getUserCode`, // 获取用户code, 后台换取 session_key。（获取后端对应的UUID）
  userAuthorization: `${host}/${moduleUser}/userAuthorization`, // 用户授权接口
  getByIdUserData: `${host}/${moduleUser}/getByIdUserData`, // 根据用户id 查询用户信息 包括需要查询其他表的一些数据（点赞、动态...）
  // end 用户相关接口

  


  // start 诉求相关接口

  addAppeal: `${host}/${moduleAppeal}/addAppeal`, //添加诉求
  listPageAppeal: `${host}/${moduleAppeal}/listPageAppeal`, // 按条件分页查询 诉求
  getByIdAppeal: `${host}/${moduleAppeal}/getByIdAppeal`, // 根据诉求id，查询
  appealToEndorse: `${host}/${moduleAppealEndorse}/appealToEndorse`, // 为诉求点赞
  cancelEndorse: `${host}/${moduleAppealEndorse}/cancelEndorse`, // 取消点赞

  // end 诉求相关接口



  // start 动态相关接口

  queryPageWjDynamic: `${host}/${moduleDynamic}/queryPageWjDynamic`, // 分页查询动态
  addDynamicEndorse: `${host}/${moduleDynamicEndorse}/addDynamicEndorse`, // 动态点赞
  cancelEndorse: `${host}/${moduleDynamicEndorse}/cancelEndorse`, // 取消动态点赞

  // end 动态相关接口



  // start 聊天相关接口

  queryAllChat: `${host}/${moduleChat}/queryAllChat`, // 查询用户所有的 聊天室/聊天列表
  queryChatUser: `${host}/${moduleChatUser}/queryChatUser`, // 根据聊天室id 查询聊天室 对应的用户
  queryPageWjChatRecord: `${host}/${moduleChatRecord}/queryPageWjChatRecord` // 分页查询聊天记录


  // end 聊天相关接口


}

export default API