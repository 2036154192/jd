<template>
    <div id="HomeList2">
        <div class="content">
            <div class="left">
                <div v-for="(item,index) in ListDataLeft" :key="index">
                    <h3>{{item.title}}</h3>
                    <div>
                        <div class="itemLeft">
                            <p>{{item.leftTitle}}</p>
                            <img :src="item.leftImgUrl" alt="">
                        </div>
                        <div class="itemRight">
                            <p>{{item.rightTitle}}</p>
                            <img :src="item.rgihtImgUrl" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div v-for="(item,index) in ListDataRight" :key="index">
                    <h3>{{item.title}}</h3>
                    <div>
                        <div class="itemLeft">
                            <p>{{item.leftTitle}}</p>
                            <img :src="item.leftImgUrl" alt="">
                        </div>
                        <div class="itemRight">
                            <p>{{item.rightTitle}}</p>
                            <img :src="item.rgihtImgUrl" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="buttom">
            <img src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" alt="">
        </div>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
export default {
    name:'HomeList2',
    setup(props) {
        
        let ListDataLeft = reactive([
            {title:'聚划算',leftTitle:'品牌折扣',leftImgUrl:'https://img.alicdn.com/tps/O1CN01oKfz3428wg2pMVDdk_!!0-juitemmedia.jpg_125x125q90_.webp',rightTitle:'品牌折扣',rgihtImgUrl:'https://gw.alicdn.com/imgextra/i2/2/TB2m7tdwf5TBuNjSspmXXaDRVXa_!!2-2-luban.png_125x125q90_.webp'},
            {title:'聚划算',leftTitle:'品牌折扣',leftImgUrl:'https://gw.alicdn.com/imgextra/i3/198/TB2adoFw9tYBeNjSspaXXaOOFXa_!!198-0-luban.jpg_180x180q90_.webp',rightTitle:'品牌折扣',rgihtImgUrl:'https://gw.alicdn.com/imgextra/i3/165/TB2gaIlXuUXBuNjt_a0XXcysXXa_!!165-0-luban.jpg_180x180q90_.webp'},
            {title:'聚划算',leftTitle:'品牌折扣',leftImgUrl:'https://gw.alicdn.com/imgextra/i2/86/TB2YDxDd_qWBKNjSZFAXXanSpXa_!!86-0-luban.jpg_125x125q90_.webp',rightTitle:'品牌折扣',rgihtImgUrl:'https://gw.alicdn.com/imgextra/i2/85/O1CN013DfDYC1CUyKu2A6bp_!!85-2-lubanu.png_180x180q90_.webp'},
        ])

        let ListDataRight = reactive([
            {title:'聚划算',leftTitle:'品牌折扣',leftImgUrl:'https://img.alicdn.com/tfs/TB1a8E4dmrqK1RjSZK9XXXyypXa-237-278.png_125x125q90_.webp',rightTitle:'品牌折扣',rgihtImgUrl:'https://gw.alicdn.com/imgextra/i4/44/O1CN01Dl04GM1CCC2GjzPmU_!!44-0-lubanu.jpg_180x180q90_.webp'},
            {title:'聚划算',leftTitle:'品牌折扣',leftImgUrl:'https://gw.alicdn.com/imgextra/i1/85/O1CN01LYseJU1CUyMYiGqv9_!!85-0-lubanu.jpg_125x125q90_.webp',rightTitle:'品牌折扣',rgihtImgUrl:'https://img.alicdn.com/tps/O1CN01wTdXNq1bX8dmIbG31_!!6000000003474-0-yinhe.jpg_125x125q90_.webp'},
            {title:'聚划算',leftTitle:'品牌折扣',leftImgUrl:'https://img.alicdn.com/tps/O1CN01DJZf8j28wg2oq1ehD_!!0-juitemmedia.jpg_125x125q90_.webp',rightTitle:'品牌折扣',rgihtImgUrl:'https://gw.alicdn.com/imgextra/i2/81/O1CN017Pt4he1CT8kza8jpn_!!81-0-lubanu.jpg_180x180q90_.webp'},
        
        ])

        return{
            ListDataLeft,
            ListDataRight
        }
    }

}
</script>
<style lang="less" scoped>
    #HomeList2{
        width: 7.1rem;
        padding: 0.3rem 0.2rem;
        .content{
            display: flex;
            width: 100%;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 0.1rem;
            .left{
                flex: 1;
                border-right: 1px solid #eee;
                border-bottom: 1px solid #eee;
            }
            .right{
                flex: 1;
            }
            .left,.right{
                width: 100%;
                >div{
                    width: 100%;
                    padding: 0.1rem;
                    >div{
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        .itemRight{
                            position: relative;
                            right: 0.2rem;
                        }
                        >div{
                            border-radius: 0.2rem;
                            background-color: antiquewhite;
                            width: 45%;
                            >img{
                                border-radius: 0.2rem;
                                width: 80%;
                                height: 1.3rem;
                            } 
                            p,img{
                                margin-left: 0.1rem;
                            } 
                        }
                    }
                }
            }
        }
        .buttom{
            width: 70%;
            margin: 0 auto;
            >img{
                width: 100%;
            }
        }
    }
</style>