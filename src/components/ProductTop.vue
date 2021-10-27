<template>
  <div id="Title">
    <div class="left" @click="$router.go(-1)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <div class="right" @click="show = !show">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </div>
    <div class="list" v-show="show">
      <ul>
        <li @click="$router.push({name:'Home'})">首页</li>
        <li @click="$router.push({name:'Shopping'})">购物车</li>
        <li @click="$router.push({name:'Order'})">订单列表</li>
        <li @click="$router.push({name:'My'})">我的淘宝</li>
        <li @click="$router.push({name:'More'})">更多</li>
      </ul>
    </div>
  </div>
  <div class="max" @click="show = show ? !show : show"></div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  name: "ProductTop",
  setup(props) {
    let show = ref(false);

    return {
      show,
    };
  },
};
</script>
<style lang="less" scoped>
#Title {
  position: fixed;
  display: flex;
  z-index: 5;
  width: 6.9rem;
  height: 0.9rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  font-size: 0.34rem;
  .left,.right{
      background-color: #666;
      border-radius: 50%;
      width: 0.7rem;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
      .icon{
          margin-top: 0.05rem;
          fill: #fff;
      }
  }
  .list {
    background-color: #fff;
    border-radius: 0.2rem;
    position: absolute;
    right: 0;
    top: 1rem;
    text-align: center;
    li {
      padding: 0.12rem 0.4rem;
    }
  }
}
.max{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>