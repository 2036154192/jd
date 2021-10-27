<template>
    <div id="HomeList">
        <div class="swiper-container" id="HomeList-swiper">
            <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jinbi"></use>
                            </svg>
                            <p>金币庄园</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-meishi"></use>
                            </svg>
                            <p>美食</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-icon-test"></use>
                            </svg>
                            <p>吃货</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-fenlei"></use>
                            </svg>
                            <p>分类</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shenghuofuwu"></use>
                            </svg>
                            <p>生活服务</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xingqiu"></use>
                            </svg>
                            <p>星球</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xueshengchaoshixiaofei"></use>
                            </svg>
                            <p>超市</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xianyu"></use>
                            </svg>
                            <p>咸鱼</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-huabanfuben"></use>
                            </svg>
                            <p>付款</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-eliaomocopy"></use>
                            </svg>
                            <p>饿了么</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jipiaojiudianyuding"></use>
                            </svg>
                            <p>机票酒店</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jiankang"></use>
                            </svg>
                            <p>健康</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-baokuan"></use>
                            </svg>
                            <p>爆款</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-ic_tianmao"></use>
                            </svg>
                            <p>天猫</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-huiyuan"></use>
                            </svg>
                            <p>会员</p>
                        </div>
                        <div class="item">
                             <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-paimai"></use>
                            </svg>
                            <p>拍卖</p>
                        </div>
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
import {onMounted} from 'vue'

export default {
    name:'HomeList',
    setup(props) {
        //mounted生命钩子
        onMounted(async () => {
            var mySwiper = new Swiper('#HomeList-swiper',  {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
            });
        })
    },
    
}
</script>
<style lang="less">
#HomeList{
    width: 7.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;
    background-color: #fff;
.swiper-container{
  width: 100%;
  height: 3rem;
  .swiper-wrapper{
      width: 100%;
      .swiper-slide{
            display: grid;
            grid-template-columns: repeat(4,auto);
            //行
            grid-template-rows: repeat(2,auto);
            text-align: center;
            .imte{
                
            }
      }
  }
  .swiper-pagination{
      bottom: -0.08rem;
  }
}

}
.swiper-pagination-bullet-active{
    background-color: orangered !important;
}
</style>