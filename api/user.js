import {
	GET,
	POST,
	DELETE,
	PUT
} from '../utils/request.js'
import {
	getUserCode
} from '../utils/util.js'

// 获取token
export async function userLogin() {

	let code = await getUserCode()

	let returnParams = await POST('/login/userLogin', {
		code
	}, 'form')

	wx.setStorageSync('token', returnParams.result.token)
	wx.setStorageSync('wjUser', returnParams.result.wjUser)

}
