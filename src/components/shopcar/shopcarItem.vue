<template>
    <div class="shop-item-wrap">
        <div class="shop-items" v-for="(item, index) in arr.length" :key="index">
            <div class="shop-item-header">
                <span class="iconfont icon-yk_yuanquan" v-show="!goodsList[index].isSelect" @click="toSelect(index)"></span>
                <span class="iconfont icon-dagou" v-show="goodsList[index].isSelect" @click="toSelect(index)"></span>
                <div class="shop-name">池欧旗舰店</div>
                <span class="iconfont icon-right"></span>
                <span class="edit">编辑</span>
            </div>
            <div class="shop-item">
                <span class="iconfont icon-yk_yuanquan" v-show="!goodsList[index].isSelect" @click="toSelect(index)"></span>
                <span class="iconfont icon-dagou" v-show="goodsList[index].isSelect" @click="toSelect(index)"></span>
                <div class="shop-pic">
                    <img src="https://gw.alicdn.com/bao/uploaded/i3/3446905038/O1CN01Ka1m2J1n5Rrw7I8pf_!!3446905038.jpg_200x200q50s150.jpg_.webp" alt="">
                </div>
                <div class="shop-item-edit">
                    <p>冬装男士大毛领外套冬季棉衣中长款加厚棉服韩版潮流长款过膝棉袄</p>
                    <div class="shop-item-size">黑色;XL <span class="iconfont icon-downpx"></span></div>
                    <div class="shop-item-select">
                        <p class="price">￥128</p>
                        <p class="num">
                            <span @click="reduce(index)"> - </span>
                            <i ref="num">{{goodsList[index].num}}</i>
                            <span @click="increase(index)"> + </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShopCarItem",
    data() {
        return {
            arr: [],
            goodsList: []
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            let goodsList = [];
            this.arr.length = 5;
            for (let i = 0; i < this.arr.length; i++) {
                goodsList[i] = {
                    price: 128,
                    isSelect: false,
                    num: 1
                };
            }
            this.$store.commit('changeGoodsStatus', goodsList);
            this.goodsList = this.$store.state.goodsList;
        },
        increase(index) {
            let obj = this.$store.state.goodsList;
            ++obj[index].num;
            this.$store.commit('changeGoodsStatus', obj);
            window.console.log(this.$store.state.goodsList)
        },
        reduce(index) {
            let obj = this.$store.state.goodsList;
            if (this.goodsList[index].num !== 1) {
                --obj[index].num;
                this.$store.commit('changeGoodsStatus',  obj);
            }
        },
        toSelect(index) {
            let obj = this.$store.state.goodsList;
            obj[index].isSelect = !obj[index].isSelect;
            this.$store.commit('changeGoodsStatus',  obj);
        }
    },
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.shop-item-wrap {
    .shop-items {
        width: 469/$rem;
        height: 202/$rem;
        margin-bottom: 15/$rem;
        background-color: #fff;
        .shop-item-header {
            width: 469/$rem;
            height: 50/$rem;
            position: relative;
            padding-left: 15/$rem;
            box-sizing: border-box;
            display: flex;
            color: #051b28;
            font-size: 15/$rem;
            align-items: center;
            .iconfont {
                margin-right: 15/$rem;
                &.icon-dagou {
                    color: #ff5000;
                }
            }
            .shop-name {
                margin-right: 15/$rem;
            }
            .edit {
                position: absolute;
                right: 15/$rem;
            }
        }
        .shop-item {
            width: 469/$rem;
            height: 140/$rem;
            display: flex;
            align-items: center;
            >span {
                margin:  0 15/$rem;
                &.icon-dagou {
                    color: #ff5000;
                }
            }
            .shop-pic {
                width: 122/$rem;
                height: 122/$rem;
                margin-right: 15/$rem;
                img {
                    width: 100%;
                }
            }
            .shop-item-edit {
                width: 263/$rem;
                height: 121/$rem;
                font-size: 14/$rem;
                >p {
                    line-height: 20/$rem;
                }
                .shop-item-size {
                    width: 263/$rem;
                    height: 27/$rem;
                    color: #999999;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5/$rem;
                    padding: 0 5/$rem;
                    box-sizing: border-box;
                    line-height: 27/$rem;
                    background-color: #f5f5f5;
                }
                .shop-item-select {
                    width: 263/$rem;
                    height: 36/$rem;
                    display: flex;
                    margin-top: 10/$rem;
                    align-items: center;
                    justify-content: space-between;
                    .price {
                        font-size: 18/$rem;
                        color: #ff6600;
                        font-weight: 700;
                    }
                    .num {
                        font-size: 22/$rem;
                    }
                }
            }
        }
    }
    
}
</style>