<template>
  <div>
      <ul>
        <li v-for="(list,index) in routerValue" :key="index">{{list.name}}</li>
      </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed:{
      ...mapState({
         routerValue: state => state.home.routerValue
      })
    },
    mounted(){
      this.getValue()
    },
    methods:{
      getValue(){
        this.$store.dispatch('getRouteValueArr.action').then(res=>{

        })
      }
    }
}
</script>