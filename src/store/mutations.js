//购物车
function zhongji(state) {
    state.money = 0
    state.piece = 0
    for (let i = 0; i < state.commodity[0].length; i++) {
        for (let index = 0; index < state.commodity[0][i][state.shoppings[0][i].storeId].commoditys.length; index++) {
            if (state.commodity[0][i][state.shoppings[0][i].storeId].commoditys[index]['ckeck' + state.shoppings[0][i].commoditys[index].id]) {
                state.piece += state.commodity[0][i][state.shoppings[0][i].storeId].commoditys[index]['number' + state.shoppings[0][i].commoditys[index].id]
                state.money += accMul(state.shoppings[0][i].commoditys[index].price, state.commodity[0][i][state.shoppings[0][i].storeId].commoditys[index]['number' + state.shoppings[0][i].commoditys[index].id])
            }
        }
    }
}
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
function quanxuanyanzheng(state) {
    for (let i = 0; i < state.commodity[0].length; i++) {
        if (!state.commodity[0][i][state.shoppings[0][i].storeId]['ckeck' + state.shoppings[0][i].storeId]) {
            state.quanxuanB = false;
            break;
        }
        state.quanxuanB = true;
    }
}



export default {
    // 用户
    setUser(state, newUser) {
        state.user = newUser;
    },

    //购物车   
    setCommodity(state) {
        state.commodity = [];
        let arr = []
        for (let i = 0; i < state.shoppings[0].length; i++) {
            arr.push({ [state.shoppings[0][i].storeId]: {} });
            arr[i][state.shoppings[0][i].storeId] = {
                ['ckeck' + state.shoppings[0][i].storeId]: false,
                commoditys: []
            };
            for (let k = 0; k < state.shoppings[0][i].commoditys.length; k++) {
                arr[i][state.shoppings[0][i].storeId].commoditys.push(
                    {
                        ['ckeck' + state.shoppings[0][i].commoditys[k].id]: false,
                        ['number' + state.shoppings[0][i].commoditys[k].id]: 1,
                    });
            }
        }
        state.commodity.push(arr)
    },
    jia(state, data) {
        state.commodity[0][data.i][data.item.storeId].commoditys[data.index]['number' + data.item.commoditys[data.index].id] += data.fuhao
        zhongji(state);
    },
    titleChage(state, data) {
        for (let index = 0; index < state.commodity[0][data.i][data.item.storeId].commoditys.length; index++) {
            state.commodity[0][data.i][data.item.storeId].commoditys[index]['ckeck' + data.item.commoditys[index].id] = state.commodity[0][data.i][data.item.storeId]['ckeck' + data.item.storeId];
        }
        zhongji(state);
        quanxuanyanzheng(state);
    },
    listChage(state, data) {
        for (let index = 0; index < state.commodity[0][data.i][data.item.storeId].commoditys.length; index++) {
            if (!state.commodity[0][data.i][data.item.storeId].commoditys[index]['ckeck' + data.item.commoditys[index].id]) {
                state.commodity[0][data.i][data.item.storeId]['ckeck' + data.item.storeId] = false;
                break;
            }
            state.commodity[0][data.i][data.item.storeId]['ckeck' + data.item.storeId] = true;
        }
        zhongji(state);
        quanxuanyanzheng(state);
    },
    quanxuan(state) {
        for (let i = 0; i < state.commodity[0].length; i++) {
            for (let index = 0; index < state.commodity[0][i][state.shoppings[0][i].storeId].commoditys.length; index++) {
                state.commodity[0][i][state.shoppings[0][i].storeId]['ckeck' + state.shoppings[0][i].storeId] = state.quanxuanB;
                state.commodity[0][i][state.shoppings[0][i].storeId].commoditys[index]['ckeck' + state.shoppings[0][i].commoditys[index].id] = state.quanxuanB;
            }
        }
        zhongji(state);
    },
    deleteList(state,data){
        data.item.commoditys.splice(data.index,1);
        if(data.item.commoditys.length <=0){
            state.shoppings[0].splice(data.i,1);
            state.commodity[0].splice(data.i,1);
        }
    },
    pushList(state,data){
        for (let i = 0; i < state.shoppings[0].length; i++) {
            if(state.shoppings[0][i].storeId == data.storeId){
                state.shoppings[0][i].commoditys.push(data.commoditys)
                console.log(state.shoppings[0][i].commoditys);
                this.commit('setCommodity',state)
                console.log(state.commodity[0]);
                return
            }
        }
        state.shoppings[0].unshift(data);
        this.commit('setCommodity',state)
    },
}