<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-taobao"></use>
            </svg>
        </div>
        <div class="topRight" @click="$router.push({name:'Search'})">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
    name:'TopNav',

}
</script>
<style lang="less" scoped>
    .topNav{
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        z-index: 2;
        width: 7.5rem;
        align-items: center;
        height: .8rem;
        background-color: orange;
        .icon{
            fill: #fff;
        }
        .topLeft{
            margin-left: 0.2rem;
        }
        .topRight{
            position: relative;
            flex: 1;
            margin-left: 0.2rem;
            background: #FF4E22;
            text-align: center;
            height: 0.5rem;
            margin-right: 0.4rem;
            border-radius: 0.1rem;
            .icon{
                position: absolute;
                top: 0.02rem;
                width: 0.4rem;
                height: 0.4rem;
            }
        }
    }
</style>