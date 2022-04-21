

import {
  GET,
  POST,
  DELETE,
  PUT
} from './http';

function userLogin(params) {
  POST('/login/userLogin', params, 'form')
}

function addAppeal(params) {
  POST('/wjAppeal/appeal', params)
}

function pageAppeal(params) {
  POST('/wjAppeal/pageAppeal', params)
}

function myAppeal(params) {
  POST('/wjAppeal/myAppeal', params)
}
//诉求点赞接口
function appealToEndorse(params) {
  POST('/wjAppealEndorse/appealToEndorse/' + params.data.appealId)
}

function cancelEndorse(params) {
  console.log("取消",params)
  DELETE('/wjAppealEndorse/cancelEndorse/' + params.data.appealId)
}

function appeal(params) {
  GET('/wjAppeal/appeal/' + params.data.appealId, params)
}

function appealComment(params) {
  POST('/wjAppealComment/appealComment', params)
}

function pageAppealComment(params){
  POST('/wjAppealComment/pageAppealComment', params)
}


function pageDynamic(params) {
  POST('/wjDynamic/pageDynamic', params)
}

function myDynamic(params) {
  POST('/wjDynamic/myDynamic', params)
}

function dynamicComment(params) {
  POST('/wjDynamicComment/dynamicComment', params)
}

function deleteDynamicComment(params) {
  DELETE('wjDynamicComment/dynamicComment/' + params.data.dynamicId, params)
}

function pageDynamicComment(params) {
  POST('/wjDynamicComment/pageDynamicComment', params)
}


function dynamicEndorse(params) {
  POST('/wjDynamicEndorse/dynamicEndorse/' + params.data.dynamicId, params)
}

function cancelEndorse(params) {
  DELETE('/wjDynamicEndorse/cancelEndorse/' + params.data.dynamicId, params)
}

function chat(params) {
  GET('/wjChat/chat', params)
}

function queryChatUser(params) {
  GET('/wjChatUser/queryChatUser/' + params.data.chatId, params)
}

function pageChatRecord(params) {
  POST('/wjChatRecord/pageChatRecord', params)
}

function updateUser(params){
  PUT('/wjUser/user', params)
}

function userData(params) {
  GET('/wjUser/userData', params)
}




export default { // 暴露接口


  userLogin, // 根据code 登录、授权



  // start 诉求
  addAppeal, // 添加诉求
  pageAppeal, //分页查询诉求
  myAppeal, // 查询我的诉求
  appealToEndorse, // 诉求点赞
  cancelEndorse, // 诉求取赞
  appeal, // 获取单个诉求
  appealComment, // 添加诉求评论
  pageAppealComment, //分页查询诉求评论

  // end 诉求



  // start 动态

  pageDynamic, // 分页查询动态
  dynamicEndorse, // 动态点赞
  myDynamic, // 我的诉求
  dynamicComment, // 添加动态
  deleteDynamicComment, // 删除动态
  pageDynamicComment, // 分页查询动态评论


  // end 动态




  // start 聊天室

  chat, // 查询自己相关的聊天室
  queryChatUser, // 查询聊天室对应的用户
  pageChatRecord, // 分页查询聊天记录

  // end 聊天室



  // start 用户

  updateUser, // 修改用户资料
  userData, // 查询用户的一些基本信息，例：发送诉求数，动态数，点赞数...

  // end 用户



}