<template>
    <div id="my">
        <Title title="我的"/>
        <div class="main">
            <div class="top">
                <div class="top1">
                    <div class="left">
                        <div class="img">
                            <img :src="userData.img" alt="">
                        </div>
                        <div class="name">
                            <span>{{userData.name}}</span>
                        </div>
                    </div>
                    <div class="right" @click="$router.push({name:'Set'})">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shezhi"></use>
                        </svg>
                    </div>
                </div>
                <div class="top2">
                    <div class="spsc">
                        <p>{{userData.commodityCollect}}</p>
                        <span>商品收藏</span>
                    </div>
                    <div class="dpsc">
                        <p>{{userData.storeCollect}}</p>
                        <span>店铺收藏</span>
                    </div>
                    <div class="wdzj">
                        <p>{{userData.myFootprint}}</p>
                        <span>我的足迹</span>
                    </div>
                </div>
                <div class="top3">
                    <div class="left">
                        <span>PLUS</span>
                        <span>|</span>
                        <span>免费使用立领1张运费券</span>
                    </div>
                    <div class="right">
                        <span>0元使用></span>
                    </div>
                </div>
            </div>
            <div class="mainList">
                <div class="list1">
                    <div class="item1">
                        <div>
                        <img src="https://img12.360buyimg.com/img/s60x60_jfs/t1/125209/17/7530/933/5f16524bE43b4a5f7/71971b102d1fcbc5.png" alt="">
                        </div>
                        <p>待付款</p>
                    </div>
                    <div class="item1">
                        <div>
                        <img src="https://img12.360buyimg.com/img/s120x120_jfs/t1/123660/33/7797/4674/5f1804aeE308173db/b392f9ce63eb8490.png" alt="">
                        </div>
                        <p>待收货</p>
                    </div>
                    <div class="item1">
                        <div>
                        <img src="https://img12.360buyimg.com/img/s60x60_jfs/t1/120478/38/7592/2211/5f165256E02190e99/1491d4cb340074bb.png" alt="">
                        </div>
                        <p>退还/售后</p>
                    </div>
                    <div class="item1">
                        <div>
                        <img src="https://img12.360buyimg.com/img/s60x60_jfs/t1/145618/2/3439/692/5f16525eE30cd2db1/3ab434ec2686a256.png" alt="">
                        </div>
                        <p>全部订单</p>
                    </div>
                </div>
                 <div class="list1">
                    <div class="item1">
                        <div>
                        <p>{{userData.discountCoupon}}</p>
                        </div>
                        <p>优惠券</p>
                    </div>
                    <div class="item1">
                        <div>
                        <p class="tt">开通有礼</p>
                        </div>
                        <p>白天</p>
                    </div>
                    <div class="item1">
                        <div>
                        <p>{{userData.BeijingBean}}</p>
                        </div>
                        <p>京豆</p>
                    </div>
                    <div class="item1">
                        <div>
                            <p>{{userData.redPacket}}</p>
                        </div>
                        <p>红包</p>
                    </div>
                    <div class="item1">
                        <div>
                            <img src="https://img12.360buyimg.com/img/s60x62_jfs/t1/124603/26/7654/1293/5f16621fE5203989a/ac40297eb801ec8d.png" alt="">
                        </div>
                        <p>我的资金</p>
                    </div>
                </div>
            </div>
            <data class="main-gj">
                <h3>工具与服务</h3>
                <div class="list">
                    <div class="item">
                        <img src="https://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp" alt="">
                        <p>客户服务</p>
                    </div>
                    <div class="item">
                        <img src="https://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp" alt="">
                        <p>客户服务</p>
                    </div>
                    <div class="item">
                        <img src="https://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp" alt="">
                        <p>客户服务</p>
                    </div>
                    <div class="item">
                        <img src="https://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp" alt="">
                        <p>客户服务</p>
                    </div>
                    <div class="item">
                        <img src="https://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp" alt="">
                        <p>客户服务</p>
                    </div>
                 </div>
            </data>
        </div>
        <footer-vue xuanzhe="4" />
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
import FooterVue from '../components/Footer.vue'
import Title from '../components/Title.vue'
import { useStore } from 'vuex'

export default {
    name:'My',
    components:{
        FooterVue,
        Title
    },
    setup(props){
        const store = useStore()
        
        let userData = reactive({
            name:store.state.user.userData.username,
            img:store.state.user.userData.avator,
            commodityCollect:0,
            storeCollect:0,
            myFootprint:0,
            discountCoupon:0,
            BeijingBean:0,
            redPacket:0
        })

        return{
            userData
        }
    }
}
</script>
<style lang="less" scoped>
@font-size:0.2rem;
    #my{
        width: 7.5rem;
        .main{
            position: absolute;
            margin-top: 0.9rem;
            width: 100%;
           .top{
               width: 100%;
               background: url(https://img12.360buyimg.com/img/s1500x886_jfs/t1/115726/22/13102/240974/5f18fb83Ee40e230b/d4f2a67087fd443a.png)
               no-repeat scroll 0 0/cover;;
               .top1{
                  display: flex; 
                  justify-content: space-between;
                  align-items: center;
                  margin: 0 0.3rem;
                  padding: 0.2rem 0;
                  .left{
                      display: flex;
                      .img{
                          width: 1.2rem;
                          border-radius: 50%;
                          overflow: hidden;
                          img{
                              width: 100%;
                          }
                      }
                      .name{
                          margin-left: 0.3rem;
                          color: #fff;
                          font-weight: 800;
                          font-size: 0.38rem;
                      }
                  }
                  .right{
                      .icon{
                          fill: #fff;
                      }
                  }
               }
               .top2{
                   color: #fff;
                   display: flex;
                   justify-content: space-around;
                   text-align: center;
                   padding-bottom: 0.2rem;
                   >div{
                       p{
                           margin-bottom: 0.1rem;
                           font-weight: 800;
                           font-size: 0.35rem;
                       }
                   }
               }
               .top3{
                   margin: 0 0.3rem;
                   color: #ffe678;
                   display: flex;
                   padding: 0.3rem 0;
                   justify-content: space-between;
                   background: url(https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png)
                   no-repeat scroll 0 0/cover;
                   >div{
                       margin:0 0.2rem;
                   }
                   .left{
                       >span:nth-child(2){
                           margin: 0 0.1rem;
                       }
                   }
                   .right{
                       background-color:orangered;
                       color: #fff;
                       padding: 0.1rem 0.2rem;
                       font-size: 0.2rem;
                       border-radius: 0.5rem;
                   }
               }
           }
           .mainList{
               position: relative;
               top: -0.2rem;
               .list1{
                   display: flex;
                   justify-content: space-around;
                   text-align: center;
                   background-color: #fff;
                   border-radius: 0.3rem;
                   padding: 0.3rem 0;
                   margin-bottom: 0.4rem;
                   .item1{
                       >div{
                           display: inline-block;
                           width: 0.6rem;
                           >img{
                               width: 100%;
                           }
                           >p{
                               font-size: 0.4rem;
                           }
                           .tt{
                               font-size: 0.1rem;
                           }
                       }
                   }
               }
           }
           .main-gj{
               width: 100%;
               position: absolute;
                background-color: #fff;
                border-radius: 0.3rem;
                padding: 0.3rem 0;
                h3{
                    margin-left: 0.3rem;
                }
                .list{
                    display: grid;
                    grid-template-columns: repeat(4,25%);
                    .item{
                        text-align: center;
                        margin: 0.2rem 0;
                        img{
                            width: 1rem;
                        }
                    }
                }
           }
        }
    }
</style>