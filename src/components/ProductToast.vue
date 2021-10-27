<template>
    <div class="bg" v-show="state.show"></div>
    <transition name="product">
        <div id="ProductToast" v-if="state.show">
            <div class="none"  @click="deleteAll"></div>
            <div class="center">
                <div class="gouwuche" v-if="is==1">
                    <div class="top">
                        <div class="img">
                            <img :src="state.productData.imgs[0].img" alt="">
                        </div>
                        <div class="center">
                            <p>￥{{state.productData.money}}</p>
                            <p><span>已选：</span>{{state.productData.sort[7]}}</p>
                        </div>
                    </div>
                    <div class="leibie">
                        <p>类别</p>
                        <div>
                            <div v-for="(item,index) in state.productData.sort" :key="item"
                            :class="{xuanzhong:index==7}">
                                {{item}}
                            </div>
                        </div>
                    </div>
                    <div class="number">
                        <div>
                            数量
                        </div>
                        <div>
                            <span @click="shuliang > 0 ? shuliang-- : shuliang">-</span>
                            <input type="number" v-model="shuliang">
                            <span @click="shuliang++">+</span>
                        </div>
                    </div>
                    <div class="btn" @click="tianjia">
                        确认
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { ref } from '@vue/reactivity'
import { onUpdated } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
    name:"ProductToast",
    props:['goData',"is","id"],
    setup(props,context) {
        let state = ref()
        state.value = props.goData
        let shuliang = ref(1)
        const store = useStore()

        onUpdated(() => {
            state.value = props.goData;
        })

        console.log(state.value.productData);
        function deleteAll(){
            context.emit('noShow');
        }

        function tianjia(){
            let data = {
                storeId:"1222",
                sotreName:"悯农优谷食品专营店",
                commoditys:{
                        id:props.id,
                        name:state.value.productData.title,
                        img:state.value.productData.imgs[0].img,
                        price:state.value.productData.money
                    }
                
            }
            store.commit('pushList',data);
            state.value.show = false;
        }

        return {
            state,
            deleteAll,
            shuliang,
            tianjia
        }
    }
}
</script>
<style lang="less" scoped>
    .product-enter-active{
        animation: atguigu 1s;
    }
    .product-leave-active{
        animation: atguigu 0.2s reverse;
    }
    @keyframes atguigu{
        from{
            transform: translateY(100%);
        }
        to{
            transform: translateY(0);
        }
    }

    .bg{
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    #ProductToast{
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 7.5rem;
        height: 100%;
        >div{
            position:absolute;
        }
        .none{
            top: 0;
            left: 0;
            width: 100%;
            height: calc(100% - 60% - 0.6rem);
        }
        .center{
            width: calc(100% - 0.6rem);
            padding: 0.3rem;
            height: 60%;
            left: 0;
            background-color: #fff;
            bottom: 0;
            .gouwuche{
                width: 100%;
                .top{
                    justify-content: space-around;
                    display: flex;
                    width: 100%;
                    align-items: flex-end;
                    .img{
                        width: 40%;
                        img{
                            width: 100%;
                        }
                    }
                    .center{
                        >p:first-child{
                            color: orangered;
                            font-size: 0.36rem;
                        }
                    }
                }
                .leibie{
                    >p{
                     color: #000;
                     margin-bottom: 0.2rem;
                    }
                    >div{
                        display: flex;
                        flex-wrap: wrap;
                        >div{
                            background-color:#eee;
                            padding: 0.1rem 0.2rem;
                            border-radius: 0.5rem;
                            margin: 0.1rem 0.2rem;
                            color: #000;
                        }
                        .xuanzhong{
                            background: #fcedeb;
                            border: 1px solid #f2270c;
                            font-size: 11px;
                            color: #f2270c;
                            font-weight: 700;
                        }
                    }
                }
                .number{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 0.2rem;
                    input{
                        width: 0.3rem;
                        margin: 0 0.3rem;
                        padding-left: 0.1rem;
                    }
                }
                .btn{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: calc(100% - 0.6rem);
                    padding: 0.3rem;
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    background-color: #f2270c;
                    color: #fff;
                    text-align: center;
                }
            }
        }
    }   
</style>