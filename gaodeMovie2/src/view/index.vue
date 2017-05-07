<template>
  <div id="home">
    <!-- //轮播图部分-->
    <div class="banner">
      <swiper class="banner-swiper">
        <swiper-slide class="slide" v-for="item in banner">
          <a target="_blank" :href="item.url">
            <img class="banner" :src="item.imageUrl" alt="">
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <!--//电影主题部分-->
    <div class="movie">
      <div class="movie-item">
        <div v-for="item in nowplay" class="movie-item-list">
          <img class="hot_movie" :src="item.cover.origin" alt="">
          <div class="movie-info">
            <p class="movieName">{{item.name}}</p>
            <span class="sellNum">{{item.cinemaCount}}家电影院正在热播</span> <span
            class="watchNum">{{item.watchCount}}观众观看</span>
            <span class="gradeNum">{{item.grade}}</span>
          </div>
        </div>
      </div>
      <div class="more-button">
        <span><router-link to="/film/more">更多热映电影</router-link></span>
      </div>
      <div class="movie-item">
        <div v-for="info in coming" class="movie-item-list">
          <img class="hot_movie" :src="info.cover.origin" alt="">
          <div class="movie-info">
          <span class="movieName">{{info.name}}</span>
          </div>
        </div>
        <div class="more-button">
          <span><router-link to="/film">更多即将上映电影</router-link></span>
        </div>
      </div>
    </div>
    <goTop></goTop>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {mapGetters} from 'vuex'
  import  goTop from './goTop.vue'
  export default{
    data(){
      return {
        swiperOption: {
          autoplay: 3000,
          autoHeight: true,
        }
      }
    },

   created() {
      if (this.banner.length == 0) {
        this.$store.dispatch('getBannerList')
      }
      if (this.nowplay.length == 0) {
        this.$store.dispatch('getNowPlaying')

      }
      if (this.coming.length == 0) {

        this.$store.dispatch('getComingSoon')

      }

    },
    components: {
      swiper,
      swiperSlide,
      goTop
    },
    /*   computed:{
     ...mapGetters([
     'getBannerList',
     'getNowPlaying',
     'getComeSoon'
     ])
     }*/
      computed: mapGetters({
      banner: 'getBannerList',
      nowplay: 'getNowPlaying',
      coming: 'getComingSoon'
    }),

  }
  //    computed:{
  //      ...mapGetters([
  //        banner:'getBannerList',
  //        nowPlay:'getNowPlaying',
  //        coming:'getComingSoon'
  //      ])
  //    }
  //  }
</script>
<style lang="less">
  #home {

  .banner {
    width: 100%;
    margin-top: 6rem;
  }

  .movie {
    background-color: #ebebeb;

  .movie-item {

    box-sizing: border-box;
    padding: 5rem 5rem;

  .movie-item-list {
    margin: 3rem 0;

  .hot_movie {
    width: 100%;
    height: 100%;
  }

  }

  }

  }

  .movie-info {
    padding: 0 5rem;
    background: white;
    height: 8rem;

  .movieName {
    font-size: 3rem;
    font-weight: bold;
  }

  .sellNum {
    font-size: 2rem;
  }

  .watchNum {
    font-size: 2rem;
  }

  .gradeNum {
    float: right;
    font-size: 5rem;
    color: deeppink;

  &
  ::after {
    content: "";
    display: block;
    clear: both;
  }

  }
  }
  /*//更多*/
  .more-button{
    width: 100%;
    text-align: center;
    height: 8rem;

    span{
      display: inline-block;
      width: 45rem;
       line-height: 6rem;
      font-size: 4rem;
      border: 1px solid silver;
      border-radius: 15px;
      a{
        text-decoration: none;
        color: black;
        opacity: .8;
      }
    }
  }
 /* //未来*/

  }
</style>
