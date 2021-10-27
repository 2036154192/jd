<template>
    <div id="search">
        <div class="searchTop">
             <div class="left" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-zuojiantou"></use>
                </svg>
            </div>
            <div class="center">
                <div class="center-text">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                    <input type="text" v-model.trim="search"
                    @keydown.enter="goSearch">
                </div>
            </div>
            <div class="right" @click="goSearch">
                搜索
            </div>
        </div>
        <div class="main">
            <div class="history" v-show="history.length > 0">
                <div class="top">
                    <div>
                        <h3>搜索历史</h3>
                    </div>
                    <div @click="deleteAll">
                        清空
                    </div>
                </div>
                <div class="center">
                    <div  v-for="(item,index) in history" :key="index"
                    @click="goInput(item)">
                        {{item}}
                    </div>
                </div>
            </div>
            <div class="hot">
                <div class="top">
                    <div>
                        <h3>热门搜索</h3>
                    </div>
                    <div v-html="hotShow ? '隐藏' : '显示'"
                    @click="hotShow = !hotShow"></div>
                </div>
                <div class="center" v-show="hotShow">
                    <div v-for="item in list" :key="item"
                    @click="goInput(item)">
                        {{item}}
                    </div>
                </div>
                <div class="noHot" v-show="!hotShow">
                    以隐藏热门搜索
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { getData } from '../api'
export default {
  name:'Search',
  setup(props) {
    let state = reactive({
        list:[],
        hotShow:true,
        history:[],
        search:null
    })

    state.history = localStorage.historysv
     ? JSON.parse(localStorage.historys) : [];

    onMounted(async ()=>{
        try {
            const list = (await getData('/hotsearch')).data;
            if(list.code != 200) alert('状态码错误')
            state.list = list.data.item;
        } catch (error) {
            alert(error)
        }
    })

    function goSearch(){
        if(state.search != null){
            state.history.forEach((item,index) =>{
                if(state.search == item) state.history.splice(index,1);
            })
            if(state.history.length >=10) state.history.pop();
            state.history.unshift(state.search);
            localStorage.historys = JSON.stringify(state.history);
        }
    }

    function deleteAll(){
        state.history = [];
        localStorage.historys = JSON.stringify(state.history)
    }

    function goInput(text){
        state.search = text;
    }

    return{
        ...toRefs(state),
        goSearch,
        deleteAll,
        goInput
    }
  }  
}
</script>
<style lang="less" scoped>
    #search{
        width: 7.5rem;
        .searchTop{
            display: flex;
            justify-content: space-between;
            width: calc(100% - 0.4rem);
            padding: 0.1rem 0.2rem;
            align-items: center;
            background-color: #fff;
            .left{
                padding-right: 0.2rem;
                .icon{
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }
            .center{
                flex: 1;
                background-color: #eee;
                margin-right: 0.2rem;
                border-radius: 0.3rem;
                padding: 0.05rem 0;
                .center-text{
                    .icon{
                        height: 0.25rem;
                        width: 0.25rem;
                        margin-left: 0.1rem;
                    }
                    input{
                        width: 85%;
                        position: relative;
                        bottom: 0.05rem;
                        margin-left: 0.1rem;
                        background-color: #eee;
                    }
                }
            }
            .right{
                background-color:tomato;
                padding: 0.1rem 0.2rem;
                font-size: 0.2rem;
                border-radius: 0.3rem;
                color: #fff;
            }
        }
        .main{
            position: absolute;
            margin-top: 0.02rem;
            width: 100%;
            height: calc(100% - 0.74rem);
            background-color: #fff;
            .hot{
                .top{
                    padding: 0.2rem;
                    display: flex;
                    justify-content: space-between;
                }
                .center{
                    display: flex;
                    flex-wrap: wrap;
                    >div{
                        padding: 0.1rem 0.2rem;
                        background-color: #eee;
                        border-radius: 0.3rem;
                        margin: 0 0.2rem 0.2rem 0.2rem;
                        font-size: 0.25rem;
                    }
                }
                .noHot{
                    text-align: center;
                    margin-top: 0.3rem;
                }
            }
            .history{
                 .top{
                    padding: 0.2rem;
                    display: flex;
                    justify-content: space-between;
                }
                .center{
                    display: flex;
                    flex-wrap: wrap;
                    >div{
                        padding: 0.1rem 0.2rem;
                        background-color: #eee;
                        border-radius: 0.3rem;
                        margin: 0 0.2rem 0.2rem 0.2rem;
                        font-size: 0.25rem;
                    }
                }
            }
        }
    }
</style>