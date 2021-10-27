import { createStore } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default createStore({
  state: {
    user:{
      idState:false,
      data:{}
    },
    shoppings:[],
    commodity:[],
    show:true,
    money:0,
    piece:0,
    quanxuanB:false,
  },
  getters,
  mutations,
  actions,
  modules: {
  }
})

