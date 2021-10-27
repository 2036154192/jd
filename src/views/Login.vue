<template>
  <div id="Login">
    <div class="logo">
      <img
        src="https://gw.alicdn.com/tfs/TB1puqzr6MZ7e4jSZFOXXX7epXa-160-160.png"
        alt=""
      />
    </div>
    <phone-input-vue @huoqu-yzm="yanzhengma" />
    <div class="enroll" @click="$router.push({ name: 'Register' })">
      免费注册
    </div>
    <div class="btn">
      <div class="login" @click="login">登录</div>
      <div class="IDLogin">账号密码登录</div>
    </div>
  </div>
  <toast-vue ref="RefChilde" />
</template>
<script>
import { reactive, ref } from '@vue/reactivity';
import PhoneInputVue from '../components/PhoneInput.vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import ToastVue from '../components/Toast.vue';
import {postData} from '../api/index'

export default {
    name:'Login',
    components:{
        PhoneInputVue,
        ToastVue
    },
    setup(props) {
        
        let is = ref();
        let phone = ref();
        const router = useRouter();
        const store = useStore();
        const RefChilde = ref();

        function yanzhengma(iss,phones){
            is.value = iss;
            phone.value = phones;
        }

        async function login(){
            if(is.value){
                try {
                    const userData = await postData('/login',{phone:phone.value})
                    let userdata = {
                        idState:true,
                        userData:userData.data.data.userInfo
                    }
                    localStorage.userData = JSON.stringify(userdata);
                    store.commit('setUser',userdata);
                    router.push({name:'Home'})
                } catch (error) {
                    alert(error);
                }
            }else{
               RefChilde.value.toastShow("验证码不正确");
            }
        }

        return{
            yanzhengma,
            login,
            RefChilde
        }

    }
}
</script>
<style lang="less" scoped>
#Login {
  position: fixed;
  width: 7.1rem;
  padding: 0.2rem;
  height: 100%;
  background-color: #fff;
  .logo {
    width: 2rem;
    margin: 0.5rem auto;
    > img {
      width: 100%;
    }
  }
  .enroll {
    margin: 0.3rem 0;
    color: #666;
  }
  .btn {
    width: 100%;
    > div {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 0.5rem;
      text-align: center;
      padding: 0.2rem 0;
      border-radius: 0.5rem;
    }
    .login {
      background-color: orangered;
      border: 1px solid orangered;
      color: #fff;
      margin-top: 0.5rem;
    }
    .IDLogin {
      border: 1px solid orangered;
      color: orangered;
    }
  }
}
</style>