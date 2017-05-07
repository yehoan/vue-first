/**
 * Created by Administrator on 2017/4/13.
 */
import api from '../../api'
import * as types from '../types'
const state={
    banner:[],
    nowPlay:[],
    comeSoon:[]
}
const actions={
   //获取banner
   getBannerList:function ({commit}) {
     //loading 状态
    // commit(types.COM_LOADING_STATUS,true);

      api.getBannerList(function (res) {
        //获取成功以后他的loading 状态为false
         commit(types.HOME_GET_BANNER_LIST,res.data);
       //  commit(types.COM_LOADING_STATUS,false);
      })
   },
    //获取热映
     getNowPlaying:function ({commit}) {
    //   commit(types.COM_LOADING_STATUS,true)
       api.getNowPlaying(function (res) {
          commit(types.HOME_GET_NOWPLAYING_LIST,res.data)
     //     commit(types.COM_LOADING_STATUS,false)
       })
     },
     //获取即将上线
     getComingSoon:function ({commit}) {
    //   commit(types.COM_LOADING_STATUS,true)
       api.getComingSoon(function (res) {
          commit(types.HOME_GET_COMINGSOON_LIST,res.data)
     //     commit(types.COM_LOADING_STATUS,false)
       })
     }
}
const getters={
   getBannerList:state=>state.banner,
   getNowPlaying:state=>state.nowPlay,
   getComingSoon:state=>state.comeSoon,
}
const mutations={

   [types.HOME_GET_BANNER_LIST](state,res){
     //广告
     state.banner=res.billboards
   },
   [types.HOME_GET_NOWPLAYING_LIST](state,res){
     //现在播放
     state.nowPlay=res.films
   },
   [types.HOME_GET_COMINGSOON_LIST](state,res){
     //马上要来的
     state.comeSoon=res.films
   }
}
export  default{
  state,
  actions,
  getters,
  mutations
}
