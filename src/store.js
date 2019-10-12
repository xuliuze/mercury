import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList:[
      {id:1,text:'作战记录'},
      {id:2,text:'单位信息管理'},
      {id:3,text:'消防队管理'},
      {id:4,text:'消防车管理'},
      {id:5,text:'公告列表'},
      {id:6,text:'角色管理'},
      {id:7,text:'用户管理'},
    ]
  },
  getters:{
    navOption(state){

    }
  },
  mutations: {

  },
  actions: {

  }
})
