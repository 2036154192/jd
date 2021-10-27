<template>
    <div id="product" class="product">
        <product-top-vue />
        <product-swiper-vue :imgs="state.productData.imgs"/>
        <div class="main">
            <div class="money">
                <div class="left">
                    <span>￥</span>
                    <span>{{state.productData.money}}</span>
                </div>
                <div class="right">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-qian"></use>
                        </svg>
                        <p>降价提醒</p>
                    </div>
                    <div>
                         <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        <p>收藏</p>
                    </div>
                </div>
            </div>
            <div class="title">
                {{state.productData.title}}
            </div>
            <div class="fuTitle">
                {{state.productData.fuTitle}}
            </div>
        </div>
        <div class="center">
            <div class="youhui">
                <div class="youhuiCenter">
                    <div class="left">
                        优惠
                    </div>
                    <div class="centers">
                        <div class="quan">
                            <span v-for="item in state.productData.discounts" :key="item">
                                {{item}}
                            </span>
                        </div>
                        <div class="manjian">
                            <span v-for="item in state.productData.MoneyOff" :key="item">
                                {{item}}
                            </span>
                        </div>
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo1"></use>
                        </svg>
                    </div>
                </div>
                <div class="baitao">
                    <div class="left">
                        白条
                    </div>
                    <div class="centers">
                        领立减60元优惠券
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo1"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="peizhi">
                <div class="yixuan">
                    <div class="left">
                        已选
                    </div>
                    <div class="centers">
                            {{state.productData.sort[7]}},{{state.quantity}}
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo1"></use>
                        </svg>
                    </div>
                </div>
                <div class="dizhi">
                    <div class="left">
                        地址
                    </div>
                    <div class="centers">
                            {{userData.site[0]}}
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo1"></use>
                        </svg>
                    </div>
                </div>
                 <div class="yunfei">
                    <div class="left">
                        运费
                    </div>
                    <div class="centers">
                        免运费
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gengduo1"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerP">
            <div class="left">
                <div>
                   <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dianpu"></use>
                    </svg>
                    <p>店铺</p> 
                </div>
                <div>
                   <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kefu"></use>
                    </svg>
                    <p>客服</p> 
                </div>
                <div @click="$router.push({name:'Shopping'})">
                   <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    <p>购物车</p> 
                </div>
            </div>
            <div class="right">
                <div @click="gouwuche">
                    加入购物车
                </div>
                <div>
                    立刻购买
                </div>
            </div>
        </div>
    </div>
    <product-toast-vue :goData="goData.state" :is="is"
    @noShow="noShowf" :id="id"/>
</template>
<script>
import { onMounted, reactive,ref } from 'vue';
import { useRoute } from 'vue-router';
import ProductSwiperVue from '../components/ProductSwiper.vue';
import ProductTopVue from '../components/ProductTop.vue';
import { postData } from '../api/index';
import { useStore } from 'vuex';
import ProductToastVue from '../components/ProductToast.vue';

export default {
    name:'Product',
    components:{
        ProductTopVue,
        ProductSwiperVue,
        ProductToastVue
    },
    setup(props,context) {
        const route = useRoute()
        const store = useStore();
        const id = route.params.id;
        let is = ref(0)
        let state = reactive({
            productData:{
                sort:[]
            },
            quantity:1,
            show:true
        })
        let goData = reactive({
            state:{
                productData:{
                sort:[]
                },
                quantity:1,
                show:false
            }
        });

        console.log(store.state.user.userData.site);

        onMounted(async() => {
            try {
                const a = (await postData('/product',{id:id})).data;
                state.productData = a.date;
            } catch (error) {
                alert(error)
            }
        })

        function gouwuche(){
            goData.state = state;
            is.value = 1
        }

        function noShowf(){
            goData.state = {
                show:false
            }
            is.value = 0
        }

        return{
           state,
           userData:store.state.user.userData,
           gouwuche,
           goData,
           noShowf,
           is,
           id
        }
    }
}
</script>
<style lang="less" scoped>
    .product{
        width: 7.5rem;
        .main{
            position: absolute;
            background-color: #fff;
            width: calc(100% - 0.6rem);
            padding: 0.2rem 0.3rem;
            .money{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{
                    color: orangered;
                    >span:last-child{
                        font-size: 0.4rem;
                    }
                }
                .right{
                    display: flex;
                        font-size: 0.2rem;
                    >div{
                        margin-right: 0.3rem;
                    }
                }
                .left,.right{
                    text-align: center;
                }
                .icon{
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }
            .title{
                margin-top: 0.2rem;
                color: #262626;
                font-size: 0.33rem;
            }
            .fuTitle{
                color: #666;
                font-size: 0.2rem;
                margin-top: 0.1rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }
        .center{
            position: absolute;
            width: 100%;
            margin-top: 3.2rem;
            >div{
                padding: 0.3rem;
                width: calc(100% - 0.6rem);
                background-color: #fff;
                border-radius: 0.2rem;
                margin-bottom: 0.2rem;
                >div{
                    display: flex;
                    justify-content: space-between;
                    .left{
                        color: #000;
                    }
                }
            }
            .youhui{
                .youhuiCenter{
                    .centers{
                        span{
                            margin: 0 0.1rem;
                            border: 1px solid orangered;
                            color: orangered;
                        }
                        >div:first-child{
                            margin-bottom: 0.12rem;
                        }
                    }
                }
                .baitao{
                    align-items: center;
                    margin-top: 0.2rem;
                }
            }
            .peizhi{
                .yixuan{
                    align-items: center;
                }
                .dizhi{
                    align-items: center;
                }
                .yunfei{
                    align-items: center;
                }
            }
        }
        .footerP{
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            background-color: #fff;
            justify-content: space-evenly;
            padding: 0.1rem 0;
            >div{
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                text-align: center;
                .icon{
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }
            .right{
                >div{
                    padding: .2rem 0.2rem;
                    color: #fff;
                    border-radius: 0.3rem;
                }
                >div:first-child{
                    background-color: orangered;
                }
                >div:last-child{
                    background-color: orange;
                }
            }
        }
    }
</style>