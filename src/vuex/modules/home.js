import * as types from '../types'
import axios from 'axios'
const state = {
   routerValue: []
}

const mutations = {
  [types.GET_ROUTE_VALUE_ARR_MUTATION] (state, res) {
    state.routerValue = res
    console.log(state.routerValue, '暗示健康的123')
  }
}


const actions = {
  [types.GET_ROUTE_VALUE_ARR_ACTION]: ({commit}, params) =>{
    return new Promise ((resolve, reject)=>{
      axios.get('/static/index.json').then(res=>{
        commit(types.GET_ROUTE_VALUE_ARR_MUTATION, res.data)
        resolve(res)
      }).catch(res =>{
        console.log(res, '的时间里123')
        reject(res)
      })
    })

  }
}

export default {
  state,
  actions,
  mutations
}

