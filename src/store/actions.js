import {postData} from '../api/index'

export default{
    async getGWC(context){
        try {
          let s = (await postData('/shopping')).data;
          if(s.code == 200){
              context.state.shoppings.push(s.data);
              context.state.show = context.state.shoppings.length <= 0;
              context.commit('setCommodity')
          }else{
               alert('状态码错误')
          }
        } catch (error) {
            alert(error)
        }
      }
}