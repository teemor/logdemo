
import request from '@/api/api'
import * as type from '../mutationType'


const state = {
  datab: [],
  formdata: {
    user: '',
    content: '',
    date: '',
    summary: ''
  },
  modifyId: '',
  modifyModel: {}
}
const getters = {
  datab: state => state.datab
}
const mutations = {
  //修改列表数据状态
  [type.LIST_DATA](state, datalist) {
    state.datab = datalist
  },
  // 获取需要修改数据的id
  [type.MODIFY_ID](state, id) {
    state.modifyId = id
  },
  // 修改弹窗数据model
  [type.MODIFY_MODEL](state, modifyModel) {
    state.modifyModel = modifyModel
  }
}
const actions = {
  initPage: function ({ commit }) {
    request.list()
      .then((res) => {
        commit(type.LIST_DATA, res.data)
      })
  },
  addlogl: function ({ dispatch, commit}, dataa) {   
    request.add(dataa)
      .then((res) => {
        //新增成功后，dispatch分发重新拉取一下列表数据
        return dispatch('initPage')
      })
  },
  del: function ({ dispatch, commit} ,id) {
    request.delete(id)
    .then((res) => {
      return dispatch('initPage')
    })
  },
  editid: function({dispatch, commit}, id){
    commit(type.MODIFY_ID, id)
  },
  edit: function ({ dispatch, commit}, dataa){
    //请求修改的接口
    request.modify( state.modifyId,dataa)
    .then( res => {
      return dispatch('initPage')
    })
  }
}
export default ({
  state, getters, mutations, actions
})