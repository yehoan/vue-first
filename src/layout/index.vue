<template>
  <div>
      <ul>
        <li v-for="(list,index) in routerView" :key="index"></li>
      </ul>
  </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
      routerView: state => state.home.routerValue
    },
    mounted(){
      this.getValue()
    },
    methods:{
      getValue(){
        this.$store.dispatch('getRouteValueArr.action')
      }
    }
}
</script>