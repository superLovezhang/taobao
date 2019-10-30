<template>
    <div class="shop-pay-wrap">
        <div class="all-selete">
            <span class="iconfont icon-yk_yuanquan" v-show="!isSelect" @click="toSelete(isSelect)"></span>
            <span class="iconfont icon-dagou" v-show="isSelect" @click="toSelete(isSelect)"></span>
            全选
        </div>
        <div class="total-price">合计：<span>￥{{totalPrice}}</span></div>
        <div class="shop-pay" @click="handlePay">结算({{totalNum}})</div>
    </div>
</template>

<script>
export default {
    name: 'ShopCarPay',
    data() {
        return {
            goodsList: []
        }
    },
    methods: {
        init() {
            this.goodsList = this.$store.state.goodsList;
        },
        toSelete(isSelect) {
            let arr = this.$store.state.goodsList.map(item => {
                if (isSelect) {
                    item.isSelect = false;
                    return item;
                } else {
                    item.isSelect = true;
                    return item;
                }
            });
            this.$store.commit('changeGoodsStatus', arr);
        },
        handlePay() {
            alert('支付' + this.totalPrice);
        }
    },
    computed: {
        isSelect() {
            return this.$store.state.goodsList.every(item => item.isSelect);
        },
        totalPrice() {
            let totalPrice = 0;
            let boughtArr = this.$store.state.goodsList.filter(item => {
                if (item.isSelect) {
                    return item;
                }
            });
            window.console.log(boughtArr)
            for (let i = 0; i < boughtArr.length; i++) {
               let num =  boughtArr[i].num;
               let price =  boughtArr[i].price;
               totalPrice += num * price;
            }
            return totalPrice;
        },
        totalNum() {
            return this.$store.state.goodsList.filter(item => {
                if (item.isSelect) {
                    return item;
                }
            }).length;
        }
    },
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.shop-pay-wrap {
    width: 469/$rem;
    height: 60/$rem;
    position: fixed;
    bottom: 55/$rem;
    display: flex;
    font-size: 20/$rem;
    align-items: center;
    background-color: #fff;
    .all-selete {
        width: 82/$rem;
        height: 60/$rem;
        text-align: center;
        line-height: 60/$rem;
        margin-left: 15/$rem;
        margin-right: 126/$rem;
        span {
            margin-right: 7/$rem;
            &.icon-dagou {
                color: #ff5500;
            }
        }
    }
    .total-price {
        width: 110/$rem;
        height: 60/$rem;
        line-height: 60/$rem;
        font-size: 18/$rem;
        margin-right: 16/$rem;
        span {
            font-size: 14/$rem;
            color: #ff5500;
        }
    }
    .shop-pay {
        width: 130/$rem;
        height: 60/$rem;
        color: #fff;
        line-height: 60/$rem;
        text-align: center;
        background-color: #ff5500;
    }
}
</style>