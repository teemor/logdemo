import Vue from 'vue'

export default {
  /**
   * 消息提示框
   * 新增、修改、删除、审核、驳回等操作调用该提示框
   * @param type 只有success和warning
   **/
  setMessage: function (type, message) {
    Vue.prototype.$message({
      message: message,
      type: type,
      duration: 1000
    })
  }
}
