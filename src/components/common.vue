<template>
  <div id="box">
    <div class="navbar">
      <div class="navbar_left">
        <i class="navbar_tool" @click="showInfo">&#xe601;</i>
        <span class="navbar_title">卖座电影</span>
      </div>
      <div class="navbar_right">
        <span ><router-link  to="/cityList" class="navbar_location">深圳</router-link> </span>
        <i class="navbar_down">&#xe64c;</i>
        <i class="navbar_login">&#xe740;</i>
      </div>

    </div>

      <div class="routerList" :class="{show:showMenu}" @click="showInfo">
        <router-link to="/">首页 <i class="router_right">&#xe60e;</i></router-link>
        <router-link to="/film/:type">影片 <i class="router_right">&#xe60e;</i></router-link>
        <router-link to="/movieCenter">影院 <i class="router_right">&#xe60e;</i></router-link>
        <router-link to="/seller">商城 <i class="router_right">&#xe60e;</i></router-link>
        <router-link to="/my">我的 <i class="router_right">&#xe60e;</i></router-link>
        <router-link to="/sellCard">卖座卡 <i class="router_right">&#xe60e;</i></router-link>
      </div>

    <div class="mask" @click="showInfo" :class="{tell:showmask}"></div>

    <router-view></router-view>

  </div>

</template>
<script>
  import api from '../api/index'

  export default{
    data(){
      return {
          showmask:true,
          showMenu:false
    }
    },

    methods: {
      showInfo(){
        this.showMenu=!this.showMenu;
        this.showmask=!this.showmask;
      }
    }
  }
</script>
<style lang="less">

  #box {
    width: 100%;

  .navbar {
    width: 100%;
    height: 12rem;
    background-color: #282828;
    line-height: 12rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    align-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  /*//左边导航栏*/
  .navbar_left {
    webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;

    font-size: 4rem;
    margin: 0 2rem;

  .navbar_tool {
    font-family: "cont";
    display: inline-block;
    font-size: 6rem;
    color: #8f8f8f;
    line-height: 7rem;
    margin: 0 2rem;
    font-style: normal;
  }

  .navbar_title {
    color: #efefef;
    font-size: 4rem;
    margin: 0 2rem;
    line-height: 7rem;
  }

  }
  /*//右边导航栏*/
  .navbar_right {




  .navbar_location {
    font-size: 4rem;
    color: #998775;
    text-decoration: none;

  }

  .navbar_down {
    font-family: "cont";
    font-size: 4rem;
    color: #efefef;
    font-style: normal;
    line-height: 7rem;
  }

  .navbar_login {
    font-family: 'cont';
    font-size: 4rem;
    color: #efefef;
    font-style: normal;
    line-height: 7rem;
    margin: 0 5rem;
  }

  }
  /* //跳转条*/

  }
  }

  /*遮罩层*/
  .mask {
    width: 100%;
    height: 100%;
    background-color:#282828;
    opacity: .5;
    position: fixed;
    z-index: 999;
    top: 7.7%;
    left: 0;
     &.tell{
        background-color: white;
        opacity: 0.05;
        display: none;
      }
  }
  .routerList {
    position: fixed;
    top:7.9%;
    left:-50%;
    z-index: 9999;
    height:100%;
    width: 50%;
    opacity: 0.8;
    transition: 1s;
    background-color: #282828;

    &.show{
      transform: translateX(100%);
      transition: 2s;
     }

  a {
    display: inline-block;
    width: 100%;
    height: 10rem;
    line-height: 10rem;
    color: #898989;
    font-size: 4rem;
    padding: 0 0 0 3rem;
    text-decoration: none;

  .router_right {
    font-style: normal;
    font-family: 'cont';
    float: right;
    margin: 0 4rem 0 0;
  }

  &::after {
    content: "";
    display: block;
    clear: both;
  }

  }

  }


  @font-face {
    font-family: 'cont';  /* project id 262717 */
    src: url('//at.alicdn.com/t/font_q5pgbh394j7fd2t9.eot');
    src: url('//at.alicdn.com/t/font_q5pgbh394j7fd2t9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_q5pgbh394j7fd2t9.woff') format('woff'),
    url('//at.alicdn.com/t/font_q5pgbh394j7fd2t9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_q5pgbh394j7fd2t9.svg#iconfont') format('svg');
  }
  .show{
    transform: translateX(-50%);
  }
</style>
