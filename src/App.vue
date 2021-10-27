<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name:"App",
  setup(props) {
    //判断是否登录
    const userData = localStorage.userData ? JSON.parse(localStorage.userData) : false;
    const store = useStore();

    if(userData){
      store.commit('setUser',userData);
      store.dispatch('getGWC');
    }
  }
}
</script>

<style lang="less">
  .icon{
    font-size: 0.4rem;
    width: 0.6rem;
    height: 0.6rem;
  }
</style>
