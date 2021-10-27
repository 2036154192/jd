<template>
    <div id="swipercom">
        <div class="swiper-container" id="swiperIndex">
            <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item) in imgs" :key="item.bannerId">
                        <img :src="item.pic" alt="">
                    </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'; 
import {ref,onMounted} from 'vue'
import img1 from '@/assets/pexels-felix-mittermeier-957024.jpg'
import img2 from '@/assets/pexels-burst-374870.jpg'
import img3 from '@/assets/pexels-s-migaj-747964.jpg'

export default {
    name:'Swiper',
    setup(props) {
        //轮播图data数据
        let img=[
                {pic:img1},
                {pic:img2},
                {pic:img3},
                ]
        let imgs = ref(img)
        
        //mounted生命钩子
        onMounted(async () => {
            var mySwiper = new Swiper('#swiperIndex',  {
                loop: true, // 循环模式选项
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
            });
        })

        return{
            imgs
        }
    },
    
}
</script>
<style lang="less">
#swipercom{
    width: 7.5rem;
    margin-top: 0.8rem;

.swiper-container{
  width: 7.5rem;
  height: 2.82rem;
  border: none;
  border-radius: 0.1rem;
  background: #fff;
  .swiper-wrapper{
      .swiper-slide{
          >img{
              width: 100%;
              height: 100%;
          }
      }
  }
}

}
.swiper-pagination-bullet-active{
    background-color: orangered !important;
}
</style>