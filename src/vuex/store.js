import Vue from "vue"
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datab: []
   },
  mutations: {
   initPage: function (state, datab){
    axios.get('http://qianjia.space:8000/logs')
     .then((res) => {
       state.datab = res.data
     })
   }
 },
 actions: {
   initPage: function({commit}, datab){
     commit('initPage', datab)
   }
 }
})