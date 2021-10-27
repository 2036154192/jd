<template>
    <div id="swipercom2">
        <div class="swiper-container" id="swiperProduct">
            <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in state.myings" :key="index">
                        <img :src="item.img" alt="">
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
import {onMounted, toRefs ,onUpdated, reactive} from 'vue'

export default {
    name:'ProductSwiper',
    props:['imgs'],
    setup(props) {
        let state = reactive({
            myings:[]
        })
        //mounted生命钩子
        onMounted(async () => {
            var mySwiper = new Swiper('#swiperProduct',  {
                observer:true,
                observeParents:true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                    type:'fraction'
                },
            });
        })

        onUpdated(() => {
            state.myings = [];
            state.myings = props.imgs;
        })

        return{
            state
        }
    },
}
</script>
<style lang="less">
#swipercom2{
    width: 7.5rem;
.swiper-container{
  width: 7.5rem;
  height: 6rem;
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
  .swiper-pagination{
      left: 5.8rem;
      width: 1.2rem;
      color: #fff;
      background-color: #666;
      opacity: 0.5;
      border-radius:0.2rem
  }
}

}
.swiper-pagination-bullet-active{
    background-color: orangered !important;
}
</style>