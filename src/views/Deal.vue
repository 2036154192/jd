<template>
    <div id="deal">
        <title-vue title="确认订单" />
        <div class="main">
            <div class="site">
                <div class="top">
                    <h3>{{userData.username}}</h3>
                    <h3>{{getJJ}}</h3>
                </div>
                <div class="center">
                    <div class="left">
                        <span>默认</span><span>{{userData.site[0]}}</span>
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-a-gengduoiconbeifen2"></use>
                        </svg>
                    </div>
                </div>
                <div class="bi"></div>
            </div>
            <div class="commodity">
                <div class="center"
                v-for="item in dealList" :key="item.commodityID">
                    <div class="title">
                        {{item.shopName}}
                    </div>
                    <div class="product_info">
                        <div class="left">
                            <img :src="item.commodityImg" alt="">
                        </div>
                        <div class="right">
                            <span>
                                {{item.commodityName}}
                            </span>
                            <div>
                                <p>￥{{item.commodityPrice}}</p>
                                <p>×{{item.commodityNumber}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="peisong">
                        <div class="left">
                            配送
                        </div>
                        <div class="right">
                            <div>
                                <p>京东快递</p>
                                <p>xxx</p>
                            </div>
                            <div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-a-gengduoiconbeifen2"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="huihuan">
                        <div class="left">
                            <span>退换无忧</span>
                            <span>可获1次免费上门取件服务</span>
                        </div>
                        <div class="right">
                            <span>￥0.60</span>
                            <input type="checkbox" v-model="thwy" @change="thwyBtn">
                        </div>
                    </div>
                </div>
            </div>
            <div class="zongji">
                <div v-for="item in zhognjiList" :key="item.name">
                    <div class="left">
                        {{item.name}}
                    </div>
                    <div class="right">
                        <div class="text" :style="{color:item.money?'red':'#666'}">{{item.money ?item.text+item.money : '无可用'}}</div>
                        <div class="fuhao">
                            <svg class="icon" aria-hidden="true" v-if="item.fuhao">
                                <use xlink:href="#icon-a-gengduoiconbeifen2"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="fuqian">
                    <div>
                        <span>总计：</span><span>￥{{getZJ}}</span>
                    </div>
                </div>
            </div>
            <div class="btn">
                <div class="hdfk">
                    货到付款
                </div>
                <div class="zxzf">
                    在线支付
                </div>
            </div>
            <div class="logo">
                <img src="data:image/png;base64,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" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import { computed, reactive, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex'
import TitleVue from '../components/Title.vue'
import { onMounted } from '@vue/runtime-core';

export default {
    name:'Deal',
    components:{
        TitleVue,
    },
    setup(props) {
        const sotre = useStore();
        const state = reactive({
            userData:{
                site:[]
            },
            dealList:{},
            zhognjiList:[],
            zongji:0,
            thwy:false
        })

        sotre.state.shoppings = JSON.parse(localStorage.dealS)
        sotre.state.commodity = JSON.parse(localStorage.dealC)

        onMounted(()=>{
            state.dealList = sotre.getters.getDealList;
            state.userData = sotre.state.user.userData;
            let mondy = 0
            for (let i = 0; i < state.dealList.length; i++) {
                mondy += parseFloat(state.dealList[i].commodityPrice)
            }
            state.zhognjiList.push(
                {name:'商品总额',money:mondy,fuhao:false,text:''},
                {name:'运费',money:'免运费',fuhao:false,text:''},
                {name:'立减',money:100.00,fuhao:false,text:'-￥'},
                {name:'优惠券',money:20.00,fuhao:true,text:'-￥'},
                {name:'礼品卡',money:null,fuhao:true,text:''},
                {name:'红包',money:null,fuhao:true,text:''},
            )
        })

        let dsfds = state.zongji;
        function thwyBtn(){
            if(state.thwy){
                state.zongji+= 0.6;
                state.zhognjiList.push({
                    name:'退还无忧',money:0.6,fuhao:false,text:'+￥'
                })
            }else{
                state.zongji = dsfds;
                state.zhognjiList.pop()
            }
        }

        let getZJ = computed(()=>{
            return state.zongji-200-20;
        })

        let getJJ = computed(()=>{
            let phone = state.userData.phone;
            if(phone != undefined){
                phone = phone.substr(0,3)+"****"+phone.substr(7)
            }
            return phone;
        })

        return{
            ...toRefs(state),
            getJJ,
            getZJ,
            thwyBtn
        }
    }
}
</script>
<style lang="less" scoped>
    #deal{
        width: 7.5rem;
        .main{
            width: 100%;
            position: absolute;
            margin-top: 0.9rem;
            >div{
                border-radius: 0.2rem;
                background-color: #fff;
                width: calc(100% - 0.4rem);
                padding: 0.3rem 0.2rem;
            }
            .site{
                position: relative;
                .top{
                    display: flex;
                    >h3:first-child{
                        margin-right: 0.2rem;
                    }
                }
                .center{
                    margin-top: 0.2rem;
                    display: flex;
                    justify-content: space-between;
                   .left{
                       >span:first-child{
                           padding:  0 0.05rem;
                           color: red;
                           display: inline-block;
                           border:1px solid orangered;
                       }
                       >span:last-child{
                           color: #666;
                           margin-left: 0.2rem;
                       }
                   } 
                }
                .bi{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0.1rem;
                    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAKBAMAAACOO0tGAAADKGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0OUMzQjk3MDdCN0UxMUU3OTU0RUNEMTc2QjkwQ0E5RiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0OUMzQjk2RjdCN0UxMUU3OTU0RUNEMTc2QjkwQ0E5RiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5QzNCOTZCN0I3RTExRTc5NTRFQ0QxNzZCOTBDQTlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ5QzNCOTZDN0I3RTExRTc5NTRFQ0QxNzZCOTBDQTlGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0eIU2AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAqUExURf///+xtbYu16Ozz/J3B7PjDw+57e/Dm7dDh9vvd3fGNjbjS8vSmpv7w8DaDKA4AAABTSURBVCjPY2CAAFZB7CAAKs/QpIQVaMDkJ2LXLwOTZ8auX2kDVJ43EbsBC2AGmGDXrwKT58KuX+wCTIETdgOcYfIHsRsgCZPnxuEDg9EgpEYQAgAe+zkdH+NPmAAAAABJRU5ErkJggg==');
                    background-size: 1.5rem;
                }
            }
            .commodity{
                margin-top: 0.2rem;
                .center{
                    .title{
                        font-weight: 900;
                        margin-bottom: 0.2rem;
                        font-size: 0.34rem;
                    }
                    .product_info{
                        display: flex;
                        .left{
                            width: 4rem;
                            >img{
                                width: 100%;
                            }
                        }
                        .right{
                            margin-left: 0.2rem;
                            span{
                                font-size: 0.31rem;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 3;
                                overflow: hidden;
                            }
                            >div{
                                display: flex;
                                justify-content: space-between;
                                padding: 0.2rem;
                                padding-bottom: 0;
                                >p:first-child{
                                    color: red;
                                    font-size: 0.35rem;
                                }
                                >p:last-child{
                                    color: #666;
                                }
                            }
                        }
                    }
                    .peisong{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0.1rem 0;
                        .right{
                            display: flex;
                            >p:last-child{
                                color: #666;
                            }
                        }
                    }
                    .huihuan{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0.1rem 0;
                        .left{
                            >span:last-child{
                                margin-left: 0.1rem;
                                color: #666;
                            }
                        }
                        .right{
                            color: red;
                            span{
                                margin-right: 0.1rem;
                                font-size: 0.33rem;
                            }
                        }
                    }
                }
            }
            .zongji{
                margin-top: 0.2rem;
                padding-bottom: 0;
                overflow: hidden;
                >div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 0.3rem;
                    .right{
                        display: flex;
                        .text{
                            color: #666;
                        }
                        .fuhao{
                            width: 0.5rem;
                            .icon{
                                width: 0.4rem;
                                height: 0.4rem;
                            }
                        }
                    }
                }
                .fuqian{
                    float: right;
                    >div{
                        margin-right: .3rem;
                        font-size: 0.36rem;
                        >span:last-child{
                            color: red;
                        }
                    }
                }
            }
            .btn{
                margin-top: 0.2rem;
                >div{
                    text-align: center;
                    padding: 0.2rem;
                    color: #fff;
                    border-radius: 0.5rem;
                }
                .hdfk{
                    background-color: #bbebe9;
                }
                .zxzf{
                    margin-top: 0.2rem;
                    background-color: #3884ff;
                }
            }
            .logo{
                background-color: #eee;
                text-align: center;
            }
        }
    }
</style>