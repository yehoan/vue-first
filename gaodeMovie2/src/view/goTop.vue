<template>
    <i class="font" v-show="show" @click="goTop">&#xe61c;</i>
</template>
<script type="text/ecmascript-6">
  import  tool from '../common/common'
 export  default{
     data(){
         return{
             show:false
         }
     },
     created(){
   /*   window.addEventListener('scroll', function () {
         console.log(tool.getScrollTop())
         if (tool.getScrollTop() > 100) {
           this.show = true;
         }
       })*/
     /*   window.addEventListener('scroll',function () {
            console.log(tool);
            if(tool.getScollTop>100){

                this.show=true;
            }
             else {
              this.show=false;
            }
        })*/
      window.onscroll=(e)=>{
          if(tool.getScrollTop()>100){
              this.show=true;
          }
      }
     },
     beforeDestory(){
         window.onscroll=null;
     },
     methods:{
         goTop(){
             document.body.scrollTop=0;
             this.show=false;
         }
     }

 }
</script>
<style lang="less" scoped>
  @font-face {
    font-family: 'cont';  /* project id 262717 */
    src: url('//at.alicdn.com/t/font_uissnzu5an7gy14i.eot');
    src: url('//at.alicdn.com/t/font_uissnzu5an7gy14i.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_uissnzu5an7gy14i.woff') format('woff'),
    url('//at.alicdn.com/t/font_uissnzu5an7gy14i.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_uissnzu5an7gy14i.svg#iconfont') format('svg');
  }



  .font {
    font-family: "cont";
    font-size: 5rem;
    position: fixed;
    bottom: 8rem;
    right: 1rem;
    z-index: 9999;
    color: #68c59b;
    display: inline-block;
    width: 10rem;
    height: 3rem;
  }



</style>
