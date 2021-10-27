<template>
    <div id="GWC">
        <title-vue :title="titleData"/>
        <div class="main">
            <div class="noList" v-if="show">
                <img src="https://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
                <p>购物车为空</p>
            </div>
            <div class="list" v-else>
                <div class="item" v-for="(item,i) in shoppings[0]" :key="item.storeId">
                    <div class="top">
                        <input type="checkbox" 
                        v-model="commodity[0][i][item.storeId]['ckeck'+item.storeId]"
                        @change.stop="titleChage(i,item)">
                        <span>{{item.sotreName}}</span>
                    </div>
                    <div class="center" v-for="(list,index) in item.commoditys" :key="list.id">
                        <div>
                            <div class="left">
                            <input type="checkbox" 
                            v-model="commodity[0][i][item.storeId].commoditys[index]['ckeck'+item.commoditys[index].id]"
                            @change.stop="listChage(i,item)">
                        </div>
                        <div class="img">
                            <img :src="list.img" alt="">
                        </div>
                        <div class="right">
                            <span>{{list.name}}</span>
                            <div>
                                <p><span>￥</span>{{list.price}}</p>
                                <div class="number">
                                    <span @click="jian(i,index,item)">-</span>
                                    <input type="number" v-model="commodity[0][i][item.storeId].commoditys[index]['number'+item.commoditys[index].id]" />
                                    <span @click="jia(i,index,item)">+</span>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="buttom" @click="deleteList(item,index,i,list)">
                            删除
                        </div>
                    </div>
                </div>
            </div>
            <div class="number2">
                <div class="left">
                    <input type="checkbox" name="全选"  @change.stop="quanxuan()" v-model="quanxuanB">
                    <span>全选</span>
                </div>
                <div class="numText">
                    <span>总计：</span>
                    <span>￥{{money}}</span>
                </div>
                <div class="btn" :class="{co:piece}"
                @click="goDeal">
                    <span>去结算({{piece}}件)</span>
                </div>
            </div>
        </div>
        <footer-vue xuanzhe="2" />
    </div>
    <toast-vue ref="toast"/>
</template>
<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
import FooterVue from '../components/Footer.vue'
import TitleVue from '../components/Title.vue'
import ToastVue from '../components/Toast.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name:'GWC',
    components:{
        FooterVue,
        TitleVue,
        ToastVue
    },
    setup(props,context) {
        let titleData = ref('购物车');
        const toast = ref();
        const store = useStore();
        const router = useRouter();
       
        function jia(i,index,item){
            let data={
                i:i,
                index:index,
                item:item,
                fuhao:1
            }
            store.commit('jia',data)
        }

        function jian(i,index,item){
            let data={
                i:i,
                index:index,
                item:item,
                fuhao:-1
            }
            if(store.state.commodity[0][i][item.storeId].commoditys[index]['number'+item.commoditys[index].id]>0){
                store.commit('jia',data)
            }else{
                toast.value.toastShow('无法为负数');
            }
        }

        function titleChage(i,item){
            
            let data={
                i:i,
                item:item
            }
            store.commit('titleChage',data)
        }

        function listChage(i,item){
            let data={
                i:i,
                item:item
            }
            store.commit('listChage',data)
        }

        function quanxuan(){
            store.commit('quanxuan')
        }

        function deleteList(item,index,i){
            let data={
                item:item,
                index:index,
                i:i
            }
            store.commit('deleteList',data);
        }

        function goDeal(){
            if ( store.getters.getDealList.length>0){
                 router.push({name:"Deal"})
                 localStorage.dealC = JSON.stringify(store.state.commodity)
                 localStorage.dealS = JSON.stringify(store.state.shoppings)
            }else{
                toast.value.toastShow('请选择商品');
            }
        }

        return{
            quanxuan,
            titleData,
            ...toRefs(store.state),
            jia,
            jian,
            toast,
            titleChage,
            listChage,
            deleteList,
            goDeal
        }
    }
}
</script>
<style lang="less" scoped>
    #GWC{
        width: 7.5rem;
        .main{
            position: absolute;
            margin-top: 0.9rem;
            width: 100%;
            text-align: center;
            .noList{
                margin-top: 30%;
                img{
                    width: 40%;
                }
                font-size: 0.4rem;
            }
            .list{
                width: 100%;
                .item{
                    width: 7.1rem;
                    background-color: #fff;
                    margin-top: 0.3rem;
                    padding: 0.2rem;
                    border-radius: 0.2rem;
                    .top{
                        display: flex;
                        align-items: center;
                        margin-bottom: 0.2rem;
                        span{
                            margin-left: 0.3rem;
                            font-weight: 900;
                        }
                    }
                    .center{
                        >div:first-child{
                            display: flex;
                            .left{
                                margin-right: .3rem;
                            }
                            .img{
                                width: 50%;
                                img{
                                    width: 100%;
                                }
                            }
                            .right{
                                >span{
                                height: 0.8rem;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                                margin: 0.2rem;
                                }
                                div{
                                    display: flex;
                                    justify-content: space-between;
                                    p{
                                        margin-left: 0.3rem;
                                        color: red;
                                    }
                                    .number{
                                        margin-right: 0.5rem;
                                        span{
                                            display: inline-block;
                                            padding: 0 0.2rem;
                                            text-align: center;
                                        }
                                        input{
                                            width: 0.5rem;
                                        }
                                    }
                                }
                            }
                        }
                        .buttom{
                            text-align: right;
                            margin-right: 0.3rem;
                        }
                    }
                    
                }
            }
            .number2{
                display: flex;
                width: 100%;
                height: 0.6rem;
                padding: 0.2rem 0.3rem;
                background-color: #fff;
                position: fixed;
                align-items: center;
                left: 0;
                justify-content: space-around;
                bottom: 1.1rem;
                .left{
                    input{
                        margin-left:-0.6rem;
                    }
                    span{
                        margin-left: .1rem;
                    }
                }
                .numText{
                    >span:last-child{
                        font-weight: 900;
                    }
                }
                .btn{
                    padding: 0.2rem 0.3rem;
                    border-radius: 0.5rem;
                    background-color: red;
                    color: #fff;
                    opacity: 0.5;
                }
               
            }
        }
    }
    .co{
        opacity:1 !important;
    }
</style>