import {
	GET,
	POST,
	DELETE,
	PUT
} from '../utils/request.js'


// 分页查询诉求
/**
 * @param {Number} current 页编码(第几页)
 * @param {Number} size 每页的条数	
 * @param {String} longitude 经度
 * @param {String} latitude 纬度
 */
export async function pageQueryAppeal(data) {
	
	return await POST(`/wjAppeal/pageQueryAppeal`, data, 'json')
	
}