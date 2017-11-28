import axios from 'axios'
export default {
  // 日志列表
  list () {
    return axios.get('http://qianjia.space:8000/logs')
  },
  // 新增日志
  add (model) {
    return axios.post('http://qianjia.space:8000/logs', model)
  },
  // 修改
  modify (id, model){
    return axios.put('http://qianjia.space:8000/logs/' + id, model)
  },
  // 删除
  delete (id) {
    return axios.delete('http://qianjia.space:8000/logs/' + id)
  }
}