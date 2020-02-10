import * as types from '../types'
import axios from 'axios'
const state = {
   routerValue: []
}

const mutations = {
  [types.GET_ROUTE_VALUE_ARR_MUTATION] (state, res) {
    state.routerValue = res
  }
}


const actions = {
  [types.GET_ROUTE_VALUE_ARR_ACTION]: ({commit}, params) =>{
    axios.get('/static/index.json').then(res=>{
      commit(types.GET_ROUTE_VALUE_ARR_MUTATION, res.data)
    })
  }
}

export default {
  state,
  actions,
  mutations
}

