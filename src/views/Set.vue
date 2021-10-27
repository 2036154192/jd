<!--
    avator: "http://www.xxx.com/upload/xxx.png"
phone: "17681089791"
site: ['上海市浦东新区尚学堂']
token: "e10adc3949ba59abbe56e057f20f883e"
userId: 1
username: "zhangsan"
-->
<template>
    <div id="set">
        <title-vue title="用户设置" />
        <div class="main">
            <div class="my">
                <p>管理我的账户</p>
                <div class="center">
                    <div class="img">
                        <img :src="userData.avator" alt="">
                    </div>
                    <div class="name">
                        <p>{{userData.username}}</p>
                        <p>用户名：{{userData.username}}</p>
                    </div>
                    <div class="title">
                        当前登录
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="lists"
                v-for="(item) in list" :key="item.id">
                    <div class="item"
                    v-for="char in item.items" :key="char.name">
                        <div class="left">
                            {{char.name}}
                        </div>
                        <div class="right">
                            <div>{{char.text}}</div>
                            <div>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-a-gengduoiconbeifen2"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn">
                <div>
                    意见反馈
                </div>
                <div>
                    京东客户端
                </div>
                <div @click="logOut">
                    退出登录
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import TitleVue from '../components/Title.vue'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name:"Set",
    components:{
        TitleVue
    },
    setup(props) {
        let state = reactive({
            userData:{},
            list:[
                {   id:'1',
                    items:[
                        {name:'收货地址管理',text:"管理我的地址"}
                    ]
                },
                {   id:'2',
                    items:[
                        {name:'账户与安全',text:"密码/实名认证管理"},
                        {name:'京东支付密码',text:"去设置"},
                        {name:'隐私设置',text:""}
                    ]
                },
                {   id:'3',
                    items:[
                        {name:'联系客服',text:"即时解答用户疑难"},
                        {name:'切换站点',text:""}
                    ]
                }
            ]
        })    
        const store = useStore()
        const router = useRouter()

        onMounted(()=>{
            state.userData = store.state.user.userData;
            console.log(state.userData);
        })

        function logOut(){
            store.state.user.idState = false;
            store.state.user.data = {};
            localStorage.userData = {};
            router.push({name:"Home"})
        }

        return{
            ...toRefs(state),
            logOut
        }
    }
}
</script>
<style lang="less" scoped>
    #set{
        width: 7.5rem;
        .main{
            position: absolute;
            width: 100%;
            margin-top: 0.9rem;
            .my{
                background-color: #fff;
                padding: 0.2rem 0.3rem;
                >p{
                    font-size: 0.33rem;
                    margin-bottom: 0.2rem;
                }
                .center{
                    display: flex;
                    position: relative;
                    border: 1px solid orangered;
                    border-radius: 0.2rem;
                    padding: 0.2rem;
                    background-color: #FFF0F5;
                    .img{
                        width: 1rem;
                        height: 1rem;
                        border-radius: 50%;
                        overflow: hidden;
                        margin-right: 0.2rem;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .name{
                        >p:last-child{
                            margin-top: 0.1rem;
                            color: #666;
                        }
                    }
                    .title{
                        position: absolute;
                        right: 0;
                        top: 0;
                        color:red;
                        background-color: pink;
                        border-radius: 0.2rem;
                        padding: 0.1rem;
                    }
                }
            }
            .list{
                margin-top: 0.2rem;
                .lists{
                    background-color: #fff;
                    margin-bottom: 0.2rem;
                    border-radius: 0.1rem;
                    .item{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0.22rem;
                        border-bottom: 1px solid #eee;
                        .right{
                            display: flex;
                            align-items: center;
                            font-size: 0.25rem;
                            color: #666;
                            .icon{
                                width: 0.3rem;
                                height: 0.3rem;
                            }    
                        }
                    }
                }
            }
            .btn{
                margin-top: 0.2rem;
                display: flex;
                justify-content: space-around;
                color: #666;
                >div{
                    padding: 0.2rem;
                }
            }
        }
    }
</style>