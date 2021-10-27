export default{
    getDealList(state){
        let dealList=[]
        for (let i = 0; i < state.commodity[0].length; i++) {
            for (let index = 0; index < state.commodity[0][i][state.shoppings[0][i].storeId].commoditys.length; index++) {
                if (state.commodity[0][i][state.shoppings[0][i].storeId].commoditys[index]['ckeck' + state.shoppings[0][i].commoditys[index].id]) {
                    let data = {
                        shopID:state.shoppings[0][i].storeId,
                        shopName:state.shoppings[0][i].sotreName,
                        commodityID:state.shoppings[0][i].commoditys[index].id,
                        commodityName:state.shoppings[0][i].commoditys[index].name,
                        commodityImg:state.shoppings[0][i].commoditys[index].img,
                        commodityPrice:state.shoppings[0][i].commoditys[index].price,
                        commodityNumber:state.commodity[0][i][state.shoppings[0][i].storeId].commoditys[index]['number' + state.shoppings[0][i].commoditys[index].id]
                    }
                    dealList.push(data)
                }
            }
        }
        return dealList
    }
}