/*
 * Created by Administrator on 2017/4/17.*/
import api from '../../api'
import * as types from '../types'
//先定义状态
const state={
  nowPlayList:[],
  comeSoonList:[],
  nowPage:0,
  comingPage:0,
  getNowMore:true,
  getComingMore:true
}

const mutations={
  //获取现在播放的列表
 [types.FILM_GET_NOWPLAYING](state,res){
   state.nowPlayList=state.nowPlayList.concat(res.films)
   //根据current 和total 的关系判断 是否还有下一页
   //当current的数量大于total 的数量大于他的时候 那么getNowMore的状态为false
   state.getNowMore=res.page.current<res.page.total?true:false
 },
  //获取即将到来的列表
  [types.FILM_GET_COMINGSOON](state,res){
    state.comeSoonList=state.comeSoonList.concat(res.films)

    state.getComingMore=res.page.current<res.page.total?true:false
  },
  [types.FILE_NOWPLAYING_NUM](state){
    state.nowPage+=1
    state.getNowMore=false
  },
  [types.FILM_COMINGSOON_NUM](state){
    state.comingPage+=1
    state.getComingMore=false
  }
}
const getters={
  getNowPlayList:state=>state.nowPlayList,
  getComeSoonList:state=>state.comeSoonList,
}
const actions={
   //获取现在列表
   getNowPlayList:function ({commit}) {
     //只有等条件满足的时候才能 获取数据
     if(state.getNowMore){
       commit(types.FILE_NOWPLAYING_NUM);
       api.getNowPlayList(state.nowPage,function (res) {
         commit(types.FILM_GET_NOWPLAYING,res.data)
       })
     }

   },
   getComeSoonList:function ({commit}) {
     //同理
     if(state.getComingMore){
       //getComingMore 要有2个参数
       commit(types.FILM_COMINGSOON_NUM);
       api.getComingList(state.comingPage,function (res) {
        commit(types.FILM_GET_COMINGSOON,res.data)
       })
     }

   }
}
export  default{

  state,
  getters,
  mutations,
  actions
}

