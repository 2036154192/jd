<template>
  <div class="home">
    <TopNav />
    <Swiper />
    <HomeList />
    <home-list-2 />
    <HomeList3Vue/>
    <footer-vue xuanzhe="1" />
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'   
import Swiper from '../components/Swiper.vue'
import HomeList from '../components/HomeList.vue'
import HomeList2 from '../components/HomeList2.vue'
import HomeList3Vue from '../components/HomeList3.vue'
import FooterVue from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    TopNav,
    Swiper,
    HomeList,
    HomeList2,
    HomeList2,
    HomeList3Vue,
    FooterVue
  },
  
  
}
</script>

<style lang="less">
  .home{
    position: relative;
  }
</style>