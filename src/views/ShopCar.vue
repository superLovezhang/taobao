<template>
    <div class="shop-car-wrap">
        <div class="shop-car-header">
            <span class="iconfont icon-552cc14536532"></span>
            <p>购物车(10)</p>
        </div>
        <div class="separate"></div>
        <ShopCarItem />
        <div class="container">
            <HomeRefresh />
        </div>
        <ShopCarPay />
        <HomeTabBar />
    </div>
</template>

<script>
import ShopCarItem from '../components/shopcar/shopcarItem';
import HomeTabBar from '../components/home/homeTabBar';
import ShopCarPay from '../components/shopcar/shopcarPay';
import HomeRefresh from '../components/home/homeRefresh';
export default {
    components: {
        ShopCarItem,
        HomeTabBar,
        ShopCarPay,
        HomeRefresh
    }
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.shop-car-wrap {
    padding-bottom: 115/$rem;
    .container {
        width: 440/$rem;
        margin: 0 auto;
    }
    .shop-car-header {
         width: 469/$rem;
        height: 57/$rem;
        position: relative;
        background-color: #fff;
        span {
            position: absolute;
            left: 20/$rem;
            top: 15/$rem;
            font-weight: 700;
            font-size: 28/$rem;
            color: #61666f;
        }
        p {
            color: #051b28;
            font-size: 22/$rem;
            line-height: 57/$rem;
            text-align: center;
        }
    }
    .separate {
        height: 1px;
        margin-bottom: 15/$rem;
    }
}
</style>