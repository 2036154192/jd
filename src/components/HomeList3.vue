<template>
    <div id="HomeList3">
        <div class="item" v-for="(item, index) in list" :key="index"
        @click="$router.push(`/product/${item.id}`)">
            <img :src="item.url" alt="">
            <div>
                <p>{{item.text}}</p>
                <div>
                    <span>{{item.price}}</span><span>{{item.buy}}</span>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'

export default {
    name:'HomeList3',
    setup(props){
        let list = reactive([
            {
                id:'001',
                url:'https://gw.alicdn.com/bao/uploaded/i1/36834036/TB2T2QmdbFkpuFjy1XcXXclapXa_!!36834036.jpg_320x320q90.jpg_.webp',
                text:'鸡蛋造型器2件套水煮蛋大变身儿童米饭团寿司便当工具DIY馒头模具',
                price:'￥9.9',
                buy:'10万人已购买'
            },
            {
                id:'001',
                url:'https://gw.alicdn.com/bao/uploaded/i1/36834036/TB2T2QmdbFkpuFjy1XcXXclapXa_!!36834036.jpg_320x320q90.jpg_.webp',
                text:'鸡蛋造型器2件套水煮蛋大变身儿童米饭团寿司便当工具DIY馒头模具',
                price:'￥9.9',
                buy:'10万人已购买'
            },
            {
                id:'001',
                url:'https://gw.alicdn.com/bao/uploaded/i1/36834036/TB2T2QmdbFkpuFjy1XcXXclapXa_!!36834036.jpg_320x320q90.jpg_.webp',
                text:'鸡蛋造型器2件套水煮蛋大变身儿童米饭团寿司便当工具DIY馒头模具',
                price:'￥9.9',
                buy:'10万人已购买'
            },
            {
                id:'001',
                url:'https://gw.alicdn.com/bao/uploaded/i1/36834036/TB2T2QmdbFkpuFjy1XcXXclapXa_!!36834036.jpg_320x320q90.jpg_.webp',
                text:'鸡蛋造型器2件套水煮蛋大变身儿童米饭团寿司便当工具DIY馒头模具',
                price:'￥9.9',
                buy:'10万人已购买'
            }
        ])

        var throttle = function(delay) {  
            let bodyHeight = document.body.scrollHeight;
            let windowHeight = document.documentElement.clientHeight;
            let top = document.documentElement.scrollTop;          
    　　    var prev = Date.now();            
            return function() {                
        　　　　var now = Date.now();                
        　　　　if (now - prev >= delay && top + windowHeight > bodyHeight - 100) {  
                    for (let i = 0; i < 4; i++) {
                            list.push({
                                id:'001',
                                url:'https://gw.alicdn.com/bao/uploaded/i1/36834036/TB2T2QmdbFkpuFjy1XcXXclapXa_!!36834036.jpg_320x320q90.jpg_.webp',
                                text:'鸡蛋造型器2件套水煮蛋大变身儿童米饭团寿司便当工具DIY馒头模具',
                                price:'￥9.9',
                                buy:'10万人已购买'
                            })
                        }                  
        　　　　　　prev = Date.now();                
        　　　　}            
        　　}        
        }
        
         //监测是否到页面底部
        window.addEventListener("scroll",throttle(1000));

        return{
            list,
        }
    }
}
</script>
<style lang="less" scoped>
    #HomeList3{
        display: grid;
        width: 6.9rem;
        padding: 0 0.3rem;
        grid-template-columns: 48% 48%;
        grid-column-gap: 0.3rem;
        grid-row-gap: 0.3rem;
        margin-bottom: 1rem;
        .item{
            background-color: #fff;
            height: 4rem;
            >img{
                width: 100%;
                height: calc(100% / 2);
            }
            >div{
                margin-top: 0.2rem;
                padding: 0.2rem;
                >p{
                    height: 0.8rem;
                    overflow: hidden;
                }
                >div{
                    margin-top: 0.2rem;
                    >span:first-child{
                        float: left;
                        color: red;
                    }
                    >span:last-child{
                        float: right;
                    }
                }
            } 
        }
    }
</style>