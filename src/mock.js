const Mock = require('mockjs')
const Random = Mock.Random

// 定义mock数据通用函数
function MockData(url, data) {
  Mock.mock(url, {
    code: 200,
    msg: 'success',
    rs: data
  })
}

// 数据数组
function dataArr(count) {
  let data = []
  for (let i = 0; i < count; i++) {
    data.push(
      {
        startDate: '@date', // 随机生成一个时间字符串
        endDate: new Date(Random.date()).getTime(), // 随机生成一个时间戳
        id: i, // id始终从0-10
        title: `优惠活动 - ${i}`,
        'type|1-4': 1,
        value: `满1000减免 99`,
      }
    )
  }
  return data
}

// 模拟数据
MockData('/home', dataArr(10))

