<template>
 <div class="box" v-scroll="getMore">
   <div class="navba">
     <input type="text" value="正在热映" class="hotStating" :class="{on:addOn}" @click="toogleinfo">
     <input type="text" value="即将热映" class="comeStating" :class="{on:!addOn}" @click="toogleinfo">
   </div>
    <div class="content_hotPlay" v-show="addOn">
      <div v-for="item in nowList">
        <img :src="item.cover.origin" alt="">
      </div>
    </div>
    <div class="content_comeSoon" v-show="!addOn">
      <div v-for="item in comingList">
        <img :src="item.cover.origin" alt="">
      </div>
    </div>
 </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import tool  from '../common/common'
 export default{
   data(){
     return{
        addOn:true,


     }
   },
   methods:{
     toogleinfo(){
       this.addOn=!this.addOn;
       this.addClose=!this.addClose;
     },
     getMore:function (el) {
       if(document.body.scrollTop+window.innerHeight>=el.clientHeight-100){
         if(this.addOn){
           this.$store.dispatch('getNowPlayList')
         }
         else {
           this.$store.dispatch('getComeSoonList')
         }
       }
     }

   },
  created(){
   document.body.scrollTop=0;

   if(this.nowList.length==0){
       this.$store.dispatch('getNowPlayList')
    }
    if(this.comingList.length==0){
      this.$store.dispatch('getComeSoonList')
    }

   },
   /*   computed:{
    ...mapGetters([
    'getBannerList',
    'getNowPlaying',
    'getComeSoon'
    ])
    }*/ computed: mapGetters({
     nowList:'getNowPlayList',
     comingList:'getComeSoonList'
   }),
 }
</script>
<style lang="less">
  .box{
     .navba{
         margin-top:12rem;
         display:flex;
        .hotStating{
          box-sizing: border-box;
          font-size: 5rem;
          color: slategrey;
          width: 50%;
          height: 10rem;
          text-align: center;
          justify-content: flex-start;
          border-bottom:2px solid orangered ;
        }
        .comeStating{
          box-sizing: border-box;
          font-size: 5rem;
          color: slategrey;
          width: 50%;
          text-align: center;
          height: 10rem;
          justify-content: flex-end;

        }
        .on{

            color: green;
            border-bottom:5px solid red ;
        }
     }
  }
</style>
