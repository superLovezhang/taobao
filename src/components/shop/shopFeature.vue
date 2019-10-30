<template>
    <div class="shop-feature-wrap">
        <div class="shop-feature-item">
            <span class="iconfont icon-dianpu"></span>
            <p>店铺</p>
        </div>
        <div class="shop-feature-item">
            <span class="iconfont icon-wangwang"></span>
            <p>客服</p>
        </div>
        <div class="shop-feature-item">
            <span class="iconfont icon-shoucang"></span>
            <p>收藏</p>
        </div>
        <div class="btns">
            <div class="add-shop-car">加入购物车</div>
            <div class="topay">立即购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopFeature'    
}
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.shop-feature-wrap {
    width: 469/$rem;
    height: 62/$rem;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
    .shop-feature-item {
        width: (189/3)/$rem;
        color: #999;
        text-align: center;
        &:nth-of-type(2) span {
            color: #4a90e2;
        }
        >span {
            font-size: 20/$rem;
        }
        >p {
            margin-top: 6/$rem;
            font-size: 14/$rem;
        }
    }
    .btns {
        .add-shop-car,
        .topay {
            float: right;
            width: 140/$rem;
            height: 62/$rem;
            color: #fff;
            font-size: 18/$rem;
            line-height: 62/$rem;
            text-align: center;
            background-color: #ff9500;
        }
        .topay {
            background-color: #ff0036;
        }
    }
    
}
</style>