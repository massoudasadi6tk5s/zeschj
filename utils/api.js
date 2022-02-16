import {GET, POST, DELETE, PUT} from './http';

function femaleNameApi(params) {
  GET('/project/projectInfos', params)
}

export default { // 暴露接口
  femaleNameApi
}