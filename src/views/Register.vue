<template>
    <div id="Register">
        <div class="logo">
            <h1>手机号注册</h1>
            <p>亲，欢迎注册淘宝账号</p>
        </div>
        <phone-input-vue  @huoqu-yzm="yanzhengma" />
        <div class="btn" :class="{xs:is}" @click="zhuche">
            同意并注册
        </div>
        <div class="text">
            已阅读并同意以下协议<a href="https://terms.alicdn.com/legal-agreement/terms/TD/TD201609301342_19559.html\" target="_blank\" >淘宝平台服务协议</a>、<a href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html\" target="_blank\" >隐私权政策</a>、<a href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201811121436_80276.html\" target="_blank\" >法律声明</a>、<a href="https://render.alipay.com/p/f/fd-jm7jym6r/alipay/multi-agreement.html\" target="_blank\" >支付宝及客户端服务协议</a>
        </div>
    </div>
    <toast-vue ref="RefChilde" />
</template>
<script>
import { ref } from '@vue/reactivity'
import PhoneInputVue from '../components/PhoneInput.vue'
import ToastVue from '../components/Toast.vue'
import {postData} from '../api/index'
import { useRouter } from 'vue-router'

export default {
    name:'Register',
    components:{
        PhoneInputVue,
        ToastVue
    },
    setup(props) {

        let is = ref(false);
        let phone = ref();
        const RefChilde = ref();
        const router = useRouter();

        function yanzhengma(is,phone){
            is.value = is;     
            phone.value = phone;
        }

        async function zhuche(){
            if(is.value){
                try {
                    const isOK = await postData('/verificationcode',{phone:phone.value});
                    if(isOK){
                        RefChilde.value.toastShow('注册成功');
                        router.push({name:'Login'})
                    }else{
                        alert('网路出现问题，注册失败')
                    }
                } catch (error) {
                    alert(error)
                }
            }else{
                RefChilde.value.toastShow('验证码不正确');
            }
        }

        return{
            yanzhengma,
            is,
            zhuche,
            RefChilde
        }
    }
}
</script>
<style lang="less" scoped>
    #Register{
         position: fixed;
        width: 7.1rem;
        padding: 0.2rem;
        height: 100%;
        background-color: #fff;
        .logo{
            margin: 1rem 0;
            h1{
                margin-bottom: 0.1rem;
            }
            p{
                color: #666;
            }
        }
        .btn{
            width: 100%;
            border-radius: 0.5rem;
            padding: 0.2rem 0;
            margin-top: 1rem;
            opacity: 0.5;
            text-align: center;
            background-color: orange;
            color: #fff;
        }
        .text{
            margin-top: 0.5rem;
            color: #666;
            a{
                color: orange;
            }
        }
    }
    .xs{
        opacity: 1 !important;
    }
</style>