
import {GET, POST, DELETE, PUT} from './http';

function userLogin(params) {
  POST('/login/userLogin', params, 'form')
}

function pageAppeal (params){
  POST('/wjAppeal/pageAppeal', params)
}

function myAppeal(params){
  POST('/wjAppeal/myAppeal', params)
}

function appealToEndorse(params){
  POST('/wjAppealEndorse/appealToEndorse/'+params.data.appealId, params)
}

function cancelEndorse(params){
  DELETE('/wjAppealEndorse/cancelEndorse/'+params.data.appealId, params)
}

function appeal(params){
  GET('/wjAppeal/appeal/'+params.data.appealId, params)
}

function pageDynamic(params){
  POST('/wjDynamic/pageDynamic', params)
}

function dynamicEndorse(params){
  POST('/wjDynamicEndorse/dynamicEndorse/'+params.data.dynamicId, params)
}

function cancelEndorse(params){
  DELETE('/wjDynamicEndorse/cancelEndorse/'+params.data.dynamicId, params)
}

function chat(params){
  GET('/wjChat/chat', params)
}

function queryChatUser(params){
  GET('/wjChatUser/queryChatUser/'+params.data.chatId, params)
}

function pageChatRecord(params){
  POST('/wjChatRecord/pageChatRecord', params)
}

function userData(params){
  GET('/wjUser/userData', params)
}




export default { // 暴露接口

  
  userLogin, // 根据code 登录、授权



  // start 诉求
  
  pageAppeal, //分页查询诉求
  myAppeal, // 查询我的诉求
  appealToEndorse, // 诉求点赞
  cancelEndorse, // 诉求取赞
  appeal, // 获取单个诉求

  // end 诉求



  // start 动态

  pageDynamic, // 分页查询动态
  dynamicEndorse, // 动态点赞

  // end 动态




  // start 聊天室

  chat, // 查询自己相关的聊天室
  queryChatUser, // 查询聊天室对应的用户
  pageChatRecord, // 分页查询聊天记录

  // end 聊天室



  // start 用户

  userData,

  // end 用户



}