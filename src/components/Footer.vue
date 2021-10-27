<template>
    <div id="Footer">
        <div class="home" 
        v-for="(item,index) in footerData" :key="index"
        :class="{zhong:xz==index+1}" @click="$router.push({name:item.go})">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
            </svg>
            <p>{{item.text}}</p>
        </div>
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
export default {
    name:'Footer',
    props:['xuanzhe'],
    setup(props) {
        
        let xz = ref(props.xuanzhe);

        let footerData = reactive([
                {icon:'#icon-shouye-shouye',go:'Home',text:'首页'},
                {icon:'#icon-gouwuchekong',go:'Shopping',text:'购物车'},
                {icon:'#icon-dingdan',go:'Order',text:'订单列表'},
                {icon:'#icon-wode',go:'My',text:'我的淘宝'},
                {icon:'#icon-gengduo',go:'More',text:'更多'},
            ])

        return{
            xz,
            footerData
        }

    }
}
</script>
<style lang="less" scoped>
    #Footer{
        z-index: 2;
        position: fixed;
        height: 1rem;
        bottom: 0;
        left: 0;
        width: 7.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        text-align: center;
        font-size: 0.2rem;
        .icon{
            width: 0.5rem;
            height: 0.5rem;
        }
    }
    .zhong{
        .icon{
            fill: orange;
        }
        color: orange;
    }
</style>