<template>
    <div class="shop-wrap">
        <div class="shop-goods-pic">
            <div class="little-tool">
                <p class="tool toback" @click="$router.go(-1)"><span class="iconfont icon-552cc14536532"></span></p>
                <p class="tool toshopcar" @click="$router.push('/shopcar')"><span class="iconfont icon-gouwuche"></span></p>
            </div>
            <img :src="shopInfo.pic" alt="">
        </div>
        <div class="shop-goods-descript">
            <div class="shop-price">￥69-136 <span>抢购价</span></div>
            <div class="bought-price">价格 <span>￥137</span></div>
            <p class="goods-item-descript">{{shopInfo.itemName}}</p>
            <div class="goods-info">
                <span>快递 0.00</span>
                <span>月销量 {{shopInfo.monthSellCount}}+件</span>
                <span>福建泉州</span>
            </div>
        </div>
        <div class="shop-server">
            <div class="shop-server-item">
                <span>促销</span>
                <div class="integral">
                    <i>积分</i>
                    购买可获得34积分
                    <span class="iconfont icon-right"></span>
                </div>
            </div>
            <div class="shop-server-item">
                <span>服务</span>
                <div class="integral">
                    假一赔一 · 30天质保+ · 上门取件 · 极速退款
                    <span class="iconfont icon-right"></span>
                </div>
            </div>
        </div>
        <ShopFeature />
    </div>
</template>

<script>
import ShopFeature from '../components/shop/shopFeature';
export default {
    data() {
        return {
            shopInfo: []
        }
    },
    activated() {
        this.init();
    },
    mounted() {
       this.init(); 
    },
    methods: {
        init() {
            let index = this.$route.params.index;
            this.axios('http://127.0.0.1:3000/api/getRecommedGoods')
                .then(res => {
                    window.console.log(res);
                    this.shopInfo = res.data.data.recommend.resultList[index % 10];
                })
        }
    },
    components: {
        ShopFeature
    }
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.shop-wrap {
    overflow: hidden;
    .shop-goods-pic {
        width: 469/$rem;
        height: 469/$rem;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .little-tool {
            width: 469/$rem;
            height: 38/$rem;
            display: flex;
            position: absolute;
            top: 0;
            padding: 0 13/$rem;
            box-sizing: border-box;
            justify-content: space-between;
            .tool {
                width: 38/$rem;
                height: 38/$rem;
                color: #fff;
                font-weight: 700;
                border-radius: 50%;
                line-height: 38/$rem;
                text-align: center;
                background-color: rgba($color: #000000, $alpha: .4)
            }
        }
    }
    .shop-goods-descript {
        width: 469/$rem;
        height: 160/$rem;
        font-size: 14/$rem;
        padding: 0 13/$rem;
        margin-bottom: 12/$rem;
        box-sizing: border-box;
        background-color: #fff;
        .shop-price {
            color: #ff0036;
            line-height: 35/$rem;
            font-size: 22/$rem;
            margin-right: 12/$rem;
            span {
                color: #fff;
                line-height: 20/$rem;
                font-size: 14/$rem;
                display: inline-block;
                background-color: #fb6878;
            }
        }
        .bought-price {
            margin: 10/$rem 0;
            color: #888888;
            span {
                text-decoration: line-through;
            }
        }
        .goods-item-descript {
            font-size: 18/$rem;
            line-height: 25/$rem;
        }
        .goods-info {
            color: #888;
            display: flex;
            margin-top: 15/$rem;
            justify-content: space-between;
        }
    }
    .shop-server {
        width: 469/$rem;
        height: 100/$rem;
        padding: 0 13/$rem;
        font-size: 14/$rem;
        box-sizing: border-box;
        background-color: #fff;
        .shop-server-item {
            width: 100%;
            height: 50/$rem;
            display: flex;
            align-items: center;
            >span {
                color: #999999;
                margin-right: 12/$rem;
            }
            .integral {
                width: 400/$rem;
                margin-top: 8/$rem;
                i {
                    color: #ff0036;
                    margin-right: 13/$rem;
                }
                span {
                    color: #999;
                    float: right;
                }
            }
        }
    }
}
</style>