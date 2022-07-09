
import {
	userLogin
} from '../api/user.js'
import {
	hideLoading
} from './util.js'
import {host} from '../config.js'

// 请求的封装
var HTTP = {}
HTTP.get = function(url, params, contentType) {
	return http(url, 'GET', params, contentType)
}
HTTP.post = function(url, params, contentType) {
	return http(url, 'POST', params, contentType)
}
HTTP.delete = function(url, params, contentType) {
	return http(url, 'DELETE', params, contentType)
}
HTTP.put = function(url, params, contentType) {
	return http(url, 'PUT', params, contentType)
}

function http(url, type, params, contentType) {

	url = host + url

	let token = uni.getStorageSync('token') // 获取token

	let data = {}

	if (params) { // 在这里判断一下data是否存在，params表示前端需要传递的数据，params是一个对象，有三组键值对，data：表示请求要发送的数据，success：成功的回调，fail：失败的回调，这三个字段可缺可无，其余字段会忽略
		for (let key in params) { // 在这里判断传过来的参数值为null，就删除这个属性
			if (params[key] == null || params[key] == 'null') {
				delete params[key]
			}
		}

		// 如果不是数组
		if (Array.isArray(params)) {
			data = params
		} else {
			data = {
				...params
			}
		}

	}


	return new Promise((resolve, reject) => {

		uni.request({
			url: url, // 就是拼接上前缀,此接口域名是开放接口，可访问
			method: type, // 接口的请求类型
			data,
			header: {
				'content-type': contentType == 'form' ? 'application/x-www-form-urlencoded' :
					'application/json;charset=UTF-8',
				'token': token
			},
			success(res) {
				if (res.data.code !== '00000') {

					// token 过期了
					if (res.data.code === 'A0230') {
						// 用户通过code 换取登录态 token
						userLogin()
					}

					// 访问未授权
					if (res.data.code === 'A0301' || res.data.code === 'A0201') {
						uni.showModal({
							title: '提示',
							content: '你没有授权，无法使用更多功能，是否去授权',
							success(res) {
								if (res.confirm) {

									uni.navigateTo({
										url: '/pages/authorization/authorization',
									})

								} else if (res.cancel) {

								}
							}
						})
						return
					}

					uni.showToast({
						title: res.data.message,
						icon: 'none',
						duration: 2000
					})
					return
				}

				resolve(res.data)

			},
			fail(err) {
				hideLoading()
				reject(err)
			}
		})

	})



}

module.exports = {
	GET: HTTP.get,
	POST: HTTP.post,
	DELETE: HTTP.delete,
	PUT: HTTP.put
}
