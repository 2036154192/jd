<template>
    <div id="order">
        <div class="top">
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuojiantou"></use>
                </svg>
            </div>
            <div @click="$router.push({name:'Search'})">
               <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <span>{{tishi}}</span> 
            </div>
        </div>
        <div class="main">
            <div class="leftList">
                <ul>
                    <li v-for="(item,index) in classifyData" :key="item.name"
                    :class="{bg:index == xianzhe}"
                    @click="xianzhe = index">
                        {{item.name}}
                    </li>
                </ul>
            </div>
            <div class="right">
                <div class="title"
                v-for="(item) in classifyData[xianzhe].list" :key="item.title">
                    <p>{{item.title}}</p>
                    <div class="center">
                        <div class="item" v-for="items in item.item" :key="items">
                            <img :src="items.img" alt="">
                            <p>{{items.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-vue xuanzhe="3" />
    </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import FooterVue from '../components/Footer.vue'
import { onMounted } from '@vue/runtime-core'
import { getData } from '../api'

export default {
    name:'Order',
    components:{
        FooterVue
    },
    setup(props) {
        let state = reactive({
            tishi:'小金的最爱',
            classifyData:[
                {
                    list:[
                        {
                            item:[],
                            title:''
                        }
                    ],
                    name:''
                }
            ],
            xianzhe:0
        })

        onMounted(async ()=>{
            try {  
                const classifyData = await getData('/classify')
                if(classifyData.data.code != 200) alert('状态码错误')
                state.classifyData = classifyData.data.data;
                console.log(state.classifyData[state.xianzhe].list);
            } catch (error) {
                alert(error)
            }
        })

        return{
            ...toRefs(state)
        }
    }
}
</script>
<style lang="less" scoped>
    #order{
        width: 7.5rem;
        .top{
            position: fixed;
            display: flex;
            z-index: 5;
            width: calc(100% - 0.4rem);
            background-color: #fff;
            align-items: center;
            padding: 0.1rem 0.2rem;
            .icon{
                width: 0.4rem;
                height: 0.4rem;
            }
            >div{
                margin-left: 0.2rem;
            }
            >div:last-child{
                flex: 1;
                background-color: #eee;
                padding: 0.1rem 0.2rem;
                border-radius: 0.5rem;
                .icon{
                    width: 0.25rem;
                    height: 0.25rem;
                }
                span{
                    margin-left: 0.2rem;
                }
            }
        }
        .main{
            width: 100%;
            height: calc(100% - 1.8rem);
            position: absolute;
            margin-top: 0.8rem;
            display: flex;
            .leftList{
                ul{
                    height: 100%;
                    width: 100%;
                    overflow: scroll;
                    li{
                        padding: .2rem;
                    }
                    .bg{
                        background-color: #fff;
                    }
                }
            }
            .right{
                flex: 1;
                background-color: #fff;
                overflow: scroll;
                .title{
                    >p{
                        padding: 0.2rem;
                    }
                    .center{
                        display: grid;
                        grid-template-columns: repeat(3,33%);
                        .item{
                            text-align: center;
                            img{
                                width: 1.5rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>