<template>
<div>
  <div v-for="item in infoList">
    <img :src="item.bigPictureAddress" alt="">
  </div>

</div>
</template>
<script>
  import  api from  '../api/index'
 export  default{
      data(){
          return{
              infoList:[]
          }
      },
      created(){
        var num= this.$route.query.cont

        console.log(num);
        var that=this;
        api.getFilmDetail(num,function (res) {

           that.infoList=res.data.film.photos;
        })
      }
 }
</script>
<style lang="less">

</style>
