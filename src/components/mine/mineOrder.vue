<template>
    <div class="mine-order-wrap">
        <div class="mine-order-header">
            <h3>我的订单</h3>
            <p>查看全部订单 <span class="iconfont icon-right"></span></p>
        </div>
        <div class="mine-all-order">
            <div class="mine-order-item">
                <span class="iconfont icon-fukuan"></span>
                <p>待付款</p>
            </div>
            <div class="mine-order-item">
                <span class="iconfont icon-daifahuo"></span>
                <p>待发货</p>
            </div>
            <div class="mine-order-item">
                <span class="iconfont icon-kuaidi"></span>
                <p>待收货</p>
            </div>
            <div class="mine-order-item">
                <span class="iconfont icon-xiaoxi"></span>
                <p>评价</p>
            </div>
            <div class="mine-order-item">
                <span class="iconfont icon-qian"></span>
                <p>退款/售后</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MineOrder'
}
</script>

<style lang="scss" scoped>
$rem: 750/16rem;
.mine-order-wrap {
    width: 704/$rem;
    height: 230/$rem;
    margin: 0 auto;
    border-radius: 20/$rem;
    background-color: #fff;
    .mine-order-header {
        width: 704/$rem;
        height: 77/$rem;
        line-height: 77/$rem;
        display: flex;
        font-size: 30/$rem;
        padding: 0 25/$rem;
        border-bottom: 1px solid #eeeee7;
        box-sizing: border-box;
        justify-content: space-between;
        p {
            color: #9f9f9f;
            font-size: 24/$rem;
        }
    }
    .mine-all-order {
        width: 704/$rem;
        height: 153/$rem;
        list-style: 153/$rem;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-around;
        span {
            color: #fe7500;
            font-size: 42/$rem;
        }
        p {
            margin-top: 20/$rem;
            font-size: 24/$rem;
        }
    }
}
</style>