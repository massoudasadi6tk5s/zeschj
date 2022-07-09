



/**
 * 转换日期 适配 ios   返回 ：时间类型
 * @param {String} 后端传过来的字符日期 
 */
export const formatIOSReturnDate = n => {

  let date = n.replace(/-/g, '/');
  date = date.replace(/T/g, ' ')
  let newDate = new Date(date)

  return newDate

}


/**
 * 转换日期 适配 ios   返回 ：01-23 11:25
 * @param {String} 后端传过来的字符日期 
 */
export const formatIOSYearMonthDayHoursMinutes = n => {

  let date = n.replace(/-/g, '/');
  date = date.replace(/T/g, ' ')
  let newDate = new Date(date)
  // 年
  let year = newDate.getFullYear()
  // 月
  let month = newDate.getMonth() + 1
  // 日
  let day = newDate.getDate()
  // 时
  let hours = formatNumber(newDate.getHours())
  // 分
  let minutes = formatNumber(newDate.getMinutes())

  return `${year}年${month}月${day}日`

}



// loading加载提示
export const showLoading = () => {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中...',
      mask: true,
      success(res) {
        console.log('显示loading')
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

// 关闭loading
export const hideLoading = () => {
  return new Promise((resolve) => {
    uni.hideLoading()
    console.log('隐藏loading')
    resolve()
  })
}


/**
 * 获取经纬度位置
 */
export const getLocation = () => {

  return new Promise((resolve, reject) => {
    uni.getLocation({
      type: 'gcj02',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        let location = {
          latitude,
          longitude
        }

        resolve(location)


      }
    })

  })

}


/**
 * 获取用户code
 */
export const getUserCode = () => {

  return new Promise((resolve, reject) => {

    uni.login({
      success(res) {
        if (res.code) {
          resolve(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
          reject()
        }
      }
    })

  })

}



/**
 * 小数加
 */
export const accAdd = (arg1, arg2) => {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}

/**
 * 小数减法
 */
export const Subtr = (arg1, arg2) => {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}



/**
 * 判断是否还有下一页
 * @param {Number} total 总数量
 * @param {Number} current 当前页码
 * @param {Number} size 每页数量
 */
export const isExistNextPage = (total, current, size) => {

  return new Promise((resolve, reject) => {

    let currentNumber = current * size
    if (currentNumber < total) {
      resolve(true)
    }
    resolve(false)

  })

}