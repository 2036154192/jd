<template>
    <div class="from">
        <div class="phone">
            <span>+86</span><input type="text" placeholder="请输入手机号" v-model.trim="phone">
        </div>
        <div class="verificationCode">
            <input type="text" placeholder="请输入验证码" v-model.trim="yzm" @blur="yzmhh"> 
            <span @click="huoqu">获取验证码</span>
        </div>
    </div>
    <toast-vue ref="RefChilde"/>
</template>
<script>
import { reactive, ref } from '@vue/reactivity'
import {postData} from '../api/index'
import ToastVue from './Toast.vue'

export default {
    name:'PhoneInput',
    components:{
        ToastVue
    },
    setup(props,context) {
       
       let phone = ref(null);
       let yzm = ref(null);
       let urlyzm = reactive({});
       const RefChilde = ref();

        function yzmhh(){
            context.emit('huoqu-yzm',yzm.value == urlyzm && urlyzm != null,phone = phone.value);
        }

        let zz = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
        async function huoqu(){
            if(zz.test(phone.value)){
                try {
                    const yzmm = await postData('/verificationcode',{phone:phone.value});
                    urlyzm = yzmm.data.data.verificationCode;
                    console.log(urlyzm);
                    RefChilde.value.toastShow(urlyzm);
                } catch (error) {
                    alert(error)
                }
            }else{
                RefChilde.value.toastShow('手机号码不正确');
            }
        }

       return{
           phone,
           yzm,
           yzmhh,
           huoqu,
           RefChilde
       }
       
    }
}
</script>
<style lang="less" scoped>
    .from{
            width: 6.9rem;
            font-size: 0.33rem;
            >div{
                width: 100%;
                border-bottom: 0.03rem solid orange;
                padding: 0.1rem;
                input{
                    padding-left: 0.05rem;
                }
            }
            .phone{
                display: flex;
                justify-content: space-around;
                width: 100%;
                span{
                    flex: 1;
                }
                input{
                    flex: 9;
                }
            }
            .verificationCode{
                display: flex;
                justify-content: space-around;
                width: 100%;
                margin-top: 0.5rem;
                span{
                    text-align: center;
                    flex: 3;
                    color: orange;
                }
                input{
                    flex: 7;
                }
            }
        }
</style>