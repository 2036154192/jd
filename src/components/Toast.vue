<template>
    <div id="Toast" v-if="toastData">
        {{toastData}}
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    name:'Toast',
    setup(props) {
        
        let toastData = ref('');

        const toastShow = (newData)=>{
            toastData.value = newData;
            setTimeout(() => {
                toastData.value = '';
            }, 2000);
        }

        return{
            toastData,
            toastShow
        }
    }
}
</script>
<style lang="less" scoped>
    #Toast{
        position: fixed;
        z-index: 5;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        padding: 0.3rem;
        border-radius: 0.5rem;
    }
</style>