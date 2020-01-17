<template>
  <div class="nabar">
    <div>
      <img :src="infoList" alt="" style="width: 100%;height: 100%">
    </div>
      这是销售卡片的人
     <div class="btn">
        <span>立即购票</span>
      </div>
    </div>

</template>
<script>
  import  api from  '../api/index'
  export  default{
    data(){
      return {
        infoList: []
      }
    },
    created(){
      var num = this.$route.query.cont

      console.log(num);
      var that = this;
      api.getFilmDetail(num, function (res) {

        that.infoList = res.data.film.cover.origin
        console.log(that.infoList)
      })
    }
  }
</script>
<style lang="less">
  .nabar {
    margin-top: 12rem;
    text-align: center;
  }


  .btn {
    margin: 0 auto;
    width: 20rem;
    height: 10rem;
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #fe8233;
    line-height: 10rem;


  span {
    color: white;
    font-size: 3rem;

  }

  }


</style>
