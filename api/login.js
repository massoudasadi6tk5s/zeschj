import {
	GET,
	POST,
	DELETE,
	PUT
} from '../utils/request.js'


// 用户密码登录接口
/**
 * @param {String} nickName
 * @param {String} password 
 */
export async function userLogin(data) {
	
	return await POST(`/login/userLogin`, data, 'form')
	
}